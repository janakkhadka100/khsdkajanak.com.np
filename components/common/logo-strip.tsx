export function LogoStrip() {
  // Placeholder visual row for future partner / festival / media logos.
  return (
    <div className="flex flex-wrap items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.02] px-4 py-3 text-[0.7rem] text-zinc-500">
      <span className="uppercase tracking-[0.22em] text-zinc-400">
        Future partners & festivals
      </span>
      <div className="flex flex-wrap gap-2">
        <span className="h-6 w-20 rounded-full bg-white/[0.04]" />
        <span className="h-6 w-16 rounded-full bg-white/[0.04]" />
        <span className="h-6 w-24 rounded-full bg-white/[0.04]" />
      </div>
    </div>
  );
}

