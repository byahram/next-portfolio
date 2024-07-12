import Link from "next/link";
import Image from "next/image";
import Badge from "@/components/common/Badge";
import { galleryList } from "@/store/homeData";

export default function Home() {
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
              alt={`${item.alt}`}
              src={`${item.src}`}
              fill
              sizes={`${item.sizes}`}
              priority
              className={`${item.imgClass}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
