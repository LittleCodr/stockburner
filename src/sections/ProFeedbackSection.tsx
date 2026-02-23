import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import GlowCard from "../components/GlowCard";
import { fadeUp, staggerChildren } from "../hooks/useReveal";

const feedback = [
  {
    name: "Aman S.",
    role: "Full-time scalper",
    quote:
      "The live drills flipped my execution speed. I know exactly when to hit and when to stand down.",
  },
  {
    name: "Ritika V.",
    role: "Options trader",
    quote:
      "Risk stacking module is gold. My red days are capped and green days compound without FOMO.",
  },
];

function ProFeedbackSection() {
  return (
    <section className="section-padding" id="feedback">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Pro Scalping"
          title="Feedback from traders who execute daily"
          description="Focused on process, not hype. Built for traders who value discipline over noise."
        />
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-6 grid gap-5 md:grid-cols-2"
        >
          {feedback.map((item) => (
            <GlowCard key={item.name} className="relative">
              <Quote className="absolute right-6 top-6 text-primary/60" />
              <p className="text-lg text-white">“{item.quote}”</p>
              <div className="mt-4 text-sm text-text-secondary">
                <span className="font-semibold text-white">{item.name}</span> · {item.role}
              </div>
            </GlowCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ProFeedbackSection;
