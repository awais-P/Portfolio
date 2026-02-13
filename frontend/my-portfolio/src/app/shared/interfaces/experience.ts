export interface Experience {
  jobTitle: string;
  company: string;
  companyLogoUrl?: string;
  location?: string;      // New Field
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  description: string;    // Changed from responsibilities[] to string
  technologies?: string;  // New Field
}