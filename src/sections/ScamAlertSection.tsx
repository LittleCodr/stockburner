import { ShieldAlert, ShieldCheck, AlertTriangle } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { scamChannels, scamNote } from "../data/socials";
import { motion } from "framer-motion";
import { fadeUp, staggerChildren } from "../hooks/useReveal";

function ScamAlertSection() {
  return (
    <section className="section-padding" id="scam-alert">
      <div className="container-wide">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative overflow-hidden rounded-[28px] border border-amber-400/30 bg-gradient-to-br from-amber-400/8 via-background-card/70 to-background-card/60 p-6 shadow-[0_0_40px_rgba(251,191,36,0.1)]"
        >
          {/* Top line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" aria-hidden />
          {/* Corner glow */}
          <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-amber-400/10 blur-3xl" aria-hidden />

          {/* Header */}
          <div className="relative flex items-start gap-4 mb-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-400/15 text-amber-400 border border-amber-400/25">
              <ShieldAlert size={20} />
            </div>
            <div>
              <SectionHeading
                eyebrow="Scam Alert"
                title="Trust only verified channels"
                description="Beware of impersonators asking for payments or offering guaranteed returns."
              />
            </div>
          </div>

          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-3 md:grid-cols-2"
          >
            {scamChannels.map((item) => (
              <motion.div
                key={item.platform}
                variants={fadeUp}
                className="group flex items-center justify-between rounded-xl border border-white/8 bg-white/4 px-4 py-3.5 backdrop-blur transition-all duration-200 hover:border-primary/20"
              >
                <div className="space-y-0.5">
                  <p className="text-sm font-bold text-white">{item.platform}</p>
                  <p className="font-mono text-xs text-white/60">{item.handle}</p>
                </div>
                {item.verified && (
                  <div className="flex items-center gap-1.5 rounded-lg bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary border border-primary/20">
                    <ShieldCheck size={12} />
                    Verified
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-4 flex items-start gap-3 rounded-xl border border-amber-400/20 bg-amber-400/5 px-4 py-3.5 text-sm text-white/80"
          >
            <AlertTriangle size={16} className="shrink-0 text-amber-400 mt-0.5" />
            <span>{scamNote}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default ScamAlertSection;
