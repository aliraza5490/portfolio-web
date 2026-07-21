export interface ProjectStat {
  text: string;
  icon?: string;
}

export interface Props {
  title: string;
  summary: string;
  bullets: string[];
  technologies: string[];
  image: string;
  images?: string[];
  projectUrl?: string;
  githubUrl?: string;
  isFeatured?: boolean;
  stats?: ProjectStat[];
  badges?: string[];
}
