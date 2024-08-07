import Image from "next/image";

interface ProfileItem {
  photo: string;
  phone: string;
  email: string;
  github: string;
}

interface ProfileProp {
  data: ProfileItem;
}

const Profile = ({ data }: ProfileProp) => {
  return (
    <article className="profile">
      <div className="flex justify-center gap-10">
        <Image
          alt="Me speaking on stage at React Summit about the future of Next.js"
          src={data.photo}
          className="rounded-[50%] object-cover aspect-square w-56"
          width={224}
          height={224}
        />
        <ul className="flex flex-col justify-center gap-2">
          <li>
            <span>Phone:</span> {data.phone}
          </li>
          <li>
            <span>Email:</span> {data.email}
          </li>
          <li>
            <span>Github:</span> <a href={data.github}>{data.github}</a>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Profile;
