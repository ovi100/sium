import Image from "next/image";

const ProjectCard = ({ item }) => {
  const { image, year, institute, title, link } = item;
  return (
    <div
      className="project flex items-center gap-5 border-2 border-[#444] rounded-md mb-4 translate-y-0 
    transition duration-300 ease-linear hover:shadow-[0_12px_17px_rgba(0,0,0,.12)] hover:cursor-pointer hover:-translate-y-2"
    >
      <div className="image bg-[#444] h-32 md:flex hidden items-center justify-center p-8">
        <Image className="w-14 h-14 rounded-full" src={image} alt="icon" />
      </div>
      <div className="text flex-1 p-5">
        <div className="title text-base lg:text-sm text-[#f5f5f5]">{title}</div>
        <div className="institute text-xs text-[#777] capitalize my-2">
          {institute}
        </div>
        <div className="year text-xs text-[#777]">{year}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
