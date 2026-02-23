function Logo() {
  return (
    <div className="flex items-center gap-2 text-lg font-semibold">
      <div className="h-9 w-9 rounded-btn bg-primary/10 ring-1 ring-primary/50 backdrop-blur flex items-center justify-center">
        <span className="text-primary">SB</span>
      </div>
      <span>StockBurner</span>
    </div>
  );
}

export default Logo;
