import { motion } from "framer-motion";
import { Instagram, Play, Send, Shield, TrendingUp, TrendingDown, Activity } from "lucide-react";
import Badge from "../components/Badge";
import Button from "../components/Button";
import StatPill from "../components/StatPill";
import { heroStats } from "../data/stats";
import { fadeUp, staggerChildren } from "../hooks/useReveal";

const instructorImg =
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=960&q=80";

// Ticker tape data
const ticker = [
  { symbol: "NIFTY", price: "24,150.50", change: "+2.3%", up: true },
  { symbol: "BANKNIFTY", price: "51,230.75", change: "+1.8%", up: true },
  { symbol: "SENSEX", price: "79,886.10", change: "-0.4%", up: false },
  { symbol: "RELIANCE", price: "2,940.00", change: "+3.1%", up: true },
  { symbol: "TCS", price: "4,215.80", change: "-0.7%", up: false },
  { symbol: "INFY", price: "1,820.00", change: "+1.2%", up: true },
  { symbol: "HDFCBANK", price: "1,680.50", change: "+0.9%", up: true },
  { symbol: "WIPRO", price: "455.20", change: "-1.1%", up: false },
];

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden section-padding bg-grid"
    >
      {/* Floating orbs */}
      <div className="orb orb-green absolute -left-24 top-1/4 h-80 w-80 opacity-60" aria-hidden />
      <div className="orb orb-blue absolute -right-16 top-1/3 h-72 w-72 opacity-40" aria-hidden />
      <div className="orb orb-lime absolute bottom-20 left-1/3 h-48 w-48 opacity-30" aria-hidden />

      {/* Ticker Tape */}
      <div className="absolute top-[4.5rem] inset-x-0 border-y border-primary/10 bg-background-primary/60 backdrop-blur-sm py-2 z-20 overflow-hidden">
        <div className="ticker-wrap">
          <div className="ticker-inner">
            {[...ticker, ...ticker].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-2 mx-6 text-xs font-mono font-semibold">
                <Activity size={10} className="text-primary/60" />
                <span className="text-white/50 uppercase tracking-widest">{item.symbol}</span>
                <span className="text-white">{item.price}</span>
                <span className={`flex items-center gap-0.5 ${item.up ? "text-primary" : "text-red-400"}`}>
                  {item.up ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                  {item.change}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container-wide relative z-10 grid items-center gap-12 pt-10 lg:grid-cols-2">
        <motion.div variants={staggerChildren} initial="hidden" animate="show" className="space-y-6">
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <Badge color="blue">Join</Badge>
            <span className="text-sm font-semibold text-text-secondary">Daily live trading with Trade Guru</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="block text-white/90">India's #1</span>
            <span className="shimmer-text block">Option Scalping</span>
            <span className="block text-white/90">Academy</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="max-w-lg text-base leading-relaxed text-text-secondary">
            Master option scalping with Trade Guru: cinematic breakdowns, verified results, and a disciplined
            process built for serious traders who want real edges.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex items-start gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-4"
          >
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <Shield size={16} />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Risk Disclaimer</p>
              <p className="text-xs leading-relaxed text-text-secondary">
                Trading involves risk. Practice strict risk management and never trade with funds you cannot
                afford to lose.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-3"
          >
            <Button size="lg" className="gap-2">Start Learning</Button>
            <Button variant="secondary" size="lg" className="gap-2">
              <Play size={16} />
              Watch Demo
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2 text-sm text-white/80">
            <a
              href="https://www.instagram.com/trade.guru9?igsh=ajk4dGNtZjFvajVp&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold transition-all duration-200 hover:border-primary/40 hover:bg-primary/8 hover:text-primary"
            >
              <Instagram size={14} className="text-primary" />
              Instagram
            </a>
            <a
              href="https://t.me/optionguruji9"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold transition-all duration-200 hover:border-accent-2/40 hover:bg-accent-2/8 hover:text-accent-2"
            >
              <Send size={14} className="text-accent-2" />
              Telegram
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {heroStats.map((stat) => (
              <StatPill key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </motion.div>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } }}
          className="relative"
        >
          <div className="relative mx-auto max-w-[460px]">
            {/* Large orb blobs behind image */}
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl animate-orb-pulse" aria-hidden />
            <div className="absolute -right-10 top-16 h-36 w-36 rounded-full bg-accent-2/15 blur-3xl animate-orb-pulse" style={{ animationDelay: "1.5s" }} aria-hidden />

            {/* Main image card */}
            <motion.div
              className="scan-line-container overflow-hidden rounded-[32px] border border-white/10 bg-background-card/70 shadow-depth ring-1 ring-primary/10"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Neon top border */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent z-10" />
              <img src={instructorImg} alt="Trade Guru Instructor" className="h-full w-full object-cover" />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background-primary/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Floating pill badges */}
            <motion.div
              className="absolute left-4 top-6 flex items-center gap-2 rounded-full border border-white/15 bg-background-card/90 px-4 py-2 text-xs font-bold text-white backdrop-blur-md shadow-card"
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5 } }}
            >
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              EDUCATOR
            </motion.div>

            <motion.div
              className="absolute right-4 bottom-12 flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-4 py-2 text-xs font-bold text-primary backdrop-blur-md shadow-card"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.5 } }}
            >
              <TrendingUp size={12} />
              TRADER
            </motion.div>

            {/* Stat card */}
            <motion.div
              className="absolute -right-6 bottom-32 rounded-2xl border border-primary/20 bg-background-card/90 p-3 text-center backdrop-blur-md shadow-neon"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.9, duration: 0.5 } }}
            >
              <p className="text-[9px] font-black uppercase tracking-widest text-text-secondary">Win Rate</p>
              <p className="text-2xl font-black text-primary">78%</p>
              <p className="text-[8px] text-text-muted">30-day avg</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
