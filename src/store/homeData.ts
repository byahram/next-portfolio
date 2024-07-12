// Nav List
export const navList = {
  "/": { name: "home" },
  "/about": { name: "about" },
  "/work": { name: "work" },
  "/projects": { name: "projects" },
  "/contact": { name: "contact" },
};

// Home - Gallery List
export const galleryList = [
  {
    no: 1,
    alt: "Me speaking on stage at React Summit about the future of Next.js",
    src: "/images/home/summit.jpg",
    sizes: "(max-width: 768px) 213px, 33vw",
    imgClass: "rounded-lg object-cover",
    divClass: "relative h-40",
  },
  {
    no: 2,
    alt: "Me standing on stage at Reactathon delivering the keynote",
    src: "/images/home/reactathon.jpg",
    sizes: "(max-width: 768px) 213px, 33vw",
    imgClass: "rounded-lg object-cover object-top sm:object-center",
    divClass: "relative sm:row-span-2 row-span-1",
  },
  {
    no: 3,
    alt: "Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community",
    src: "/images/home/ship.jpg",
    sizes: "(max-width: 768px) 213px, 33vw",
    imgClass: "rounded-lg object-cover",
    divClass: "relative",
  },
  {
    no: 4,
    alt: "Me, Lydia, and Delba filming the Next.js Conf keynote",
    src: "/images/home/filming.jpg",
    sizes: "(max-width: 768px) 213px, 33vw",
    imgClass: "rounded-lg object-cover sm:object-center",
    divClass: "relative row-span-2",
  },
  {
    no: 5,
    alt: "My badge on top of a pile of badges from a Vercel meetup we held",
    src: "/images/home/meetups.jpg",
    sizes: "(max-width: 768px) 213px, 33vw",
    imgClass: "rounded-lg object-cover",
    divClass: "relative row-span-2",
  },
  {
    no: 6,
    alt: "Me standing on stage at SmashingConf giving a talk about my optimism for the web",
    src: "/images/home/smashing.jpg",
    sizes: "(max-width: 768px) 213px, 33vw",
    imgClass: "rounded-lg object-cover",
    divClass: "relative h-40",
  },
];
