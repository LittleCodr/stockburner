function Logo() {
  return (
    <div className="flex items-center gap-2 text-lg font-semibold">
      <div className="flex h-9 w-9 items-center justify-center rounded-btn bg-gradient-to-br from-primary/30 via-primary/10 to-accent/30 ring-1 ring-primary/50 backdrop-blur">
        <span className="text-primary">TG</span>
      </div>
      <span>Trade Guru</span>
    </div>
  );
}

export default Logo;
