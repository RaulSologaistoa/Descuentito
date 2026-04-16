import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authUsers from '../../data/authUsers';
import './BackofficeLogin.css';

export default function BackofficeLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const email = form.email.trim().toLowerCase();
    const password = form.password.trim();

    if (!email || !password) {
      setError('Ingresa correo y contraseña.');
      return;
    }

    const userFound = authUsers.find(
      (user) =>
        user.email.toLowerCase() === email &&
        user.password === password
    );

    if (!userFound) {
      setError('Credenciales inválidas.');
      return;
    }

    if (userFound.status !== 1) {
      setError('El usuario no está activo.');
      return;
    }

    if (userFound.role !== 'admin' || userFound.roleId !== 1) {
      setError('Este acceso es exclusivo para backoffice.');
      return;
    }

    localStorage.setItem(
      'user',
      JSON.stringify({
        id: userFound.id,
        roleId: userFound.roleId,
        role: 'backoffice',
        firstName: userFound.firstName,
        lastName: userFound.lastName,
        email: userFound.email,
      })
    );

    navigate('/backoffice/dashboard');
  };

  return (
    <div className="bo-login-page">
      <div className="bo-login-card">
        <div className="bo-login-right">
          <div className="bo-login-brand">
            <h1>Descuentito</h1>
          </div>

          <form onSubmit={handleSubmit} className="bo-login-form">
            <div className="bo-input-group">
              <span className="bo-input-icon">👤</span>
              <input
                type="email"
                name="email"
                placeholder="Correo"
                value={form.email}
                onChange={handleChange}
                autoComplete="username"
              />
            </div>

            <div className="bo-input-group">
              <span className="bo-input-icon">🔒</span>
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={form.password}
                onChange={handleChange}
                autoComplete="current-password"
              />
            </div>

            {error && <div className="bo-login-error">{error}</div>}

            <button type="submit" className="bo-login-button">
              INICIAR SESIÓN
            </button>

            <div className="bo-login-version">Versión 1.0</div>
          </form>
        </div>
      </div>
    </div>
  );
}