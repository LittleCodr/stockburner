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
      className="glow-hover flex h-full flex-col overflow-hidden rounded-card border border-white/5 bg-background-card/70 backdrop-blur"
    >
      <div className="relative h-40 w-full overflow-hidden">
        <img src={course.thumbnail} alt={course.title} className="h-full w-full object-cover" />
        <div className="absolute left-4 top-3">
          <Badge color="yellow">{course.tag}</Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="text-lg font-semibold leading-tight">{course.title}</h3>
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
        <Button variant="secondary" className="mt-auto flex items-center gap-2">
          Explore
          <ArrowUpRight size={16} />
        </Button>
      </div>
    </motion.article>
  );
}

export default CourseCard;
