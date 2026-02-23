import { motion } from "framer-motion";
import { Play, Shield } from "lucide-react";
import Badge from "../components/Badge";
import Button from "../components/Button";
import StatPill from "../components/StatPill";
import { heroStats } from "../data/stats";
import { fadeUp, staggerChildren } from "../hooks/useReveal";

const instructorImg =
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=960&q=80";

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-background-primary via-background-primary to-background-secondary section-padding"
    >
      <div className="container-wide relative grid items-center gap-10 lg:grid-cols-2">
        <motion.div variants={staggerChildren} initial="hidden" animate="show" className="space-y-5">
          <motion.div variants={fadeUp} className="flex items-center gap-3 text-primary">
            <Badge color="blue">Join</Badge>
            <span className="text-sm font-semibold text-text-secondary">Daily live trading with Dinesh</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
          >
            STOCK BURNER
          </motion.h1>

          <motion.p variants={fadeUp} className="max-w-2xl text-lg text-text-secondary">
            Master option scalping with India&apos;s trusted educator. Precision plays, verified results, and
            a disciplined process for serious traders.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="glow-hover flex items-center gap-3 rounded-card border border-primary/30 bg-primary/5 p-4"
          >
            <Shield className="text-accent" />
            <div>
              <p className="text-sm font-semibold text-white">Risk Disclaimer</p>
              <p className="text-xs text-text-secondary">
                Trading involves risk. Practice strict risk management and never trade with funds you cannot
                afford to lose.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
            <Button size="lg" className="shadow-glow">Start Learning</Button>
            <Button variant="secondary" size="lg" className="gap-2">
              <Play size={18} />
              Watch Demo
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 text-sm text-white/70">
            <div className="flex items-center gap-2 rounded-btn bg-white/5 px-3 py-2">
              <span className="h-5 w-16 rounded-md bg-gradient-to-r from-primary to-blue-300" aria-hidden />
              <span>App Store</span>
            </div>
            <div className="flex items-center gap-2 rounded-btn bg-white/5 px-3 py-2">
              <span className="h-5 w-16 rounded-md bg-gradient-to-r from-green-400 to-green-600" aria-hidden />
              <span>Play Store</span>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {heroStats.map((stat) => (
              <StatPill key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] } }}
          className="relative"
        >
          <div className="relative mx-auto max-w-[440px]">
            <div className="absolute -left-6 -top-6 h-20 w-20 rounded-full bg-primary/20 blur-2xl" aria-hidden />
            <div className="absolute -right-6 top-10 h-24 w-24 rounded-full bg-accent/20 blur-2xl" aria-hidden />
            <motion.div
              className="overflow-hidden rounded-[28px] border border-white/10 bg-background-card/70 shadow-card"
              initial={{ y: 12 }}
              animate={{ y: [12, -8, 12] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img src={instructorImg} alt="Instructor" className="h-full w-full object-cover" />
            </motion.div>

            <motion.div
              className="absolute left-6 top-8 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white shadow-card"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } }}
            >
              EDUCATOR
            </motion.div>
            <motion.div
              className="absolute right-4 bottom-10 rounded-full bg-primary/20 px-4 py-2 text-xs font-semibold text-primary shadow-card"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.5 } }}
            >
              TRADER
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
