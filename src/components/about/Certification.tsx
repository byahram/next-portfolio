interface CertificationItem {
  name: string;
  date: string;
}

interface CertificationProp {
  data: CertificationItem[];
}

const Certification = ({ data }: CertificationProp) => {
  return (
    <article className="certification">
      <h1 className="mb-8 text-xl font-medium tracking-tighter">
        Certification
      </h1>
      <ul>
        {data.map((item, index) => (
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
  );
};

export default Certification;
