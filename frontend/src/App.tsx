import './App.css'

export default function App() {
  return (

    // test page for now
    <div className="relative min-h-screen bg-[#0a0a0a] text-white font-sans flex flex-col items-center justify-center p-6 overflow-hidden select-none">
  
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#f4f4f5]">
          Let the code speak<span className="text-[#10b981]">.</span>
        </h1>

        <p className="text-zinc-500 font-mono text-sm md:text-base tracking-wide max-w-2xl">
          A native profile automation workflow built for Committed Developers.
        </p>

        <div className="pt-4">
          <a 
            href="https://github.com/riteshraj-shetage/icommit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-emerald-900/60 bg-emerald-950/10 px-6 py-3 font-mono text-xs md:text-sm text-emerald-400 tracking-wider hover:bg-emerald-950/20 hover:border-emerald-500/40 transition-colors duration-200 rounded-none"
          >
            github.com/riteshraj/icommit
          </a>
        </div>

      </div>
    </div>
  )
}