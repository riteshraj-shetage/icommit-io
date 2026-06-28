type StatisticsProps = {
  totalRepos: number;
  contributions: number;
  totalStars: number;
  since: number;
};

export default function Statistics({
  totalRepos,
  contributions,
  totalStars,
  since,
}: StatisticsProps) {
  return (
    <div className="">
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {[
          { label: "Total Contributions", value: contributions.toLocaleString() },
          { label: "Repositories [Public]", value: totalRepos },
          { label: "Stars Earned", value: totalStars.toLocaleString() },
          { label: "Building Since", value: since },
        ].map(({ label, value }) => (
          <div key={label} className="border border-border hover:bg-terminal-bg transition-colors px-4 py-3 -mr-px -mb-px">
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
            <p className="font-mono text-2xl font-bold text-foreground mt-3">
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}