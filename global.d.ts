interface ProjectProps {
  id: number;
  created_at: any;
  name: string;
  description: string;
  tools: string[];
  role: string;
  images: string[];
  github_link: string;
  deployed_link: string;
  type: "featured" | "others";
}
