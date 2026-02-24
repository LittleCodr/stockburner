import { useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import type { CourseItem } from "../data/courses";
import Badge from "./Badge";
import Button from "./Button";
import { fadeUp } from "../hooks/useReveal";

interface CourseCardProps {
  course: CourseItem;
}

function CourseCard({ course }: CourseCardProps) {
  const hasSchedules = Boolean(course.schedules && course.schedules.length > 0);
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      variants={fadeUp}
      className="glow-hover group relative flex h-full flex-col overflow-hidden rounded-card border border-white/5 bg-background-card/80 backdrop-blur"
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-background-card/80 to-accent/15 p-4">
        <div className="pointer-events-none absolute inset-0 bg-hero-mesh opacity-40" aria-hidden />
        <div className="flex items-center justify-between">
          <Badge color="yellow">{course.tag}</Badge>
          <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/80">Trade Guru</span>
        </div>
        <h3 className="mt-3 text-xl font-bold leading-tight text-white drop-shadow-sm">{course.title}</h3>
        <p className="mt-2 text-sm text-text-secondary">{course.description}</p>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <ul className="grid gap-2 text-sm text-white/80">
          {course.features.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
              {item}
            </li>
          ))}
        </ul>

        {hasSchedules && open && (
          <div className="space-y-3 rounded-lg border border-white/10 bg-white/5 p-3">
            {course.schedules?.map((sched) => (
              <div key={sched.label} className="space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">{sched.label}</p>
                <ul className="space-y-1 text-sm text-text-secondary">
                  {sched.items.map((entry) => (
                    <li key={entry} className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                      <span>{entry}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        <div className="mt-auto flex items-center gap-3">
          {hasSchedules && (
            <Button
              type="button"
              variant="ghost"
              className="flex items-center gap-2 text-sm"
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? "Hide batches" : "View batches"}
              {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </Button>
          )}
          <Button variant="secondary" className="flex items-center gap-2 sheen-line">
            Explore
            <ArrowUpRight size={16} />
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

export default CourseCard;
