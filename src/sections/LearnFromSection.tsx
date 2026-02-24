import { motion } from "framer-motion";
import { fadeUp } from "../hooks/useReveal";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";

const illustration =
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80";

function LearnFromSection() {
  return (
    <section className="section-padding" id="learn">
      <div className="container-wide">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="glow-hover glass-surface grid items-center gap-8 rounded-card border border-white/5 bg-gradient-to-r from-background-card/80 via-background-card/70 to-background-card/60 p-6 shadow-card md:grid-cols-[1fr,1.1fr]"
        >
          <motion.div
            className="relative overflow-hidden rounded-card"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="absolute inset-0 bg-diagonal-glow opacity-60" aria-hidden />
            <img src={illustration} alt="Laptop and trading" className="h-full w-full object-cover" />
          </motion.div>
          <div className="space-y-4">
            <SectionHeading
              eyebrow="Learn with Trade Guru"
              title="Mentorship built for real market conditions"
              description="Structured lessons, live breakdowns, and rapid execution drills to sharpen your edge."
            />
            <p className="text-base text-text-secondary">
              Follow the workflow Trade Guru runs daily: pre-market prep, scalping setups, and trade journaling. Every
              module is actionable and paired with risk-first execution.
            </p>
            <Button className="shadow-glow">Start Learning</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default LearnFromSection;
