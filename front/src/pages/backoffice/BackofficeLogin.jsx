import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BackofficeLogin.css';

export default function BackofficeLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    user: '',
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

    const user = form.user.trim();
    const password = form.password.trim();

    if (!user || !password) {
      setError('Ingresa usuario y contraseña.');
      return;
    }

    // Simulación temporal de login
    // Luego aquí conectamos API real
    if (user === 'backoffice' && password === '1234') {
      localStorage.setItem(
        'user',
        JSON.stringify({
          username: user,
          role: 'backoffice',
        })
      );

      navigate('/backoffice/dashboard');
      return;
    }

    setError('Credenciales inválidas.');
  };

  return (
    <div className="bo-login-page">
      <div className="bo-login-card">
        <div className="bo-login-left">
          <div className="bo-graphic-circle">
            <div className="bo-laptop">
              <div className="bo-laptop-screen">
                <div className="bo-user-icon">
                  <div className="bo-user-head"></div>
                  <div className="bo-user-body"></div>
                </div>
              </div>
              <div className="bo-laptop-base"></div>
            </div>
          </div>

          <span className="bo-shape bo-shape-blue bo-shape-1"></span>
          <span className="bo-shape bo-shape-green bo-shape-2"></span>
          <span className="bo-shape bo-shape-blue bo-shape-3"></span>
          <span className="bo-shape bo-shape-gray bo-shape-4"></span>
          <span className="bo-shape bo-shape-green bo-shape-5"></span>
        </div>

        <div className="bo-login-right">
          <div className="bo-login-brand">
            <h1>Backoffice</h1>
            <p>Acceso restringido para personal autorizado</p>
          </div>

          <form onSubmit={handleSubmit} className="bo-login-form">
            <div className="bo-input-group">
              <span className="bo-input-icon">👤</span>
              <input
                type="text"
                name="user"
                placeholder="Usuario"
                value={form.user}
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