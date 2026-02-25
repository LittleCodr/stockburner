import { useEffect, useState, useRef } from "react";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";

interface TickerItem {
    symbol: string;
    price: string;
    change: string;
    changePercent: string;
    up: boolean;
}

// Fallback static data (Indian indices + blue chips)
const FALLBACK: TickerItem[] = [
    { symbol: "NIFTY 50", price: "24,150.50", change: "+547.80", changePercent: "+2.32%", up: true },
    { symbol: "BANKNIFTY", price: "51,230.75", change: "+912.40", changePercent: "+1.81%", up: true },
    { symbol: "SENSEX", price: "79,886.10", change: "-318.45", changePercent: "-0.40%", up: false },
    { symbol: "RELIANCE", price: "₹2,940.00", change: "+88.50", changePercent: "+3.10%", up: true },
    { symbol: "TCS", price: "₹4,215.80", change: "-29.70", changePercent: "-0.70%", up: false },
    { symbol: "INFY", price: "₹1,820.00", change: "+21.60", changePercent: "+1.20%", up: true },
    { symbol: "HDFCBANK", price: "₹1,680.50", change: "+14.90", changePercent: "+0.89%", up: true },
    { symbol: "WIPRO", price: "₹455.20", change: "-5.10", changePercent: "-1.11%", up: false },
    { symbol: "ICICIBANK", price: "₹1,248.35", change: "+22.15", changePercent: "+1.81%", up: true },
    { symbol: "ADANIENT", price: "₹2,380.00", change: "-45.20", changePercent: "-1.86%", up: false },
];

// Yahoo Finance symbols for NSE instruments
const SYMBOLS = [
    "^NSEI",      // Nifty 50
    "^BSESN",     // Sensex
    "RELIANCE.NS",
    "TCS.NS",
    "INFY.NS",
    "HDFCBANK.NS",
    "WIPRO.NS",
    "ICICIBANK.NS",
    "ADANIENT.NS",
    "BAJFINANCE.NS",
];

async function fetchLiveData(): Promise<TickerItem[]> {
    const joined = SYMBOLS.join(",");
    // Use allorigins.win as a free CORS proxy to hit Yahoo Finance query API
    const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${joined}&fields=symbol,regularMarketPrice,regularMarketChange,regularMarketChangePercent,shortName`;
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;

    const res = await fetch(proxyUrl, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) throw new Error("fetch failed");

    const wrapper = await res.json();
    const inner = JSON.parse(wrapper.contents);
    const quotes: Record<string, unknown>[] = inner?.quoteResponse?.result ?? [];
    if (!quotes.length) throw new Error("empty");

    return quotes.map((q) => {
        const change = Number(q.regularMarketChange ?? 0);
        const pct = Number(q.regularMarketChangePercent ?? 0);
        const price = Number(q.regularMarketPrice ?? 0);
        const up = change >= 0;
        const symbol = String(q.symbol ?? "")
            .replace(".NS", "")
            .replace(".BO", "")
            .replace("^NSEI", "NIFTY 50")
            .replace("^BSESN", "SENSEX");

        return {
            symbol,
            price: price > 1000
                ? price.toLocaleString("en-IN", { maximumFractionDigits: 2 })
                : price.toFixed(2),
            change: `${up ? "+" : ""}${change.toFixed(2)}`,
            changePercent: `${up ? "+" : ""}${pct.toFixed(2)}%`,
            up,
        };
    });
}

export default function TickerTape() {
    const [items, setItems] = useState<TickerItem[]>(FALLBACK);
    const [live, setLive] = useState(false);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let cancelled = false;
        fetchLiveData()
            .then((data) => {
                if (!cancelled && data.length > 0) {
                    setItems(data);
                    setLive(true);
                }
            })
            .catch(() => { /* silently use fallback */ });

        // Refresh every 60 s
        const id = setInterval(() => {
            if (cancelled) return;
            fetchLiveData()
                .then((data) => { if (!cancelled && data.length) setItems(data); })
                .catch(() => { });
        }, 60_000);

        return () => { cancelled = true; clearInterval(id); };
    }, []);

    // Duplicate enough times so the strip seamlessly loops
    const repeated = [...items, ...items, ...items];

    return (
        <div className="ticker-tape-root" aria-label="Live market ticker">
            {/* Fade edges */}
            <div className="ticker-tape-fade-left" aria-hidden />
            <div className="ticker-tape-fade-right" aria-hidden />

            {/* Live badge */}
            <span className="ticker-tape-live-badge" title={live ? "Live data" : "Static fallback"}>
                <span className="ticker-tape-live-dot" />
                {live ? "LIVE" : "MKT"}
            </span>

            {/* Scrolling track */}
            <div className="ticker-tape-track-wrap" aria-hidden>
                <div ref={trackRef} className="ticker-tape-track">
                    {repeated.map((item, i) => (
                        <span key={i} className="ticker-tape-item">
                            <Activity size={9} className="ticker-tape-icon" />
                            <span className="ticker-tape-symbol">{item.symbol}</span>
                            <span className="ticker-tape-price">{item.price}</span>
                            <span className={`ticker-tape-change ${item.up ? "up" : "dn"}`}>
                                {item.up ? <TrendingUp size={9} /> : <TrendingDown size={9} />}
                                {item.changePercent}
                            </span>
                            <span className="ticker-tape-sep" aria-hidden>•</span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
