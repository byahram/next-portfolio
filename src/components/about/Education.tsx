interface EducationItem {
  college: string;
  degree: string;
  major: string;
  status: string;
  from: string;
  to: string;
}

interface EducationProp {
  data: EducationItem[];
}

const Education = ({ data }: EducationProp) => {
  return (
    <article className="education mt-20">
      <h1 className="mb-8 text-xl font-medium tracking-tighter">Education</h1>
      <ul>
        {data.map((item, index) => (
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
  );
};

export default Education;
