import { ShieldAlert, ShieldCheck } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { scamChannels, scamNote } from "../data/socials";
import { motion } from "framer-motion";
import { fadeUp, staggerChildren } from "../hooks/useReveal";

function ScamAlertSection() {
  return (
    <section className="section-padding" id="scam-alert">
      <div className="container-wide">
        <div className="glow-hover rounded-card border border-accent/40 bg-accent/10 p-6 shadow-card">
          <div className="flex items-center gap-3">
            <ShieldAlert className="text-accent" />
            <SectionHeading
              eyebrow="Scam Alert"
              title="Trust only verified channels"
              description="Beware of impersonators asking for payments."
            />
          </div>
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-5 grid gap-3 md:grid-cols-2"
          >
            {scamChannels.map((item) => (
              <motion.div
                key={item.platform}
                variants={fadeUp}
                className="flex items-center justify-between rounded-btn bg-white/10 px-4 py-3 text-white"
              >
                <div>
                  <p className="text-sm font-semibold">{item.platform}</p>
                  <p className="text-xs text-white/80">{item.handle}</p>
                </div>
                {item.verified && <ShieldCheck className="text-green-400" />}
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-4 rounded-card border border-white/15 bg-white/5 px-4 py-3 text-sm text-white"
          >
            {scamNote}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ScamAlertSection;
