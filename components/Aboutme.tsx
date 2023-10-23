"use client";
import { motion } from "framer-motion";
const blockAnimation = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.3 },
  },
};
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

const AboutMe = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-10/12 mx-auto mt-10"
    >
      <motion.h2
        variants={titleAnimation}
        className="md:text-4xl text-3xl lg:text-5xl font-bold mb-10 max-sm:mb-2"
      >
        About me
      </motion.h2>
      <motion.div variants={blockAnimation} className="flex msx-md:flex-wrap">
        <div className="d p-5 overflow-hidden mt-5 w-2/3 mx-auto max-sm:w-[100%] max-sm:py-2 md:w-[100%] max-md:py-2">
          <p className="text-left mt-5 text-base">
            Добрый день! Меня зовут Георгий, и я начинающий
            <strong> Frontend - разработчик</strong>. Мой путь в разработке
            начался, когда я поступил в инстутит, где учусь по специальности
            "Бизнес информатика". За это время я познакомился с такими
            технологиями как HTML, CSS и JavaScript, и увлекся созданием
            красивых и интерактивных пользовательских интерфейсов. Один из моих
            самых увлекательных проектов был связан с разработкой веб-приложения
            с использованием React, Redux и Next.js. Эти инструменты позволили
            мне создать мощные и эффективные приложения. Моя цель как
            разработчика - постоянно совершенствовать свои навыки и учиться
            новому. Моя цель создавать веб-приложения, которые не только
            функциональны, но и приятны в использовании. Каждый день я изучаю
            новые технологии и применяю их в своих проектах. Я считаю, что важно
            не только создавать качественный код, но и понимать, как он
            взаимодействует с бизнес-процессами. Всегда готов к новым задачам и
            с нетерпением жду возможности внести свой вклад в мир
            веб-разработки. Если у вас есть какие-либо вопросы или предложения о
            совместной работе, пожалуйста, свяжитесь со мной.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
