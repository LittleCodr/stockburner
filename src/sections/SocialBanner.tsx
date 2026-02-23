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
          className="rounded-card bg-primary/15 p-6 shadow-card"
        >
          <div className="grid gap-4 md:grid-cols-[1.2fr,1fr] md:items-center">
            <SectionHeading
              title="Follow Dinesh on every channel"
              description="Stay updated with live sessions, trade recaps, and announcements."
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
