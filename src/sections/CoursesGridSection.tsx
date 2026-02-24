import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";
import { staggerChildren } from "../hooks/useReveal";

function CoursesGridSection() {
  return (
    <section id="courses" className="section-padding relative overflow-hidden">
      {/* Background orb */}
      <div className="orb orb-green pointer-events-none absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 opacity-20" aria-hidden />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading
            align="center"
            eyebrow="Courses"
            title="Pick your trading edge"
            description="Workshops and strategies designed for intraday scalpers who want repeatable execution."
          />
        </motion.div>

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default CoursesGridSection;
