export function SectionHeader({ eyebrow, title, desc }) {
  return (
    <div className="mb-8 flex flex-col gap-3">
      <span className="inline-flex w-fit items-center rounded-full border border-foreground/10 bg-muted/70 px-3 py-1 text-[0.65rem] uppercase tracking-[0.3em] text-foreground/60 dark:bg-foreground/5">
        {eyebrow}
      </span>
      <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        {title}
      </h2>
      {desc ? <p className="text-sm text-foreground/70 md:text-base">{desc}</p> : null}
    </div>
  );
}
