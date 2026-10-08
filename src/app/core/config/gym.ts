export type Inquiry = 'general' | 'daily' | 'quarterly' | 'trainer';
export interface GymConfig {
  name: string;
  whatsapp: string;
  address: string;
  hours: string;
  directionsUrl: string;
  mapEmbedUrl: string;
  social: { instagram: string; facebook: string };
  images: {
    hero: string;
    about: string;
    trainer: string;
    gallery: { src: string; alt: string; title: string }[];
  };
  services: { title: string; description: string }[];
  plans: {
    title: string;
    price: number;
    period: string;
    features: string[];
    inquiry: Inquiry;
    featured: boolean;
    cta: string;
  }[];
}
const photo = (id: string, w = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
export const gym: GymConfig = {
  name: 'IRON FIT GYM',
  whatsapp: '',
  address: '',
  hours: '',
  directionsUrl: '',
  mapEmbedUrl: '',
  social: { instagram: '', facebook: '' },
  images: {
    hero: photo('photo-1534438327276-14e5300c3a48', 2000),
    about: photo('photo-1581009146145-b5ef050c2e1e'),
    trainer: photo('photo-1571019613454-1cb2f99b2d8b'),
    gallery: [
      {
        src: photo('photo-1534438327276-14e5300c3a48'),
        alt: 'Máquinas y pesas en un gimnasio',
        title: 'Zona de pesas',
      },
      {
        src: photo('photo-1583454110551-21f2fa2afe61'),
        alt: 'Mancuernas para entrenamiento de fuerza',
        title: 'Máquinas y fuerza',
      },
      {
        src: photo('photo-1571902943202-507ec2618e8f'),
        alt: 'Sala de entrenamiento',
        title: 'Espacio de entrenamiento',
      },
      {
        src: photo('photo-1593079831268-3381b0db4a77'),
        alt: 'Equipamiento de gimnasio',
        title: 'Ambiente interior',
      },
    ],
  },
  services: [
    {
      title: 'Zona de máquinas',
      description:
        'Construye tu fuerza con equipamiento para trabajar distintos grupos musculares.',
    },
    {
      title: 'Entrenamiento personalizado',
      description:
        'Mejora tu técnica y avanza hacia tus objetivos con el acompañamiento de un personal trainer.',
    },
    {
      title: 'Entrenamiento libre',
      description:
        'Tu rutina, tu ritmo. Aprovecha las instalaciones y haz de cada entrenamiento un paso adelante.',
    },
  ],
  plans: [
    {
      title: 'Pase diario',
      price: 8,
      period: '/ día',
      features: [
        'Acceso por un día',
        'Entrenamiento con máquinas',
        'Ideal para conocer el gimnasio',
      ],
      inquiry: 'daily',
      featured: false,
      cta: 'Consultar pase diario',
    },
    {
      title: 'Plan trimestral',
      price: 180,
      period: '/ 3 meses',
      features: [
        'Tres meses para trabajar en ti',
        'Acceso durante la vigencia del plan',
        'Sujeto a las condiciones del gimnasio',
      ],
      inquiry: 'quarterly',
      featured: true,
      cta: 'Quiero inscribirme',
    },
  ],
};
export const messages: Record<Inquiry, string> = {
  general: 'Hola, vi su página web y quisiera recibir más información sobre el gimnasio.',
  daily: 'Hola, vi su página web y quisiera consultar por el pase diario de S/ 8.',
  quarterly:
    'Hola, vi su página web y estoy interesado en el plan de 3 meses por S/ 180. ¿Cómo puedo inscribirme?',
  trainer: 'Hola, quisiera recibir información sobre el servicio de entrenamiento personalizado.',
};
