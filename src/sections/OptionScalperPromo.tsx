import { motion } from "framer-motion";
import Button from "../components/Button";
import { fadeUp } from "../hooks/useReveal";

const promoImg =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=80";

function OptionScalperPromo() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid items-center gap-8 overflow-hidden rounded-card bg-gradient-to-r from-primary/18 via-background-card/80 to-background-card/70 p-6 shadow-card md:grid-cols-2"
        >
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Option Scalper</p>
            <h3 className="text-3xl font-bold text-white">Trade the exact setups Trade Guru runs daily</h3>
            <p className="text-text-secondary">
              Live scalping drills, post-trade debriefs, and advanced risk stacking. Build confidence by following
              the workflow that has produced consistent results.
            </p>
            <Button className="shadow-glow">Join the program</Button>
          </div>
          <motion.div
            className="relative overflow-hidden rounded-card border border-white/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent" aria-hidden />
            <img src={promoImg} alt="Option scalper" className="h-full w-full object-cover" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default OptionScalperPromo;
