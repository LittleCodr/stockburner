import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { fadeUp } from "../hooks/useReveal";

const aboutImg =
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80";

function AboutSection() {
  return (
    <section className="section-padding" id="about">
      <div className="container-wide grid items-center gap-8 lg:grid-cols-2">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-4"
        >
          <SectionHeading
            eyebrow="About Trade Guru"
            title="From scalper to mentor collective"
            description="Trade Guru guides thousands of traders with a process-driven approach focused on conviction, risk, and discipline."
          />
          <p className="text-base text-text-secondary">
            After years of intraday trading, the Trade Guru playbook became structured modules, daily checklists, and
            live market drills. Learn the exact frameworks behind our consistency.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <div className="absolute -left-6 top-6 h-24 w-24 rounded-full bg-primary/25 blur-2xl" aria-hidden />
          <div className="absolute right-2 -top-4 h-20 w-20 rounded-full bg-accent/25 blur-2xl" aria-hidden />
          <div className="overflow-hidden rounded-card border border-white/10 bg-background-card/70 shadow-card ring-1 ring-white/5">
            <img src={aboutImg} alt="About Trade Guru" className="h-full w-full object-cover saturate-110" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
