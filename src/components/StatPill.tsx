interface StatPillProps {
  label: string;
  value: string;
}

function StatPill({ label, value }: StatPillProps) {
  return (
    <div className="group relative flex flex-col gap-1.5 overflow-hidden rounded-xl border border-white/8 bg-white/3 px-4 py-3.5 text-left shadow-card backdrop-blur transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:shadow-glow-sm">
      {/* Top border highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-text-muted group-hover:text-text-secondary transition-colors">{label}</span>
      <span className="text-2xl font-black text-white group-hover:text-primary transition-colors duration-300">
        {value}
      </span>
      {/* Bottom glow on hover */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/40 transition-all duration-500" />
    </div>
  );
}

export default StatPill;
