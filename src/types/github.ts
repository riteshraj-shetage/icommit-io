// src/types/github.ts

export type ContributionLevel = 0 | 1 | 2 | 3 | 4;

export interface ContributionDay {
  date: string;
  count: number;
  level: ContributionLevel;
}

export interface DeveloperProfile {
  login: string;
  name?: string;
  avatarUrl?: string;
  company?: string;
  location?: string;
  bio?: string;
  website?: string;
  createdAt: string;
  followersCount: number;
  followingCount: number;
}

export interface DeveloperStats {
  totalRepos: number;
  contributions: number;
  totalStars: number;
  since: number;
}

export interface LanguageStat {
  lang: string;
  percent: number;
  color: string;
}

export interface RepositoryData {
  id: string;
  name: string;
  description: string | null;
  url: string;
  website: string | null;
  stargazerCount: number;
  forksCount: number;
  pushedAt: string;
  primaryLanguage: {
    name: string;
    color: string;
  } | null;
}

export interface SocialLink {
  provider: string; 
  url: string;
}

export interface AutoData {
  totalStars: string | number;
  totalForks: string | number;
}