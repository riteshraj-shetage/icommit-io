export default function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        
        <div className="flex items-center gap-2.5">
          <img src="/favicon.svg" alt="autocrafts" className="h-4 w-4" />
          <p className="font-mono text-[12px] uppercase tracking-widest text-foreground/80">
            autocrafts.io
          </p>
        </div>

        <p className="font-mono text-[12px] uppercase tracking-widest text-muted-foreground">
          Stop claiming. <span className="text-terminal-green px-1 py-0.5">Start proving.</span>
        </p>

      </div>
    </footer>
  );
}