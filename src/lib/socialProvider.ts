import type { ComponentType, CSSProperties } from "react";
import { Link2 } from "lucide-react";
import { PROVIDER_REGISTRY } from "./providerRegistry";

export interface SocialIdentity {
  provider: string;
  handle: string;
  url: string;
  Icon: ComponentType<{ className?: string; style?: CSSProperties }>;
  color: string | undefined; 
}

const GENERIC_IDENTITY = {
  provider: "Link",
  Icon: Link2,
  color: undefined, 
};

export function extractSocialIdentity(rawUrl: string): SocialIdentity {
  if (!rawUrl) return { handle: "", url: "", ...GENERIC_IDENTITY };

  const normalizedUrl = rawUrl.startsWith("http") ? rawUrl : `https://${rawUrl}`;
  
  try {
    const urlObj = new URL(normalizedUrl);
    
    const cleanHostname = urlObj.hostname.replace(/^www\./i, "").toLowerCase();
    
    let identity = PROVIDER_REGISTRY[cleanHostname];

    if (!identity) {
      const parts = cleanHostname.split('.');
      if (parts.length > 2) {
         const rootDomain = `${parts[parts.length - 2]}.${parts[parts.length - 1]}`;
         identity = PROVIDER_REGISTRY[rootDomain];
      }
    }

    const handle = normalizedUrl
      .replace(/^https?:\/\/(www\.)?/, "")
      .replace(/\/$/, "");

    return {
      provider: identity?.provider || GENERIC_IDENTITY.provider,
      Icon: identity?.Icon || GENERIC_IDENTITY.Icon,
      color: identity?.color || GENERIC_IDENTITY.color,
      handle: handle,
      url: normalizedUrl,
    };

  } catch (error) {

    return {
      provider: GENERIC_IDENTITY.provider,
      Icon: GENERIC_IDENTITY.Icon,
      color: GENERIC_IDENTITY.color,
      handle: rawUrl,
      url: normalizedUrl,
    };
  }
}