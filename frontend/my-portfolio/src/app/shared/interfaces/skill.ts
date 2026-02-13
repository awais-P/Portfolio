export interface Skill {
  name: string;
  subtitle?: string;
  iconUrl: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  proficiency: number;
}