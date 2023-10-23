"use client";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
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

const Projects = (props: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: true }}
      className="w-10/12 mx-auto mt-10"
    >
      <motion.h2
        variants={titleAnimation}
        className="md:text-4xl text-3xl lg:text-5xl font-bold"
      >
        Projects
      </motion.h2>
      <div className="mt-20 md:w-9/12 mx-auto max-sm:mt-10">
        <Image
          className="rounded-xl opacity-90 mx-auto"
          src="/calendar.png"
          alt="calendar"
          width={700}
          height={700}
        />
        <div className="my-10 sm:w-10/12 mx-auto">
          <h1 className="text-2xl font-bold mb-4 text-center">Calendar</h1>
          <div className="text-neutral-300 text-center">
            Данный проект разработан с использованием React и TailWind. Он
            предоставляет пользователю возможность просматривать и управлять
            событиями в календаре.
          </div>
          <div className="mt-6 inline-block flex gap-2 justify-center">
            <Link
              href="https://calendar-react-six.vercel.app/"
              className="flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700"
            >
              Explore <BsArrowUpRight size={14} className="ml-2" />
            </Link>
            <Link
              href="https://github.com/GrudTrigger/Personal-Calendar-React"
              className="flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700"
            >
              GitHub <BsGithub size={14} className="ml-2" />
            </Link>
          </div>
        </div>

        <div className="h-2px border border-white w-1/3 mx-auto"></div>
      </div>
      <div className="mt-20 md:w-9/12 mx-auto">
        <Image
          className="rounded-xl opacity-90 mx-auto"
          src="/crm.png"
          alt="crm"
          width={700}
          height={700}
        />
        <div className="my-10 sm:w-10/12 mx-auto">
          <h1 className="text-2xl font-bold mb-4 text-center">Mini CRM</h1>
          <div className="text-neutral-300 text-center">
            Мини CRM система React + Redux ToolKit, где можно добавлять зайти,
            фильтровать, и редактировать заявки поступающие в систему
          </div>
          <div className="mt-6 inline-block flex gap-2 justify-center">
            <Link
              href="https://crm-psi-jade.vercel.app/"
              className="flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700"
            >
              Explore <BsArrowUpRight size={14} className="ml-2" />
            </Link>
            <Link
              href="https://github.com/GrudTrigger/CRM"
              className="flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700"
            >
              GitHub <BsGithub size={14} className="ml-2" />
            </Link>
          </div>
        </div>

        <div className="h-2px border border-white w-1/3 mx-auto"></div>
      </div>
      <div className="mt-20 md:w-9/12 mx-auto">
        <Image
          className="rounded-xl opacity-90 mx-auto"
          src="/cinema.png"
          alt="calendar"
          width={700}
          height={700}
        />
        <div className="my-10 sm:w-10/12 mx-auto">
          <h1 className="text-2xl font-bold mb-4 text-center">Films</h1>
          <div className="text-neutral-300 text-center">
            Веб-приложение на Next.js с использованием Clerk Auth,
            предоставляющее возможность поиска фильмов и сериалов, просмотра
            трейлеров и добавления их в избранное
          </div>
          <div className="mt-6 inline-block flex gap-2 justify-center">
            <Link
              href="https://cinema-rating.vercel.app/"
              className="flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700"
            >
              Explore <BsArrowUpRight size={14} className="ml-2" />
            </Link>
            <Link
              href="https://github.com/GrudTrigger/CinemaRating"
              className="flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700"
            >
              GitHub <BsGithub size={14} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
