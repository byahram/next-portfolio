interface ExperienceItem {
  company: string;
  team: string;
  position: string;
  role: string;
  skills: string;
  from: string;
  to: string;
}

interface ExperienceProp {
  data: ExperienceItem[];
}

const Experience = ({ data }: ExperienceProp) => {
  return (
    <article className="experience">
      <h1 className="mb-8 text-xl font-medium tracking-tighter">
        Work Experience
      </h1>
      <ul>
        {data.map((item, index) => (
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
  );
};

export default Experience;
