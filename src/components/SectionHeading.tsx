interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "text-center" : "text-left"}>
      {eyebrow && (
        <p className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.28em] text-primary mb-3">
          <span className="h-px w-6 bg-gradient-to-r from-primary to-transparent" aria-hidden />
          {eyebrow}
          <span className="h-px w-6 bg-gradient-to-l from-primary to-transparent" aria-hidden />
        </p>
      )}
      <h2 className={`mt-1 text-3xl font-black sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight ${isCenter ? "" : "max-w-2xl"}`}>
        <span className="bg-gradient-to-br from-white via-white/90 to-white/60 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed text-text-secondary ${isCenter ? "mx-auto max-w-xl" : "max-w-xl"}`}>
          {description}
        </p>
      )}
      {/* Animated underline */}
      <div className={`mt-5 h-px bg-gradient-to-r from-primary/60 via-accent-2/40 to-transparent w-24 ${isCenter ? "mx-auto" : ""}`} />
    </div>
  );
}

export default SectionHeading;
