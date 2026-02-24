import { useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp, Zap } from "lucide-react";
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
      className="group relative flex h-full flex-col overflow-hidden rounded-card border border-white/8 bg-background-card/90 backdrop-blur transition-all duration-300 hover:border-primary/30 hover:shadow-neon"
    >
      {/* Holographic header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/15 via-background-card to-accent-2/10 p-5 pb-4">
        {/* Animated grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage: "linear-gradient(rgba(0,255,136,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.06) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
          aria-hidden
        />
        {/* Corner glow */}
        <div className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/20 blur-2xl group-hover:bg-primary/35 transition-all duration-500" aria-hidden />

        <div className="flex items-center justify-between relative z-10">
          <Badge color="yellow">{course.tag}</Badge>
          <span className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-white/60">
            <Zap size={8} className="text-primary" />
            Trade Guru
          </span>
        </div>
        <h3 className="relative z-10 mt-3 text-xl font-black leading-tight text-white drop-shadow-sm">
          {course.title}
        </h3>
        <p className="relative z-10 mt-2 text-sm leading-relaxed text-text-secondary">{course.description}</p>

        {/* Top edge beam */}
        <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <ul className="grid gap-2 text-sm text-white/80">
          {course.features.map((item, i) => (
            <li key={item} className="flex items-center gap-2.5 group/item">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-primary to-accent transition-transform duration-200 group-hover/item:scale-150"
                aria-hidden
                style={{ animationDelay: `${i * 100}ms` }}
              />
              <span className="group-hover/item:text-white transition-colors duration-200">{item}</span>
            </li>
          ))}
        </ul>

        {hasSchedules && open && (
          <div className="space-y-3 rounded-xl border border-primary/15 bg-primary/5 p-3.5">
            {course.schedules?.map((sched) => (
              <div key={sched.label} className="space-y-1.5">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{sched.label}</p>
                <ul className="space-y-1 text-sm text-text-secondary">
                  {sched.items.map((entry) => (
                    <li key={entry} className="flex items-start gap-2">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
                      <span>{entry}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        <div className="mt-auto flex items-center justify-between gap-3">
          {hasSchedules && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="flex items-center gap-1.5 text-xs"
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? "Hide batches" : "View batches"}
              {open ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
            </Button>
          )}
          <Button variant="secondary" size="sm" className="ml-auto flex items-center gap-1.5">
            Explore
            <ArrowUpRight size={14} />
          </Button>
        </div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/40 transition-all duration-500" />
    </motion.article>
  );
}

export default CourseCard;
