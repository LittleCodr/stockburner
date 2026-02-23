import { motion } from "framer-motion";
import { fadeUp } from "../hooks/useReveal";
import Button from "../components/Button";
import Badge from "../components/Badge";

const bookImg =
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1000&q=80";

const points = ["Lifetime access", "Downloadable notes", "Live Q&A"];

function FreeCourseBanner() {
  return (
    <section className="section-padding" id="free-course">
      <div className="container-wide">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="glow-hover grid items-center gap-6 overflow-hidden rounded-card border border-primary/30 bg-primary/10 p-6 shadow-card sm:grid-cols-[1.1fr,1.5fr]"
        >
          <div className="relative h-full w-full overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/20" aria-hidden />
            <img src={bookImg} alt="Trading course" className="h-full w-full object-cover" />
          </div>
          <div className="space-y-4">
            <Badge color="blue">Free Trading Course</Badge>
            <h3 className="text-2xl font-bold text-white">Complete starter kit for new scalpers</h3>
            <p className="text-text-secondary">
              Get the exact PDF course Dinesh shares with his mentees. Actionable playbooks, checklists, and
              cheat-sheets to execute faster.
            </p>
            <ul className="grid gap-2 text-sm text-white/80 sm:grid-cols-2">
              {points.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <Button className="shadow-glow">Download Now</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FreeCourseBanner;
