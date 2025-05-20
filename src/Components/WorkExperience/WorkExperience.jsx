import React, { useState } from "react";
import { motion } from "framer-motion";

const cardVariants = {
  logoInitial: {
    scale: 1,
  },
  logoAnimation: {
    scale: 0.8,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
  leftinitialCard: {
    opacity: 0,
    clipPath: "circle(0% at 50px 50px)",
  },
  leftanimateCard: {
    opacity: 1,
    clipPath: "circle(100% at 50% 50%)",
    transition: {
      duration: 0.75,
    },
  },
  textInitial: {
    x: 0,
  },
  textAnimate: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 600,
      damping: 15,
    },
  },
};

const WorkExperience = () => {
  const [workExperience, setWorkExperience] = useState([
    {
      priority: "1",
      id: 1,
      companyLogo: "./logos/rizer-logo.png",
      designation: "Associate Software Engineer",
      companyName: "Rizer Consulting and Solutions (Pvt) Ltd",
      experiencePeriod: "Aug 2024 - Apr 2025",
      desc: [
        {
          id: 1.1,
          task: "Worked on ERP project, which build with Microfrontend architecture. Involved in project implementation. Followed best practices",
        },
        {
          id: 1.2,
          task: "Worked on a LMS project and involved in all aspects of the SDLC",
        },
      ],
    },
    {
      priority: "2",
      id: 2,
      companyLogo: "./logos/rizer-logo.png",
      designation: "Intern Software Engineer",
      companyName: "Rizer Consulting and Solutions (Pvt) Ltd",
      experiencePeriod: "Jan 2024 - July 2025",
      desc: [
        {
          id: 1.1,
          task: "Worked on WebRTC Project",
        },
        {
          id: 1.2,
          task: "Participated in regular standup meetings",
        },
      ],
    },
  ]);
  return (
    <div className="mt-20 mb-12">
      <div className="row flex justify-center text-4xl font-bold tracking-widest underline underline-offset-8 mb-10">
        <h1>Professional Experience</h1>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {workExperience.map((experience) => (
          <div
            className="col-span-1 md:col-span-1 flex justify-center"
            key={experience.id}
          >
            {experience.priority == "1" ? (
              <>
                {/* work experience card */}
                <motion.div
                  className="card bg-transparent w-4/5 h-auto flex justify-center"
                  variants={cardVariants}
                  initial="leftinitialCard"
                  whileInView="leftanimateCard"
                >
                  <div className="grid grid-cols-3 px-2 items-center">
                    {/* company logo */}
                    <motion.div
                      className="col-span-1 flex items-center"
                      variants={cardVariants}
                      initial="logoInitial"
                      whileInView="logoAnimation"
                    >
                      <img
                        src={experience.companyLogo}
                        width={"40%"}
                        className="border-full"
                      />
                    </motion.div>
                    {/* text-part */}
                    <motion.div
                      className="col-span-2 flex flex-col justify-start items-start text-xl font-semibold"
                      variants={cardVariants}
                    >
                      {/* job role and experince period  */}
                      <motion.div className="text-role-and-experience flex items-center gap-5">
                        <motion.h1
                          className="text-left font-bold text-blue-200"
                          variants={cardVariants}
                          initial="textInitial"
                          whileInView="textAnimate"
                        >
                          {experience.designation}
                        </motion.h1>
                        <motion.p
                          className="text-center text-xs text-blue-300"
                          variants={cardVariants}
                          initial="textInitial"
                          whileInView="textAnimate"
                        >
                          {experience.experiencePeriod}
                        </motion.p>
                      </motion.div>
                      {/* experience description  */}
                      <motion.div
                        className=""
                        variants={cardVariants}
                        initial="textInitial"
                        whileInView="textAnimate"
                      >
                        {experience.desc.map((work) => (
                          <motion.p
                            key={work.id}
                            className="flex text-opacity-10 text-xs italic"
                          >
                            <li></li>
                            {work.task}
                          </motion.p>
                        ))}
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </>
            ) : (
              <>
                <motion.div
                  className="card bg-transparent w-3/5 h-auto flex justify-center"
                  variants={cardVariants}
                  initial="leftinitialCard"
                  whileInView="leftanimateCard"
                >
                  <div className="grid grid-cols-3 px-2 items-center">
                    {/* company logo */}
                    <motion.div
                      className="col-span-1 flex items-center"
                      variants={cardVariants}
                      initial="logoInitial"
                      whileInView="logoAnimation"
                    >
                      <img
                        src={experience.companyLogo}
                        width={"40%"}
                        className="border-full"
                      />
                    </motion.div>
                    {/* text-part */}
                    <motion.div
                      className="col-span-2 flex flex-col justify-start items-start text-xl"
                      variants={cardVariants}
                    >
                      {/* job role and experince period  */}
                      <motion.div className="text-role-and-experience flex items-center gap-5">
                        <motion.h1
                          className="text-lefttext-blue-200"
                          variants={cardVariants}
                          initial="textInitial"
                          whileInView="textAnimate"
                        >
                          {experience.designation}
                        </motion.h1>
                        <motion.p
                          className="text-center text-xs text-blue-300"
                          variants={cardVariants}
                          initial="textInitial"
                          whileInView="textAnimate"
                        >
                          {experience.experiencePeriod}
                        </motion.p>
                      </motion.div>
                      {/* experience description  */}
                      <motion.div
                        className=""
                        variants={cardVariants}
                        initial="textInitial"
                        whileInView="textAnimate"
                      >
                        {experience.desc.map((work) => (
                          <motion.p
                            key={work.id}
                            className="flex text-opacity-10 text-xs italic"
                          >
                            <li></li>
                            {work.task}
                          </motion.p>
                        ))}
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
