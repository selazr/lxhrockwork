export function SectionHeader({ eyebrow, title, desc }) {
  return (
    <div className="mb-8 flex flex-col gap-3">
      <span className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] uppercase tracking-[0.3em] text-white/60">
        {eyebrow}
      </span>
      <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
        {title}
      </h2>
      {desc ? <p className="text-sm text-white/70 md:text-base">{desc}</p> : null}
    </div>
  );
}
