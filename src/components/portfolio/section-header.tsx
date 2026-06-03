type SectionHeaderProps = {
  eyebrow: string;
  id: string;
  title: string;
  description: string;
};

export function SectionHeader({ eyebrow, id, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-10 flex max-w-2xl flex-col items-start gap-3 text-left md:mb-14" data-reveal>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {eyebrow}
      </p>
      <h2 className="font-heading text-3xl leading-tight text-foreground md:text-5xl" id={id}>
        {title}
      </h2>
      <p className="text-pretty text-base leading-7 text-muted-foreground">{description}</p>
    </div>
  );
}
