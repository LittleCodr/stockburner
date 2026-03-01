import { motion } from "framer-motion";
import { fadeUp } from "../hooks/useReveal";
import Button from "../components/Button";
import Badge from "../components/Badge";
import { CheckCircle2 } from "lucide-react";

const bookImg =
  "/logo.png";

const points = [
  "Live classes & batches",
  "Free course access",
  "Private group membership",
  "Earn with us program",
  "Free premium group",
  "Daily market analysis",
];

function FreeCourseBanner() {
  return (
    <section className="section-padding" id="free-course">
      <div className="container-wide">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-[28px] border border-primary/25 bg-gradient-to-br from-primary/10 via-background-card/80 to-accent-2/5 shadow-neon"
        >
          {/* Background orb */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/15 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-accent-2/10 blur-3xl" aria-hidden />

          {/* Top neon line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" aria-hidden />
          {/* Bottom neon line */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" aria-hidden />

          <div className="grid items-center gap-8 p-8 sm:grid-cols-[1fr,1.4fr]">
            {/* Image */}
            <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-white/10 shadow-depth sm:h-full sm:min-h-[300px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent-2/20 z-10" aria-hidden />
              <img src={bookImg} alt="Trading course" className="h-full w-full object-cover" />
              {/* FREE badge overlay */}
              <div className="absolute top-4 left-4 z-20 rounded-xl border border-primary/40 bg-primary/20 px-3 py-1.5 text-xs font-black uppercase tracking-widest text-primary backdrop-blur">
                FREE
              </div>
            </div>

            {/* Content */}
            <div className="space-y-5 relative z-10">
              <Badge color="blue">Free Trading Course</Badge>
              <h3 className="text-2xl font-black leading-snug text-white sm:text-3xl">
                Complete starter kit for{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  new scalpers
                </span>
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                Get the exact PDF course Trade Guru shares with the community. Actionable playbooks, checklists, and
                cheat-sheets to execute faster.
              </p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {points.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle2 size={14} className="shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button size="lg" className="shadow-glow-lg">Download Free Now</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FreeCourseBanner;
