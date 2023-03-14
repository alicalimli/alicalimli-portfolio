interface ProjectProps {
  id: number;
  created_at: any;
  name: string;
  description: string;
  tools: string[];
  role: string;
  images: string[];
  type: "featured" | "others";
}
