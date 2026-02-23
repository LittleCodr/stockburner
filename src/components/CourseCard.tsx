import { ArrowUpRight, Heart } from "lucide-react";
import { motion } from "framer-motion";
import type { CourseItem } from "../data/courses";
import Badge from "./Badge";
import Button from "./Button";
import { fadeUp } from "../hooks/useReveal";

interface CourseCardProps {
  course: CourseItem;
}

function CourseCard({ course }: CourseCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      className="glow-hover group relative flex h-full flex-col overflow-hidden rounded-card border border-white/5 bg-background-card/80 backdrop-blur"
    >
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" aria-hidden />
        <div className="absolute left-4 top-3">
          <Badge color="yellow">{course.tag}</Badge>
        </div>
        <div className="absolute right-4 top-3 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/80">
          Hot pick
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="text-lg font-semibold leading-tight text-white drop-shadow-sm">{course.title}</h3>
        <div className="flex items-center justify-between text-sm text-text-secondary">
          <span className="text-xl font-bold text-white">{course.price}</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {course.discountLabel}
          </span>
        </div>
        <div className="flex items-center justify-between text-sm text-text-secondary">
          <span>Validity: {course.validity}</span>
          <span className="inline-flex items-center gap-1 text-text-secondary">
            <Heart size={16} className="text-accent" />
            {course.likes}
          </span>
        </div>
        <Button variant="secondary" className="mt-auto flex items-center gap-2 sheen-line">
          Explore
          <ArrowUpRight size={16} />
        </Button>
      </div>
    </motion.article>
  );
}

export default CourseCard;
