"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import summit from "/public/images/home/summit.jpg";
import vercel from "/public/images/home/vercel.jpg";
import ChannelLink from "@/components/common/ChannelLink";
import { SkillsList, EduList, WorkList, CertList } from "@/store/about-data";

export default function About() {
  const [activeTab, setActiveTab] = useState(1);
  const [activeSkill, setActiveSkill] = useState(1);

  const handleTabClick = (tabNumber: any) => {
    setActiveTab(tabNumber);
    console.log("tabNumber ::: ", tabNumber);
  };

  const handleSkillClick = (skillNumber: any) => {
    setActiveSkill(skillNumber);
    console.log("skillNumber ::: ", skillNumber);
  };

  return (
    <section id="about" className="my-10 md:my-16">
      <h1 className="mb-14 text-2xl font-medium tracking-tighter">About Me</h1>
      {/* profile */}
      <article className="profile">
        <div className="flex justify-center gap-10">
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src={summit}
            className="rounded-[50%] object-cover aspect-square w-56"
          />
          <ul className="flex flex-col justify-center gap-2">
            <li>
              <span>Phone:</span> 010-0000-0000
            </li>
            <li>
              <span>Email:</span> ahram0223@naver.com
            </li>
            <li>
              <span>Github:</span>{" "}
              <a href="https://github.com/byahram">
                https://github.com/byahram
              </a>
            </li>
          </ul>
        </div>
      </article>

      {/* Education */}
      <article className="education mt-20">
        <h1 className="mb-8 text-xl font-medium tracking-tighter">Education</h1>
        <ul>
          {EduList.map((item, index) => (
            <li
              key={index}
              className="[&:not(:first-child)]:mt-6 flex items-start justify-start gap-12"
            >
              <div className="flex items-center flex-nowrap">
                <div className="relative w-1.5 h-1.5 bg-dark ml-3 mr-5 rounded-full"></div>
                <p>
                  {item.from} ~ {item.to}
                </p>
              </div>
              <div className="flex flex-col">
                <p>{item.college}</p>
                <p className="mt-0.5">
                  - {item.degree} in {item.major}, {item.status}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </article>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

      {/* Work Experience */}
      <article className="experience">
        <h1 className="mb-8 text-xl font-medium tracking-tighter">
          Work Experience
        </h1>
        <ul>
          {WorkList.map((item, index) => (
            <li
              key={index}
              className="[&:not(:first-child)]:mt-6 flex items-start justify-start gap-12"
            >
              <div className="flex items-center flex-nowrap w-[30%]">
                <div className="relative w-1.5 h-1.5 bg-dark ml-3 mr-5 rounded-full"></div>
                <p>{item.company}</p>
              </div>
              <div className="flex flex-col">
                <p>
                  {item.from} ~ {item.to}
                </p>
                <p className="mt-0.5">
                  - {item.role} / {item.team}
                </p>
                <p>{item.skills}</p>
              </div>
            </li>
          ))}
        </ul>
      </article>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

      {/* Skills */}
      <article className="skills">
        <h1 className="mb-8 text-xl font-medium tracking-tighter">Skills</h1>

        {/** tab menu */}
        <div className="tab-btn flex">
          {SkillsList.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer flex items-center justify-center border border-solid rounded-xl w-[130px] h-[40px]  ${
                activeTab === item.idx
                  ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                  : "text-black border-black dark:text-white dark:border-white"
              } ${index == 0 ? "mr-4" : ""}`}
              onClick={() => handleTabClick(item.idx)}
            >
              {item.name}
            </div>
          ))}
        </div>

        {/** content */}
        <div className="tab-cont">
          {SkillsList.map((item, index) => (
            <div
              key={index}
              className={`content grid-cols-2 gap-5 mt-5 mx-auto ${
                activeTab === item.idx ? "grid" : "hidden"
              }`}
            >
              {item.skills.map((item2, index2) => (
                <div
                  key={index2}
                  className="flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
                >
                  <ChannelLink
                    img={vercel}
                    name={item2.title}
                    link="https://www.youtube.com/@leerob"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </article>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

      {/* Certification */}
      <article className="certification">
        <h1 className="mb-8 text-xl font-medium tracking-tighter">
          Certification
        </h1>
        <ul>
          {CertList.map((item, index) => (
            <li
              key={index}
              className="[&:not(:first-child)]:mt-2.5 flex items-center"
            >
              <div className="relative w-1.5 h-1.5 bg-dark ml-3 mr-5 rounded-full"></div>
              <p className="mr-2">{item.name}</p>
              <span className="font text-sm text-gray-700 flex items-end">
                ({item.date} 취득)
              </span>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
