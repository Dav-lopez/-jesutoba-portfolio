export interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  description: string | null;
  fork: boolean;
  updated_at: string;
}

export interface GithubUser {
  login: string;
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  html_url: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  stat: string;
  icon: string;
  tags: string[];
  github: string;
  category: "ml" | "data" | "devops" | "obs" | "sales" | "weather";
  challenge: string;
  solution: string;
  impact: string[];
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
  chips: string[];
  accentColor?: string;
}

export interface Skill {
  category: string;
  skills: string[];
}
