import { socialLinks } from "../data/socials";
import SectionHeading from "../components/SectionHeading";
import SocialButton from "../components/SocialButton";
import { motion } from "framer-motion";
import { fadeUp, staggerChildren } from "../hooks/useReveal";

function SocialBanner() {
  return (
    <section className="section-padding" id="social">
      <div className="container-wide">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-[28px] border border-white/8 bg-gradient-to-br from-background-card/80 via-background-card/60 to-background-card/40 p-8 shadow-depth"
        >
          {/* Gradient top line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-2/60 to-transparent" aria-hidden />
          {/* Background orb */}
          <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-accent-2/8 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute left-0 bottom-0 h-32 w-32 rounded-full bg-primary/8 blur-3xl" aria-hidden />

          <div className="relative grid gap-6 md:grid-cols-[1.3fr,1fr] md:items-center">
            <SectionHeading
              title="Follow Trade Guru everywhere"
              description="Stay updated with live sessions, trade recaps, and exclusive market drops."
            />
            <motion.div
              variants={staggerChildren}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              {socialLinks.map((item) => (
                <motion.div key={item.label} variants={fadeUp}>
                  <SocialButton label={item.label} href={item.href} icon={item.icon} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default SocialBanner;
