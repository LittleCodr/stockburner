import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { fadeUp } from "../hooks/useReveal";
import { Award, Users, BookOpen } from "lucide-react";

const aboutImg =
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80";

const highlights = [
  { icon: Users, label: "10K+ Students", desc: "Active community of serious traders" },
  { icon: Award, label: "Verified Mentor", desc: "Track record backed by real results" },
  { icon: BookOpen, label: "Structured Learning", desc: "Daily drills, playbooks & checklists" },
];

function AboutSection() {
  return (
    <section className="section-padding" id="about">
      <div className="container-wide grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          <SectionHeading
            eyebrow="About Trade Guru"
            title="From scalper to mentor collective"
            description="Trade Guru guides thousands of traders with a process-driven approach focused on conviction, risk, and discipline."
          />
          <p className="text-base leading-relaxed text-text-secondary">
            After years of intraday trading, the Trade Guru playbook became structured modules, daily checklists, and
            live market drills. Learn the exact frameworks behind our consistency.
          </p>

          {/* Highlights grid */}
          <div className="grid gap-3 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="group flex flex-col gap-2 rounded-2xl border border-white/8 bg-background-card/60 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:shadow-glow-sm"
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Icon size={16} />
                </div>
                <p className="text-sm font-bold text-white">{label}</p>
                <p className="text-xs text-text-secondary leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] } }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <div className="pointer-events-none absolute -left-8 top-8 h-32 w-32 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute right-4 -top-6 h-24 w-24 rounded-full bg-accent-2/15 blur-3xl" aria-hidden />

          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-background-card/70 shadow-depth ring-1 ring-primary/10">
            {/* Top gradient line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent z-10" aria-hidden />
            <img src={aboutImg} alt="About Trade Guru" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background-primary/50 via-transparent to-transparent pointer-events-none" />

            {/* Floating caption */}
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-background-card/90 px-4 py-3 backdrop-blur-md">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">Community Driven</p>
              <p className="mt-0.5 text-sm font-semibold text-white">Built by traders, for traders</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
