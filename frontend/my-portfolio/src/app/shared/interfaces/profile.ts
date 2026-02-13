export interface Profile {
  name: string;
  tagline: string;
  bio: string;
  email: string;
  profileImageUrl: string;
  resumeUrl: string; // The link to download the PDF
  socialLinks: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}