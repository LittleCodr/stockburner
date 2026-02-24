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
          className="rounded-card bg-gradient-to-r from-primary/14 via-background-card/70 to-background-card/60 p-6 shadow-card"
        >
          <div className="grid gap-4 md:grid-cols-[1.2fr,1fr] md:items-center">
            <SectionHeading
              title="Follow Trade Guru everywhere"
              description="Stay updated with live sessions, trade recaps, and wild new drops."
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
