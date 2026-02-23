import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";
import { staggerChildren } from "../hooks/useReveal";

function CoursesGridSection() {
  return (
    <section id="courses" className="section-padding">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Courses"
          title="Pick your trading edge"
          description="Workshops and strategies designed for intraday scalpers who want repeatable execution."
        />
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
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
