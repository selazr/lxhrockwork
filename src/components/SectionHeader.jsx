export function SectionHeader({ eyebrow, title, desc }) {
  return (
    <div className="mb-6">
      <p className="text-xs uppercase tracking-[0.25em] text-white/50">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      {desc ? <p className="mt-2 text-sm text-white/70">{desc}</p> : null}
    </div>
  );
}
