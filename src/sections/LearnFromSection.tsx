import { motion } from "framer-motion";
import { fadeUp } from "../hooks/useReveal";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import { CheckCircle2, Video, Target, BookMarked } from "lucide-react";

const illustration =
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80";

const pillars = [
  { icon: Video, text: "Live daily sessions" },
  { icon: Target, text: "Risk-first execution" },
  { icon: BookMarked, text: "Structured playbooks" },
];

function LearnFromSection() {
  return (
    <section className="section-padding" id="learn">
      <div className="container-wide">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-[28px] border border-white/8 bg-gradient-to-br from-background-card/80 via-background-card/60 to-background-card/40 shadow-depth"
        >
          {/* Top accent line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" aria-hidden />

          <div className="grid items-center gap-0 md:grid-cols-2">
            {/* Image side */}
            <motion.div
              className="relative h-64 overflow-hidden md:h-full md:min-h-[380px]"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background-card/60 z-10 hidden md:block" aria-hidden />
              <div className="absolute inset-0 bg-gradient-to-t from-background-card/60 to-transparent z-10 md:hidden" aria-hidden />
              <img src={illustration} alt="Laptop and trading" className="h-full w-full object-cover" />
              {/* Play badge */}
              <div className="absolute bottom-5 left-5 z-20 flex items-center gap-2 rounded-xl border border-white/15 bg-background-card/90 px-3 py-2 text-xs font-bold text-white backdrop-blur-md">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-black">
                  <span className="text-[8px]">▶</span>
                </div>
                Watch live session
              </div>
            </motion.div>

            {/* Content side */}
            <div className="space-y-5 p-7 md:p-8">
              <SectionHeading
                eyebrow="Learn with Trade Guru"
                title="Mentorship built for real market conditions"
                description="Structured lessons, live breakdowns, and rapid execution drills to sharpen your edge."
              />
              <p className="text-sm leading-relaxed text-text-secondary">
                Follow the workflow Trade Guru runs daily: pre-market prep, scalping setups, and trade journaling. Every
                module is actionable and paired with risk-first execution.
              </p>

              <div className="flex flex-wrap gap-2.5">
                {pillars.map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-2 rounded-xl border border-primary/15 bg-primary/5 px-3 py-2 text-xs font-semibold text-primary"
                  >
                    <Icon size={12} />
                    {text}
                  </div>
                ))}
              </div>

              <Button className="shadow-glow">Start Learning Today</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default LearnFromSection;
