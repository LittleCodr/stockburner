import { learningTopics } from "../data/learning";
import SectionHeading from "../components/SectionHeading";
import { motion } from "framer-motion";
import { staggerChildren, fadeUp } from "../hooks/useReveal";

function LearningDiagramSection() {
  return (
    <section className="section-padding relative overflow-hidden" id="learn-diagram">
      {/* BG orb */}
      <div className="orb orb-blue pointer-events-none absolute right-1/4 top-1/2 h-64 w-64 -translate-y-1/2 opacity-15" aria-hidden />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading
            align="center"
            eyebrow="What Will You Learn"
            title="The scalper's blueprint"
            description="Eight pillars connected to a single process-driven system."
          />
        </motion.div>

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="relative mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {/* Center connecting lines (decorative) */}
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle at 50% 50%, rgba(0,255,136,0.3), transparent 60%)",
            }}
            aria-hidden
          />

          {learningTopics.map((topic, idx) => (
            <motion.div
              key={topic.title}
              variants={fadeUp}
              style={{ transitionDelay: `${idx * 50}ms` }}
              className="group relative flex min-h-[130px] flex-col justify-center overflow-hidden rounded-2xl border border-white/8 bg-background-card/80 px-4 py-4 text-center backdrop-blur transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:shadow-glow-sm"
            >
              {/* Corner dots */}
              <span className="absolute top-2 left-2 h-1.5 w-1.5 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" aria-hidden />
              <span className="absolute bottom-2 right-2 h-1.5 w-1.5 rounded-full bg-accent/60 group-hover:bg-accent transition-colors" aria-hidden />

              {/* Number */}
              <p className="absolute top-2 right-3 text-[9px] font-black text-text-muted">
                {String(idx + 1).padStart(2, "0")}
              </p>

              {/* Hover gradient bg */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/6 to-transparent" aria-hidden />

              <h4 className="relative text-sm font-bold text-white leading-tight">{topic.title}</h4>
              <p className="relative mt-1.5 text-[10px] leading-relaxed text-text-secondary">{topic.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default LearningDiagramSection;
