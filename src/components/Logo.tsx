function Logo() {
  return (
    <div className="flex items-center gap-2.5 text-lg font-bold">
      <div className="relative flex h-10 w-10 items-center justify-center">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 rounded-xl border border-primary/40 animate-spin-slow" />
        {/* Inner glow box */}
        <div className="absolute inset-0.5 rounded-[10px] bg-gradient-to-br from-primary/20 via-background-card to-accent-2/20 backdrop-blur" />
        {/* Corner dots */}
        <span className="absolute -top-0.5 -left-0.5 h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" aria-hidden />
        <span className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" style={{ animationDelay: "1s" }} aria-hidden />
        {/* Logo text */}
        <span className="relative z-10 text-xs font-black tracking-tight bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
          TG
        </span>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-sm font-black tracking-wide text-white">TRADE</span>
        <span className="text-[10px] font-semibold tracking-[0.25em] text-primary uppercase">Guru</span>
      </div>
    </div>
  );
}

export default Logo;