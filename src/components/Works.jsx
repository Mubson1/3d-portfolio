import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../layout";
import { fadeIn, textVariant } from "../utils/motion";
import { projects } from "../constants";
import ProjectCard from "./ProjectCard";

const WorkView = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          My experience is exemplified through a range of real-world projects,
          each providing insights into my problem-solving strategies, complete
          with links to code repositories and live demos. These examples
          demonstrate my ability to effectively tackle complex issues, handle
          diverse technologies, and proficiently manage projects, showcasing a
          consistent dedication to surpassing project goals.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

const Works = SectionWrapper(WorkView, "");

export default Works;
