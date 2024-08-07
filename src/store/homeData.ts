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
    id: 1,
    alt: "Me speaking on stage at React Summit about the future of Next.js",
    src: "/images/summit.jpg",
    sizes: "(max-width: 768px) 213px, 33vw",
    imgClass: "rounded-lg object-cover",
    divClass: "relative h-40",
  },
  {
    id: 2,
    alt: "Me standing on stage at Reactathon delivering the keynote",
    src: "/images/reactathon.jpg",
    sizes: "(max-width: 768px) 213px, 33vw",
    imgClass: "rounded-lg object-cover object-top sm:object-center",
    divClass: "relative sm:row-span-2 row-span-1",
  },
  {
    id: 3,
    alt: "Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community",
    src: "/images/ship.jpg",
    sizes: "(max-width: 768px) 213px, 33vw",
    imgClass: "rounded-lg object-cover",
    divClass: "relative",
  },
  {
    id: 4,
    alt: "Me, Lydia, and Delba filming the Next.js Conf keynote",
    src: "/images/filming.jpg",
    sizes: "(max-width: 768px) 213px, 33vw",
    imgClass: "rounded-lg object-cover sm:object-center",
    divClass: "relative row-span-2",
  },
  {
    id: 5,
    alt: "My badge on top of a pile of badges from a Vercel meetup we held",
    src: "/images/meetups.jpg",
    sizes: "(max-width: 768px) 213px, 33vw",
    imgClass: "rounded-lg object-cover",
    divClass: "relative row-span-2",
  },
  {
    id: 6,
    alt: "Me standing on stage at SmashingConf giving a talk about my optimism for the web",
    src: "/images/smashing.jpg",
    sizes: "(max-width: 768px) 213px, 33vw",
    imgClass: "rounded-lg object-cover",
    divClass: "relative h-40",
  },
];
