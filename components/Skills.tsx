"use client";
import { ImHtmlFive2, ImCss3 } from "react-icons/im";
import { TbBrandJavascript, TbBrandRedux, TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
type Props = {};
const titleAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.2 },
  },
};
const skillsAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};
const Skills = (props: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.4, once: true }}
      className="w-10/12 mx-auto mt-10"
    >
      <motion.h1
        variants={titleAnimation}
        className="md:text-4xl text-3xl lg:text-5xl font-bold mb-10 max-sm:mb-2"
      >
        Skills
      </motion.h1>
      <div className="flex msx-md:flex-wrap gap-7 justify-between max-sm:flex-col md:grid md:grid-cols-3">
        <motion.div
          variants={skillsAnimation}
          custom={1}
          className="d p-5 relative overflow-hidden mt-5 w-1/6 max-sm:mx-auto max-sm:w-2/3 md:w-3/4"
        >
          <div className="flex justify-center mt-4">
            <ImHtmlFive2 size={28} className=" text-pink-500" />
          </div>
          <h2 className="text-center mt-5">HTML</h2>
        </motion.div>
        <motion.div
          variants={skillsAnimation}
          custom={2}
          className="d p-5 relative overflow-hidden mt-5 w-1/6 max-sm:mx-auto max-sm:w-2/3 md:w-3/4"
        >
          <div className="flex justify-center mt-4">
            <ImCss3 size={28} className=" text-pink-500" />
          </div>
          <h2 className="text-center mt-5">CSS</h2>
        </motion.div>
        <motion.div
          variants={skillsAnimation}
          custom={3}
          className="d p-5 relative overflow-hidden mt-5 w-1/6 max-sm:mx-auto max-sm:w-2/3 md:w-3/4"
        >
          <div className="flex justify-center mt-4">
            <TbBrandJavascript size={28} className=" text-pink-500" />
          </div>
          <h2 className="text-center mt-5">JavaScript</h2>
        </motion.div>
        <motion.div
          variants={skillsAnimation}
          custom={4}
          className="d p-5 relative overflow-hidden mt-5 w-1/6 max-sm:mx-auto max-sm:w-2/3 md:w-3/4"
        >
          <div className="flex justify-center mt-4">
            <FaReact size={28} className=" text-pink-500" />
          </div>
          <h2 className="text-center mt-5">React</h2>
        </motion.div>
        <motion.div
          variants={skillsAnimation}
          custom={5}
          className="d p-5 relative overflow-hidden mt-5 w-1/6 max-sm:mx-auto max-sm:w-2/3 md:w-3/4"
        >
          <div className="flex justify-center mt-4">
            <TbBrandRedux size={28} className=" text-pink-500" />
          </div>
          <h2 className="text-center mt-5">Redux</h2>
        </motion.div>
        <motion.div
          variants={skillsAnimation}
          custom={6}
          className="d p-5 relative overflow-hidden mt-5 w-1/6 max-sm:mx-auto max-sm:w-2/3 md:w-3/4"
        >
          <div className="flex justify-center mt-4">
            <TbBrandNextjs size={28} className=" text-pink-500" />
          </div>
          <h2 className="text-center mt-5">Next JS</h2>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
