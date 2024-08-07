"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import vercel from "/public/images/vercel.jpg";
import ChannelLink from "@/components/common/ChannelLink";
import {
  SkillsList,
  EduList,
  WorkList,
  CertList,
  IntroList,
} from "@/store/aboutData";
import Certification from "@/components/about/Certification";
import Education from "@/components/about/Education";
import Experience from "@/components/about/Experience";
import Profile from "@/components/about/Profile";

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
      <Profile data={IntroList} />

      {/* Education */}
      <Education data={EduList} />

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

      {/* Work Experience */}
      <Experience data={WorkList} />

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
      <Certification data={CertList} />
    </section>
  );
}
