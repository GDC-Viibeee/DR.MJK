
export interface Publication {
  title: string;
  journal?: string;
  details: string;
  link?: string;
  type: 'Thesis' | 'Paper' | 'Poster';
}

export interface Achievement {
  category: 'Award' | 'Rank';
  title: string;
  description: string;
}

export interface Specialization {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface NavRefs {
  about: React.RefObject<HTMLDivElement>;
  specializations: React.RefObject<HTMLDivElement>;
  research: React.RefObject<HTMLDivElement>;
  achievements: React.RefObject<HTMLDivElement>;
  contact: React.RefObject<HTMLDivElement>;
}
