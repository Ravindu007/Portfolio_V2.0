import React, { useState } from 'react'
import {motion} from 'framer-motion'

const cardVariants = {
  initialImage: {
    y: 300,
    opacity: 0,
  },
  animateImage: {
    opacity: 1,
    y: 10,
    transition: {
      type: "spring",
      sfiffness: 200,
      damping: 10,
      bounce: 0.4,
      duration: 1,
    },
  },
};

const Achievements = () => {
  const [achievements, setAchievements] = useState([
    {
      id: 1,
      title: "Best Perfomer 2025",
      img: "./achievements/2025-best.jpeg",
      desc: "I was awareded with the gold medal for being the best student of the Faculty of computing for the year 2025",
      link: "",
    },

    {
      id: 2,
      title: "Best Presenter 2025",
      img: "./achievements/2025-presenter.jpeg",
      desc: "I was awareded with the first place for the best undergraduate research persentation for the year 2025",
      link: "",
    },

    {
      id: 3,
      title: "Best Performer 2024",
      img: "./achievements/2024-best.jpeg",
      desc: "I was awareded with the gold medal for being the best student of the Faculty of computing for the year 2024",
      link: "",
    },
  ]);
  return (
    <div className="achievements py-10">
      <div className="row flex justify-center text-4xl font-bold tracking-widest underline underline-offset-8">
        <h1>Recent Achievements</h1>
      </div>

      <div className="grid grid-cols-3 m-5">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="col-span-3 md:col-span-1 rouded-md  shadow-2xl shadow-primary mx-2 px-5 py-2"
          >
            <div className="title-section flex justify-center text-xl font-bold underline underline-offset-4">
              {achievement.title}
            </div>
            <motion.div
              className="img-section flex justify-center items-center"
              variants={cardVariants}
              initial="initialImage"
              whileInView="animateImage"
            >
              <img src={achievement.img} alt="" width={300} />
            </motion.div>
            <div className="desc-section flex text-justify py-2">{achievement.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
