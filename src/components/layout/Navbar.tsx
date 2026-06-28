import { GitFork, Star } from "lucide-react";
import { useState } from "react";
import { Check, Share2 } from "lucide-react";

type NavbarProps = {
  username: string;
  starsCount?: string | number;
  forkCount?: string | number;
};

export default function Navbar({ username, starsCount, forkCount }: NavbarProps) {
    const [copied, setCopied] = useState(false);
  
    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {}
    };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        
        <a href={`https://github.com/${username}`} className="flex items-center gap-3 font-mono text-base tracking-tight text-foreground group">
          <img 
            src="/favicon.svg" 
            alt="GitHub" 
            className="h-6 w-6" 
          />
          <span className="text-md text-foreground/80 hover:text-foreground tracking-wide" title="View on GitHub">
            @{username}
          </span>
        </a>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/riteshraj-shetage/autocrafts-io"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border border-border font-mono text-xs uppercase tracking-wider text-muted-foreground transition-all"
            title={`Give a star to 'autocrafts-io' on GitHub`}
          >
            <div className="flex items-center gap-2 bg-muted px-3 py-1.5 group hover:bg-muted hover:text-foreground transition-colors">
              <Star className="w-3.5 h-3.5 text-muted-foreground group-hover:text-amber-400 group-hover:fill-amber-400" />
              <span className="hidden sm:inline">Star</span>
            </div>
            
            <div className="border-l border-border bg-muted/50 px-3 py-1.5 font-bold text-foreground/80 transition-colors">
              {starsCount}
            </div>
          </a>

          <a
            href="https://github.com/riteshraj-shetage/autocrafts-io/fork"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border border-border font-mono text-xs uppercase tracking-wider text-muted-foreground transition-all"
            title="Create a fork of 'autocrafts-io'"
          >
            <div className="flex items-center gap-2 bg-muted px-3 py-1.5 group hover:bg-muted hover:text-foreground transition-colors">
              <GitFork className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground" />
              <span className="hidden sm:inline">Fork</span>
            </div>
            
            <div className="border-l border-border bg-muted/50 px-3 py-1.5 font-bold text-foreground/80 transition-colors">
              {forkCount}
            </div>
          </a>
          
          <button
              onClick={handleCopy}
              className="inline-flex items-center font-mono text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1.5 shrink-0 hover:cursor-pointer"
              title="Copy link"
            >
              <div className="group relative">
                {copied ? <Check className="w-4 h-4 text-terminal-green" /> : <Share2 className="w-4 h-4" />}
              </div>
            </button>
        </div>

      </div>
    </nav>
  );
}