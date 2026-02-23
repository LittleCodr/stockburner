interface StatPillProps {
  label: string;
  value: string;
}

function StatPill({ label, value }: StatPillProps) {
  return (
    <div className="flex flex-col gap-1 rounded-btn bg-white/5 px-4 py-3 text-left shadow-card">
      <span className="text-xs uppercase tracking-[0.2em] text-text-secondary">{label}</span>
      <span className="text-xl font-bold text-white">{value}</span>
    </div>
  );
}

export default StatPill;
