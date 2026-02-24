import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import GlowCard from "../components/GlowCard";
import { fadeUp, staggerChildren } from "../hooks/useReveal";

const feedback = [
  {
    name: "Aman S.",
    role: "Full-time scalper",
    avatar: "AS",
    stars: 5,
    quote:
      "The live drills flipped my execution speed. I know exactly when to hit and when to stand down. My monthly P&L has doubled.",
  },
  {
    name: "Ritika V.",
    role: "Options trader",
    avatar: "RV",
    stars: 5,
    quote:
      "Risk stacking module is gold. My red days are capped and green days compound without FOMO. Best investment in trading education.",
  },
  {
    name: "Karan M.",
    role: "Swing + scalp hybrid",
    avatar: "KM",
    stars: 5,
    quote:
      "Trade Guru's pre-market checklist gave me a structured edge I never had before. Highly disciplined teaching style.",
  },
  {
    name: "Priya L.",
    role: "Part-time trader",
    avatar: "PL",
    stars: 5,
    quote:
      "Even as a part-timer, the modules fit my schedule. The Telegram signals are spot-on and the community is incredibly supportive.",
  },
];

function ProFeedbackSection() {
  return (
    <section className="section-padding relative overflow-hidden" id="feedback">
      {/* Background orbs */}
      <div className="orb orb-green pointer-events-none absolute left-0 top-1/2 h-80 w-80 -translate-y-1/2 opacity-15" aria-hidden />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading
            align="center"
            eyebrow="Pro Feedback"
            title="Real results from real traders"
            description="Focused on process, not hype. Built for traders who value discipline over noise."
          />
        </motion.div>

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-10 grid gap-5 md:grid-cols-2"
        >
          {feedback.map((item) => (
            <GlowCard key={item.name} className="relative" neon>
              {/* Quote icon */}
              <Quote className="absolute right-5 top-5 text-primary/30" size={28} />

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: item.stars }).map((_, i) => (
                  <Star key={i} size={12} className="fill-gold text-gold" />
                ))}
              </div>

              <p className="text-base leading-relaxed text-white/85">"{item.quote}"</p>

              <div className="mt-5 flex items-center gap-3">
                {/* Avatar */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent-2/10 text-xs font-black text-primary border border-primary/20">
                  {item.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{item.name}</p>
                  <p className="text-xs text-text-secondary">{item.role}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ProFeedbackSection;
