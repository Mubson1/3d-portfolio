import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../layout";
import ServiceCard from "./ServiceCard";

const AboutView = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]"
    >
      I am a skilled MERN stack developer dedicated to creating user-centered
      web applications. Proficient in TypeScript, JavaScript, and frameworks
      like React, Node.js, Three.js, and React Native, I focus on producing
      clean, efficient code and elegant designs. I specialize in building
      innovative solutions and am eager to collaborate on bringing your web
      projects to life.
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  </>
);

const About = SectionWrapper(AboutView, "about");

export default About;
