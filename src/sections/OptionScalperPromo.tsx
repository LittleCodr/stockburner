import { motion } from "framer-motion";
import Button from "../components/Button";
import { fadeUp } from "../hooks/useReveal";
import { Zap, BarChart3, Trophy, Clock } from "lucide-react";

const promoImg =
  "/logo.png";

const features = [
  { icon: Zap, label: "Live scalping drills" },
  { icon: BarChart3, label: "Post-trade debriefs" },
  { icon: Trophy, label: "Advanced risk stacking" },
  { icon: Clock, label: "Daily market prep" },
];

function OptionScalperPromo() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-[28px] border border-primary/25 shadow-neon"
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/12 via-background-card/80 to-accent-2/8 holographic" aria-hidden />

          {/* Top neon line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent" aria-hidden />
          {/* Bottom neon line */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" aria-hidden />

          {/* BG orbs */}
          <div className="pointer-events-none absolute -left-12 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -right-12 bottom-0 h-40 w-40 rounded-full bg-accent-2/10 blur-3xl" aria-hidden />

          <div className="relative grid items-center gap-0 md:grid-cols-2">
            {/* Content */}
            <div className="space-y-5 p-8 md:p-10">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-primary flex items-center gap-2">
                <span className="h-px w-6 bg-primary" />
                Option Scalper
              </p>
              <h3 className="text-3xl font-black leading-tight text-white sm:text-4xl">
                Trade the exact setups{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Trade Guru runs daily
                </span>
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                Live scalping drills, post-trade debriefs, and advanced risk stacking. Build confidence by following
                the workflow that has produced consistent results.
              </p>

              {/* Feature pills */}
              <div className="grid grid-cols-2 gap-2">
                {features.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 rounded-xl border border-primary/15 bg-primary/8 px-3 py-2 text-xs font-semibold text-primary"
                  >
                    <Icon size={12} />
                    {label}
                  </div>
                ))}
              </div>

              <Button size="lg" className="shadow-glow-lg">Join the Program</Button>
            </div>

            {/* Image side */}
            <motion.div
              className="relative h-64 overflow-hidden md:h-full md:min-h-[420px]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background-card/50 z-10 hidden md:block" aria-hidden />
              <div className="absolute inset-0 bg-gradient-to-t from-background-card/60 to-transparent z-10 md:hidden" aria-hidden />
              <img src={promoImg} alt="Option scalper" className="h-full w-full object-cover" />

              {/* Overlay stat pill */}
              <div className="absolute bottom-5 right-5 z-20 rounded-2xl border border-primary/25 bg-background-card/90 p-4 text-center backdrop-blur-md shadow-neon">
                <p className="text-[9px] font-black uppercase tracking-widest text-text-secondary mb-1">Members</p>
                <p className="text-2xl font-black text-primary">10K+</p>
                <p className="text-[9px] text-text-muted">Active community</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OptionScalperPromo;
