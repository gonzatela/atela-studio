import { Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    id: 'atela-homes',
    title: 'Atela Homes',
    client: 'Atela Inmobiliaria de Lujo',
    category: 'Real Estate',
    year: '2026',
    description: 'Plataforma web inmobiliaria de alto nivel con catálogo de propiedades exclusivas, diseño elegante y velocidad de carga instantánea.',
    fullDescription: 'Desarrollado para Atela Homes. Una experiencia digital moderna pensada para destacar viviendas exclusivas, con diseño limpio, imágenes de alta resolución y navegación fluida en todos los dispositivos.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://atelahomes.vercel.app/',
    isReal: true,
    tags: ['Diseño Web', 'Inmobiliaria', 'A Medida', 'Responsive'],
    metrics: [
      { label: 'Carga Móvil', value: '< 1s' },
      { label: 'Diseño Exclusivo', value: '100%' }
    ],
    deliverables: [
      'Diseño y Maquetación Web',
      'Catálogo de Propiedades',
      'Adaptación Móvil Completa',
      'Optimización de Imágenes'
    ],
    challenge: 'Crear un portal inmobiliario elegante, limpio y rápido que transmita el valor premium de las propiedades.',
    solution: 'Maquetación cuidada, tipografía clara y navegación intuitiva para que los compradores encuentren la propiedad ideal de forma sencilla.'
  },
  {
    id: 'gn-interiorismo',
    title: 'G&N Interiorismo',
    client: 'G&N Estudio de Arquitectura e Interiorismo',
    category: 'Interiorismo',
    year: '2025',
    description: 'Web corporativa tipo monografía para estudio de interiorismo y arquitectura, enfocada en resaltar proyectos y acabados.',
    fullDescription: 'Diseñado para G&N Interiorismo. Un sitio web limpio y elegante que funciona como portafolio visual de proyectos residenciales y comerciales.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://www.gnginteriorismo.com/',
    isReal: true,
    tags: ['Interiorismo', 'Portafolio', 'Diseño Editorial', 'Responsive'],
    metrics: [
      { label: 'Navegación Fluida', value: '100%' },
      { label: 'Diseño Personalizado', value: 'Sí' }
    ],
    deliverables: [
      'Diseño de Portafolio Visual',
      'Presentación de Proyectos',
      'Formulario de Contacto'
    ],
    challenge: 'Reflejar la calidad estética y el cuidado por el detalle del estudio en una página web ágil.',
    solution: 'Uso de fotografías de gran formato, espaciados limpios y tipografía sobria para resaltar cada proyecto.'
  }
];
