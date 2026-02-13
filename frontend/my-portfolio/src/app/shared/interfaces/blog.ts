export interface Blog {
  title: string;
  slug: string;
  mainImageUrl: string;
  publishedAt: string;
  body: any[]; // <--- Just change this to any[]
}