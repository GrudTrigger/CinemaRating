"use client";
import { AiOutlineGithub } from "react-icons/ai";
import { LiaTelegram } from "react-icons/lia";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export interface ContainerProps {}

const leftAnimation = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.2 },
  },
};

const rightAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
    rotate: -10,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.2 },
    rotate: 0,
  },
};

export const Container = (props: ContainerProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="lg:pt-16 pt-4 relative w-10/12 mx-auto h-[860px] max-sm:h-[88vh]"
    >
      <motion.div
        variants={rightAnimation}
        className="md:flex items-center justify-between flex-row-reverse mt-30 max-sm:py-20 md:mt-20"
      >
        <div className="flex justify-end items-end max-md:pt-4 max-sm:justify-center">
          <div className="h-[40%] w-[40%] md:h-[60%] md:w-[60%] 2xl:h-[40%] 2xl:w-[40%]">
            <Image
              className="rounded-[10px] transform -scale-x-100 max-sm:rounded-full"
              width={400}
              height={330}
              layout="responsive"
              objectFit="cover"
              src="/hero.jpg"
              alt="Hero Image"
            />
          </div>
        </div>
        <motion.div
          variants={leftAnimation}
          className="p-4 pl-0 mt-5 max-sm:mt-10 max-sm:text-center"
        >
          <p className="text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl">
            Привет!
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl pt-4 lg:pt-6">
            Меня зовут Георгий
          </h1>
          <p className="text-base sm:text-xl md:text-base lg:test-xl xl:text-2xl lg-pt-6 pt-2">
            И я начинающий Frontend разработчик
          </p>
          <div className="flex items-center mt-6 md:mt-14 max-sm:justify-center">
            <ul className="flex items-center space-x-2 sm:space-x-5 mr-6 my-4 ">
              <li>
                <Link
                  href={"https://github.com/GrudTrigger"}
                  className="hover:opacity-100 opacity-75 transition ease-in duration-150"
                >
                  <AiOutlineGithub size={24} />
                </Link>
              </li>
              <li>
                <Link
                  href={"tg://resolve?domain=George_Murashov"}
                  className="hover:opacity-100 opacity-75 transition ease-in duration-150"
                >
                  <LiaTelegram size={24} />
                </Link>
              </li>
            </ul>
            <Link
              href={"mailto:goshkamurzik@yandex.ru"}
              className="px-4 py-[5px] whitespace-nowrap transition ease-in duration-150 bg-neutral-700 hover:bg-neutral-600 rounded-2xl border-[0.5px] border-[#363636]"
            >
              Email
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Container;
