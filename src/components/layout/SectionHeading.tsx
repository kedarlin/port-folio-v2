interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-4">
      {eyebrow && (
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h2>

      {description && (
        <p className="text-lg leading-8 text-zinc-400">{description}</p>
      )}
    </div>
  );
}
