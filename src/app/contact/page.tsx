"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  BiLogoGmail,
  BiLogoGithub,
  BiLogoInstagramAlt,
  BiSolidConversation,
} from "react-icons/bi";

export default function ContactPage() {
  return (
    <section id="projects" className="my-10 md:my-16">
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">Contact Me</h1>

      {/* contact form */}

      {/* typeanimation */}
      <div className="flex font-semibold text-2xl justify-center">
        <TypeAnimation
          sequence={[
            "Feel Free to Contact Me",
            1000,
            "Hope to See You Again ❤",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{
            display: "inline-block",
          }}
          repeat={Infinity}
        />
      </div>

      {/* sns */}
      <div className="w-full flex justify-center gap-1 pt-3">
        <BiLogoGmail
          onClick={() => window.open(`mailto:ahram0223@naver.com`)}
          size={50}
          className="icon rounded-full shadow-lg bg-gray-100 dark:bg-gray-800 shadow-gray-400 m-2 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
        />
        <BiSolidConversation
          onClick={() => window.open(`tel:01046874654`)}
          size={50}
          className="icon rounded-full shadow-lg bg-gray-100 dark:bg-gray-800 shadow-gray-400 m-2 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
        />
        <BiLogoGithub
          onClick={() => window.open(`https://github.com/byahram/`)}
          size={50}
          className="icon rounded-full shadow-lg bg-gray-100 dark:bg-gray-800 shadow-gray-400 m-2 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
        />
        <BiLogoInstagramAlt
          onClick={() => window.open(`https://www.instagram.com/__ahram.k/`)}
          size={50}
          className="icon rounded-full shadow-lg bg-gray-100 dark:bg-gray-800 shadow-gray-400 m-2 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
        />
      </div>
    </section>
  );
}
