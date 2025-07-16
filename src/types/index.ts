export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    imageUrl: string;
    projectUrl?: string;
    githubUrl?: string;
    client: string;
    year: string;
    featured: boolean;
  }
  
  export interface WorkExperience {
    id: string;
    company: string;
    position: string;
    duration: string;
    description: string;
    achievements: string[];
    logoUrl: string;
    companyUrl?: string;
  }
  
  export interface Publication {
    id: string;
    title: string;
    type: 'publication' | 'workshop';
    description: string;
    date: string;
    url?: string;
    venue?: string;
  }
  
  export interface Skill {
    id: string;
    name: string;
    category: 'programming' | 'geospatial' | 'database' | 'cloud' | 'other';
    logoUrl: string;
    proficiency: number;
  }
  
  export interface Client {
    id: string;
    name: string;
    logoUrl: string;
    url?: string;
    description?: string;
  }
  
  export interface PortfolioUpdate {
    id: string;
    title: string;
    description: string;
    date: string;
    type: 'experience' | 'certification' | 'project' | 'collaboration';
  }