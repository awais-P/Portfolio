export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  link?: string;       
  githubLink?: string; 
  slug: {
    current: string;
  };
}