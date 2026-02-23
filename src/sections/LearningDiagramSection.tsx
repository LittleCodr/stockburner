import { learningTopics } from "../data/learning";
import SectionHeading from "../components/SectionHeading";
import { motion } from "framer-motion";
import { fadeUp } from "../hooks/useReveal";

function LearningDiagramSection() {
  return (
    <section className="section-padding" id="learn-diagram">
      <div className="container-wide">
        <SectionHeading
          align="center"
          eyebrow="What Will You Learn"
          title="The scalper's blueprint"
          description="Eight pillars connected to a single process-driven system."
        />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-4 rounded-card border border-white/5 bg-gradient-to-br from-background-card/80 via-background-card/60 to-background-card/50 p-6 shadow-card sm:grid-cols-3"
        >
          <div
            className="pointer-events-none absolute inset-4 rounded-card border border-white/5" aria-hidden
          />
          {learningTopics.map((topic, idx) => (
            <div
              key={topic.title}
              className="glow-hover relative flex min-h-[120px] flex-col justify-center rounded-card border border-white/10 bg-primary/5 px-4 py-3 text-center"
            >
              <div className="absolute inset-0 bg-diagonal-glow opacity-20" aria-hidden />
              <h4 className="text-base font-semibold text-white">{topic.title}</h4>
              <p className="mt-2 text-xs text-text-secondary">{topic.description}</p>
              <span className="absolute -top-2 -left-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
              <span className="absolute -bottom-2 -right-2 h-2 w-2 rounded-full bg-accent" aria-hidden />
              {idx % 2 === 0 && <span className="absolute inset-x-0 top-1/2 h-px bg-white/5" aria-hidden />}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default LearningDiagramSection;
