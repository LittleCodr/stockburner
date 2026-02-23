import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../hooks/useReveal";

interface SectionShellProps extends PropsWithChildren {
  id?: string;
  className?: string;
}

function SectionShell({ id, className, children }: SectionShellProps) {
  return (
    <section id={id} className={className}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="container-wide"
      >
        {children}
      </motion.div>
    </section>
  );
}

export default SectionShell;
