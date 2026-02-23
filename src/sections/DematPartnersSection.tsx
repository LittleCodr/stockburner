import { partners } from "../data/partners";
import GlowCard from "../components/GlowCard";
import SectionHeading from "../components/SectionHeading";
import { motion } from "framer-motion";
import { staggerChildren } from "../hooks/useReveal";

function DematPartnersSection() {
  return (
    <section className="section-padding" id="partners">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Demat Partners"
          title="Built with trusted brokers"
          description="Execute seamlessly with platforms optimized for scalping and analytics."
        />
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-6 grid gap-4 md:grid-cols-2"
        >
          {partners.map((partner) => (
            <GlowCard key={partner.name} subtitle={partner.tagline} className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">{partner.name}</h3>
                <p className="text-sm text-text-secondary">{partner.tagline}</p>
              </div>
              <div className="rounded-card bg-primary/10 px-4 py-3 text-lg font-semibold text-primary">
                {partner.logoText}
              </div>
            </GlowCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default DematPartnersSection;
