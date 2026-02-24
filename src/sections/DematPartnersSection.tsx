import { partners } from "../data/partners";
import SectionHeading from "../components/SectionHeading";
import { motion } from "framer-motion";
import { staggerChildren, fadeUp } from "../hooks/useReveal";
import { ArrowRight, Zap } from "lucide-react";

function DematPartnersSection() {
  return (
    <section className="section-padding" id="partners">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading
            eyebrow="Demat Partners"
            title="Built with trusted brokers"
            description="Execute seamlessly with platforms optimized for scalping and analytics."
          />
        </motion.div>

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-4 md:grid-cols-2"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-background-card/80 p-6 backdrop-blur transition-all duration-300 hover:border-primary/30 hover:shadow-glow-sm"
            >
              {/* Top edge */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden />
              {/* Hover glow bg */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-transparent" aria-hidden />

              <div className="relative flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-primary transition-colors duration-300">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-text-secondary">{partner.tagline}</p>
                </div>

                <div className="flex shrink-0 flex-col items-end gap-2">
                  <div className="flex items-center gap-1.5 rounded-xl border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-black text-primary">
                    <Zap size={12} />
                    {partner.logoText}
                  </div>
                  <a
                    href="#"
                    className="flex items-center gap-1 text-xs font-semibold text-text-secondary hover:text-primary transition-colors"
                  >
                    Open account <ArrowRight size={10} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default DematPartnersSection;
