const offerDetails = {
  1: {
    id: 1,
    title: 'Oferta demo',
    description: 'Descripción de prueba',
    oldPrice: 'Q450.00',
    price: 'Q299.00',
    location: 'Guatemala',
    schedule: '9am - 6pm',
    expiresAt: '2026-03-22T23:30:00',
    images: [
      'https://picsum.photos/1200/800?1',
      'https://picsum.photos/1200/800?2'
    ]
  },
  2: {
    id: 2,
    title: 'Escapada de fin de semana todo incluido para 2 personas',
    description: 'Relájate en un resort frente al mar con acceso a piscina, descanso total y ambiente ideal para compartir en pareja o familia.',
    oldPrice: 'Q3040.00',
    price: 'Q1999.00',
    location: 'Monterrico, Santa Rosa',
    schedule: 'Check-in 3:00 PM / Check-out 12:00 PM',
    expiresAt: '2026-03-23T23:30:00',
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  3: {
    id: 3,
    title: 'Retenedor dental o guarda para rechinado con precio especial',
    description: 'Protege tu salud bucal con un retenedor dental elaborado por especialistas con evaluación previa incluida.',
    oldPrice: 'Q500.00',
    price: 'Q149.00',
    location: 'Zona 15, Guatemala',
    schedule: 'Lunes a viernes de 8:00 AM a 6:00 PM',
    expiresAt: '2026-03-24T23:30:00',
    images: [
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  4: {
    id: 4,
    title: 'Paquete dental con limpieza, pulido y sellantes',
    description: 'Mantén tu sonrisa saludable con un paquete completo de limpieza, pulido y sellantes realizado por profesionales.',
    oldPrice: 'Q1200.00',
    price: 'Q259.00',
    location: 'Mixco, Guatemala',
    schedule: 'Lunes a sábado de 7:30 AM a 5:30 PM',
    expiresAt: '2026-03-25T23:30:00',
    images: [
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  5: {
    id: 5,
    title: 'Exámenes de laboratorio completos con promoción exclusiva',
    description: 'Chequeo completo de salud con pruebas clínicas esenciales para prevención y control médico.',
    oldPrice: 'Q2075.00',
    price: 'Q499.00',
    location: 'Zona 9, Guatemala',
    schedule: 'Lunes a sábado de 6:30 AM a 4:00 PM',
    expiresAt: '2026-03-26T23:30:00',
    images: [
      'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  6: {
    id: 6,
    title: 'Estadía boutique con piscina, desayunos y acceso privado',
    description: 'Disfruta de una experiencia relajante con hospedaje boutique, desayuno incluido y acceso a piscina privada.',
    oldPrice: 'Q1500.00',
    price: 'Q799.00',
    location: 'Puerto San José, Escuintla',
    schedule: 'Reservas de 8:00 AM a 8:00 PM',
    expiresAt: '2026-03-27T23:30:00',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  7: {
    id: 7,
    title: 'Tratamiento facial premium con descuento especial',
    description: 'Revitaliza tu piel con un tratamiento facial completo con limpieza profunda y productos especializados.',
    oldPrice: 'Q450.00',
    price: 'Q299.00',
    location: 'Zona 10, Guatemala',
    schedule: 'Lunes a sábado de 9:00 AM a 7:00 PM',
    expiresAt: '2026-03-27T23:30:00',
    images: [
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  8: {
    id: 8,
    title: 'Escapada de fin de semana todo incluido para 2 personas',
    description: 'Disfruta de una escapada con todo incluido en un entorno natural y relajante.',
    oldPrice: 'Q3040.00',
    price: 'Q1999.00',
    location: 'Monterrico, Santa Rosa',
    schedule: 'Check-in 3:00 PM / Check-out 12:00 PM',
    expiresAt: '2026-03-27T23:30:00',
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  9: {
    id: 9,
    title: 'Retenedor dental o guarda para rechinado con precio especial',
    description: 'Protección dental efectiva para evitar el desgaste por rechinado nocturno.',
    oldPrice: 'Q500.00',
    price: 'Q149.00',
    location: 'Zona 15, Guatemala',
    schedule: 'Lunes a viernes de 8:00 AM a 6:00 PM',
    expiresAt: '2026-03-27T23:30:00',
    images: [
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  10: {
    id: 10,
    title: 'Paquete dental con limpieza, pulido y sellantes',
    description: 'Promoción dental para mejorar tu salud bucal con tratamiento preventivo completo.',
    oldPrice: 'Q1200.00',
    price: 'Q259.00',
    location: 'Mixco, Guatemala',
    schedule: 'Lunes a sábado de 7:30 AM a 5:30 PM',
    expiresAt: '2026-03-27T23:30:00',
    images: [
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  11: {
    id: 11,
    title: 'Exámenes de laboratorio completos con promoción exclusiva',
    description: 'Realiza tus exámenes clínicos con equipo moderno y resultados confiables.',
    oldPrice: 'Q2075.00',
    price: 'Q499.00',
    location: 'Zona 9, Guatemala',
    schedule: 'Lunes a sábado de 6:30 AM a 4:00 PM',
    expiresAt: '2026-03-27T23:30:00',
    images: [
      'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85'
    ]
  },
  12: {
    id: 12,
    title: 'Estadía boutique con piscina, desayunos y acceso privado',
    description: 'Hospedaje exclusivo con todas las comodidades para una experiencia relajante.',
    oldPrice: 'Q1500.00',
    price: 'Q799.00',
    location: 'Puerto San José, Escuintla',
    schedule: 'Reservas de 8:00 AM a 8:00 PM',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85'
    ]
  }
};

export default offerDetails;