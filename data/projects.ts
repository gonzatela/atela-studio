import { Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    id: 'atela-homes',
    title: 'Atela Homes',
    client: 'Atela Luxury Real Estate',
    category: 'Real Estate',
    year: '2026',
    description: 'Exclusive luxury real estate web application featuring high-end property showcases, interactive search, and refined editorial visual identity.',
    fullDescription: 'Atela Homes was engineered to set a new benchmark for boutique luxury real estate platforms. Combining fluid motion, immersive property galleries, intuitive location search, and an ultra-sophisticated aesthetic tailored for high-net-worth buyers.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://atelahomes.vercel.app/',
    isReal: true,
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Bespoke UI', 'Real Estate'],
    metrics: [
      { label: 'Page Load Speed', value: '0.4s' },
      { label: 'Conversion Rate', value: '+42%' },
      { label: 'Lighthouse Score', value: '99/100' }
    ],
    deliverables: [
      'UI/UX Architecture & Layout',
      'High-Performance Frontend',
      'Interactive Property Filtering',
      'Mobile Luxury Responsiveness'
    ],
    challenge: 'Deliver an ultra-luxurious, effortless search and browsing experience for high-end properties without sacrificing page load performance or responsive elegance.',
    solution: 'Built with Next.js and optimized lazy-loaded responsive media galleries, paired with custom micro-animations that make property exploration feel fluid and dynamic.'
  },
  {
    id: 'gng-interiorismo',
    title: 'G&G Interiorismo',
    client: 'G&G Architecture & Interior Design',
    category: 'Interior Design',
    year: '2025',
    description: 'Editorial digital experience for a haute interior architecture firm, emphasizing space, texture, and refined aesthetic storytelling.',
    fullDescription: 'G&G Interiorismo required a web platform that felt like turning the pages of an architectural art monograph. We designed a minimal, high-contrast layout that elevates photography, highlights residential and commercial portfolio works, and simplifies client inquiries.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://www.gnginteriorismo.com/',
    isReal: true,
    tags: ['React', 'Editorial Design', 'Custom CSS', 'Architecture Portfolio'],
    metrics: [
      { label: 'User Engagement', value: '+3.5x' },
      { label: 'Lead Inquiries', value: '+65%' },
      { label: 'Mobile Traffic', value: '68%' }
    ],
    deliverables: [
      'Monograph Layout Design',
      'Interactive Portfolio Grid',
      'Project Case Studies',
      'SEO & Performance Tuning'
    ],
    challenge: 'Reflect the meticulous craftsmanship and tactile luxury of interior spaces in a fast, responsive digital medium.',
    solution: 'Crafted a sleek, typography-first architecture with smooth section transitions, oversized photography containers, and minimalist navigation.'
  },
  {
    id: 'vanguard-atelier',
    title: 'Vanguard Atelier',
    client: 'Vanguard Paris & Madrid',
    category: 'Branding',
    year: '2026',
    description: 'Bespoke brand identity and interactive concept showcase for a contemporary haute couture studio.',
    fullDescription: 'A high-impact digital experience featuring dark mode glassmorphism, interactive runway previews, 3D element highlights, and direct appointment scheduling for private viewings.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://atelahomes.vercel.app/',
    isReal: false,
    tags: ['Design System', '3D Motion', 'Next.js', 'Luxury Brand'],
    metrics: [
      { label: 'Brand Perception', value: 'Elite' },
      { label: 'Smooth FPS', value: '60 FPS' }
    ],
    deliverables: [
      'Digital Brand Identity',
      'Interactive Collection Grid',
      'Private Booking System'
    ],
    challenge: 'Create an unforgettable aesthetic first impression for international fashion clientele.',
    solution: 'Integrated dynamic parallax scroll triggers, editorial serif accents, and magnetic micro-interactions.'
  },
  {
    id: 'aura-capital',
    title: 'Aura Capital Platform',
    client: 'Aura Wealth Partners',
    category: 'Fintech',
    year: '2026',
    description: 'Next-generation wealth management interface combining high security with effortless visual clarity.',
    fullDescription: 'A custom fintech web experience tailored for private wealth partners. Built with real-time dynamic charts, dark velvet color contrast, and streamlined onboarding workflows.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://atelahomes.vercel.app/',
    isReal: false,
    tags: ['Fintech UI', 'React', 'Data Visualization', 'Security First'],
    metrics: [
      { label: 'Security Score', value: 'AAA' },
      { label: 'User Satisfaction', value: '98%' }
    ],
    deliverables: [
      'SaaS Web Interface',
      'Custom Charting UI',
      'Client Onboarding Portal'
    ],
    challenge: 'Simplify complex financial portfolios while maintaining a prestigious, trustworthy atmosphere.',
    solution: 'Implemented strict typography hierarchy, high-contrast dark theme, and fluid SVG micro-interactions.'
  }
];
