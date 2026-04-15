const merchantCoupons = [
  {
    id: 1,
    title: 'Escapada de fin de semana todo incluido para 2 personas',
    description: 'Relájate en un resort frente al mar con acceso a piscina, descanso total y ambiente ideal para compartir.',
    oldPrice: 'Q3040.00',
    price: 'Q1999.00',
    location: 'Monterrico, Santa Rosa',
    schedule: 'Check-in 3:00 PM / Check-out 12:00 PM',
    expiresAt: '2026-04-23T23:30:00',
    status: 'activo',
    redeemedCount: 12,
    pendingRedeemCount: 8,
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 2,
    title: 'Tratamiento facial premium con descuento especial',
    description: 'Revitaliza tu piel con un tratamiento facial completo con limpieza profunda y productos especializados.',
    oldPrice: 'Q450.00',
    price: 'Q299.00',
    location: 'Zona 10, Guatemala',
    schedule: 'Lunes a sábado de 9:00 AM a 7:00 PM',
    expiresAt: '2026-04-27T23:30:00',
    status: 'activo',
    redeemedCount: 5,
    pendingRedeemCount: 14,
    coverImage: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  {
    id: 3,
    title: 'Exámenes de laboratorio completos con promoción exclusiva',
    description: 'Chequeo completo de salud con pruebas clínicas esenciales para prevención y control médico.',
    oldPrice: 'Q2075.00',
    price: 'Q499.00',
    location: 'Zona 9, Guatemala',
    schedule: 'Lunes a sábado de 6:30 AM a 4:00 PM',
    expiresAt: '2026-04-26T23:30:00',
    status: 'inactivo',
    redeemedCount: 18,
    pendingRedeemCount: 0,
    coverImage: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85'
    ]
  }
];

export default merchantCoupons;