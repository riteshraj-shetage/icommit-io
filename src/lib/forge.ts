// src/lib/forge.ts
import type { DeveloperProfile, ContributionDay, ContributionLevel, DeveloperStats, LanguageStat, RepositoryData, SocialLink, AutoData } from "../types/github";

export function forgeProfile(rawData: any): DeveloperProfile {
  const user = rawData.user;
  return {
    login: user.login,
    name: user.name,
    avatarUrl: user.avatarUrl,
    company: user.company,
    location: user.location,
    bio: user.bio,
    createdAt: new Date(user.createdAt).toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric'
    }).replace(',', ''),    
    website: user.websiteUrl,
    followersCount: user.followers.totalCount,
    followingCount: user.following.totalCount,
  };
}

export function forgeContributions(rawData: any): ContributionDay[] {
  const weeks = rawData.user.contributionsCollection.contributionCalendar.weeks;
  const days: ContributionDay[] = [];

  weeks.forEach((week: any) => {
    week.contributionDays.forEach((day: any) => {
      
      let level: ContributionLevel = 0;
      switch (day.contributionLevel) {
        case "NONE": level = 0; break;
        case "FIRST_QUARTILE": level = 1; break;
        case "SECOND_QUARTILE": level = 2; break;
        case "THIRD_QUARTILE": level = 3; break;
        case "FOURTH_QUARTILE": level = 4; break;
      }

      days.push({
        date: day.date,
        count: day.contributionCount,
        level: level,
      });
    });
  });

  return days;
}

export function forgeStats(rawData: any): DeveloperStats {
  const user = rawData.user;
  

  const totalStars = user.repositories.nodes.reduce(
    (acc: number, repo: any) => acc + repo.stargazerCount, 
    0
  );

  return {
    totalRepos: user.repositories.totalCount,
    contributions: user.contributionsCollection.contributionCalendar.totalContributions,
    totalStars: totalStars,
    since: new Date(user.createdAt).getFullYear(),
  };
}


export function forgeLanguages(rawData: any): LanguageStat[] {
  const nodes = rawData.user?.repositories?.nodes || [];
  const langMap: Record<string, { score: number; color: string }> = {};
  let totalScore = 0;

  const IGNORED_LANGUAGES = new Set(["HTML", "CSS", "JavaScript", "SCSS", "Sass", "Less"]);

  nodes.forEach((repo: any) => {
    if (!repo.languages || !repo.languages.edges) return;

    const sortedEdges = [...repo.languages.edges].sort((a: any, b: any) => b.size - a.size);

    const validEdges = sortedEdges.filter((edge: any) => !IGNORED_LANGUAGES.has(edge.node.name));

    validEdges.forEach((edge: any, index: number) => {
      const name = edge.node.name;
      const color = edge.node.color;

      const weight = 1 / Math.pow(2, index); 

      if (!langMap[name]) {
        langMap[name] = { score: 0, color: color };
      }
      
      langMap[name].score += weight;
      totalScore += weight;
    });
  });

  if (totalScore === 0) return [];

  const stats: LanguageStat[] = Object.keys(langMap)
    .map(name => ({
      lang: name,
      percent: (langMap[name].score / totalScore) * 100,
      color: langMap[name].color
    }))
    .sort((a, b) => b.percent - a.percent);

  return stats.slice(0, 9);
}

export function forgeRepositories(rawData: any): RepositoryData[] {
  const nodes = rawData.user.repositories.nodes;

  return nodes.map((repo: any) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    url: repo.url,
    website: repo.homepageUrl,
    stargazerCount: repo.stargazerCount,
    forksCount: repo.forkCount,
    pushedAt: repo.pushedAt,
    primaryLanguage: repo.primaryLanguage 
      ? { name: repo.primaryLanguage.name, color: repo.primaryLanguage.color }
      : null,
  }));
}

export function forgeSocialLinks(rawData: any): SocialLink[] {
  const nodes = rawData.user.socialAccounts?.nodes || [];

  return nodes.map((node: any) => ({
    provider: node.provider || "GENERIC",
    url: node.url,
  }));
}

export function getCounts(rawData: any): AutoData {
  const autoRepo = rawData?.user?.repositories?.nodes?.find(
    (repo: any) => repo.name === "autocrafts-io"
  );

  return {
    totalStars: autoRepo ? autoRepo.stargazerCount : 128,
    totalForks: autoRepo ? autoRepo.forkCount : 64
  };
}