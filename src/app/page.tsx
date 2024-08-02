"use client";
import Link from "next/link";
import Image from "next/image";
import Badge from "@/components/common/Badge";
import { galleryList } from "@/store/homeData";
import { useState } from "react";

export default function Home() {
  const [id, setId] = useState<null | number>(null);
  console.log(id);

  return (
    <section id="home" className="my-10 md:my-16">
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        Hello, I am Ahram Kim 👋
      </h1>

      {/* introduction */}
      <div className="introduction">
        안녕하세요. 3년차 프론트엔드 김아람입니다.
      </div>

      {/* gallery */}
      <div className="gallery grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
        {galleryList.map((item, index) => (
          <div className={`${item.divClass}`} key={index}>
            <Image
              onClick={() => setId(item.id)}
              alt={`${item.alt}`}
              src={`${item.src}`}
              fill
              sizes={`${item.sizes}`}
              priority
              className={`${item.imgClass}`}
            />
          </div>
        ))}
        {/* <div className="relative h-40">
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src="/images/home/summit.jpg"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative sm:row-span-2 row-span-1">
          <Image
            alt="Me standing on stage at Reactathon delivering the keynote"
            src="/images/home/reactathon.jpg"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative">
          <Image
            alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
            src="/images/home/ship.jpg"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
            src="/images/home/filming.jpg"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover sm:object-center"
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt="My badge on top of a pile of badges from a Vercel meetup we held"
            src="/images/home/meetups.jpg"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40">
          <Image
            alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
            src="/images/home/smashing.jpg"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div> */}
      </div>
    </section>
  );
}
