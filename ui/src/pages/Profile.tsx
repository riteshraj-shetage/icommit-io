import payload from '../data/payload.json';

const { profile } = payload;

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground font-sans flex flex-col items-center justify-center p-6 overflow-hidden select-none">
      
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--color-terminal-green) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-terminal-green) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
        
        <div className="flex items-center space-x-2 border border-border bg-card/40 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full opacity-75 bg-terminal-green"></span>
            <span className="relative inline-flex h-2 w-2 bg-terminal-green"></span>
          </span>
          <span>autocrafts</span>
        </div>

        {profile?.avatarUrl && (
          <img 
            src={profile.avatarUrl} 
            alt="Profile Avatar" 
            className="w-20 h-20 border border-border object-cover grayscale"
          />
        )}

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
          {profile?.name || profile?.login || "Let the code speak"}<span className="text-terminal-green">.</span>
        </h1>

        <p className="text-muted-foreground text-sm md:text-base max-w-xl tracking-normal">
          {profile?.bio || "A native profile automation workflow built for Committed Developers."}
        </p>

        {profile?.repositories && profile?.followers && (
          <div className="flex items-center space-x-6 font-mono text-xs text-muted-foreground tracking-wider uppercase border border-border bg-card/50 px-4 py-2">
            <span>Repos: {profile.repositories?.totalCount ?? 0}</span>
            <span className="w-1 h-1 bg-border"></span>
            <span>Followers: {profile.followers?.totalCount ?? 0}</span>
          </div>
        )}

        <div className="pt-4">
          <a 
            href="https://github.com/riteshraj-shetage/autocrafts-io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-terminal-green/60 bg-terminal-green/10 px-6 py-3 font-mono text-xs md:text-sm text-terminal-green tracking-wider hover:bg-terminal-green/20 hover:border-terminal-green transition-colors duration-200 rounded-none"
          >
            @riteshraj-shetage/autocrafts-io
          </a>
        </div>

      </div>
    </div>
  )
}