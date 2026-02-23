interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 max-w-2xl text-lg text-text-secondary">{description}</p>}
    </div>
  );
}

export default SectionHeading;
