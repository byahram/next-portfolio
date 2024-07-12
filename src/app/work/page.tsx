import React from "react";
import Link from "next/link";
import Image from "next/image";
import Badge from "@/components/common/Badge";

const WorkPage = () => {
  return (
    <section id="work" className="my-10 md:my-16">
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Work Experience
      </h1>

      {/* introduction */}
      <div>
        {`I'm a frontend developer, optimist, and community builder. I currently work as the VP of Product at`}
        <span className="not-prose">
          <Badge href="https://vercel.com/home">
            <svg
              width="13"
              height="11"
              role="img"
              aria-label="Vercel logo"
              className="mr-1 inline-flex"
            >
              <use href="/sprite.svg#vercel" />
            </svg>
            Vercel
          </Badge>
        </span>
        {`, where I help teach the `}
        <Badge href="https://nextjs.org">
          <Image
            alt="Next.js logomark"
            src="/next-logo.svg"
            className="!mr-1"
            width="14"
            height="14"
          />
          Next.js
        </Badge>
        {` community, an open-source web framework built with `}
        <Badge href="https://react.dev">
          <svg
            width="14"
            height="14"
            role="img"
            aria-label="React logo"
            className="!mr-1"
          >
            <use href="/sprite.svg#react" />
          </svg>
          React
        </Badge>
        .
      </div>

      <hr className="my-8 border-neutral-100 dark:border-neutral-800" />
      <article id="work-once">
        <h2 className="font-medium text-xl mb-1 tracking-tighter">CTK</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Frontend Developer, 2022-2024
        </p>
        <div className="desc mt-5">
          <p>
            I joined <a href="https://vercel.com/home">Vercel</a> early to grow{" "}
            <a href="https://nextjs.org">Next.js</a> and our developer
            community. I built our Developer Relations team to teach our
            community about our products.
          </p>
          {/* <ul>
    <li>
      In 2021, I was promoted to Director of DevRel. We{" "}
      <a href="https://twitter.com/kelseyhightower/status/1105985400110112768">
        translated customer pain
      </a>{" "}
      back into the product roadmap. We spoke at{" "}
      <Link href="/blog/nextjs-conf-2022-recap">conferences</Link>, wrote
      blog posts, and created videos. We built open-source examples and
      contributed back to the product.
    </li>
    <li>
      In 2022, I was promoted to VP of Developer Experience, now also
      leading our product documentation team. My team created a{" "}
      <a href="https://nextjs.org/learn">new free course</a> to teach
      Next.js, which had 17 million page views that year.{" "}
      <a href="https://twitter.com/leeerob/status/1608900031859527682">
        I shipped.
      </a>{" "}
      I partnered with our open-source community, collaborating with
      frameworks like{" "}
      <a href="https://vercel.com/docs/frameworks/nuxt">Nuxt</a> and{" "}
      <a href="https://astro.build/blog/vercel-official-hosting-partner/">
        Astro
      </a>{" "}
      and sponsoring individuals and projects.
    </li>
    <li>
      In 2023, I was promoted to VP of Product, now also leading Product
      Management.
    </li>
  </ul> */}
          {/* <p>
    Since I joined Vercel in 2020, Next.js active developers have grown
    1000%, now at ~900k. Next.js is now a top 10 software project on
    GitHub with <Stars />. It's used by Walmart, ChatGPT, Starbucks, Okta,
    Datastax, Notion, and <a href="https://nextjs.org/showcase">more</a>.
  </p> */}
        </div>
      </article>
    </section>
  );
};

export default WorkPage;
