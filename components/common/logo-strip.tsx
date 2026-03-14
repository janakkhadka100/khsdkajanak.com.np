export function LogoStrip() {
  // Placeholder visual row for future partner / festival / media logos.
  return (
    <div className="flex flex-wrap items-center gap-4 rounded-3xl border border-gray-200 bg-gray-50 px-4 py-3 text-[0.7rem] text-gray-600">
      <span className="uppercase tracking-[0.22em] text-zinc-400">
        Future partners & festivals
      </span>
      <div className="flex flex-wrap gap-2">
        <span className="h-6 w-20 rounded-full bg-gray-200" />
        <span className="h-6 w-16 rounded-full bg-gray-200" />
        <span className="h-6 w-24 rounded-full bg-gray-200" />
      </div>
    </div>
  );
}

