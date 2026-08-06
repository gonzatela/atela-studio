export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'Real Estate' | 'Interior Design' | 'E-Commerce' | 'Fintech' | 'Branding';
  year: string;
  description: string;
  fullDescription: string;
  image: string;
  liveUrl: string;
  isReal: boolean;
  tags: string[];
  metrics?: { label: string; value: string }[];
  deliverables: string[];
  challenge: string;
  solution: string;
}
