import {
  activityImage1,
  activityImage2,
  activityImage3,
  activityImage4,
} from "@/public/assets/images";
import ProjectCard from "./ProjectCard";

const Works = () => {
  const activities = [
    {
      image: activityImage1,
      institute: "ICMA NSU Student Chapter",
      title: "President",
    },
    {
      image: activityImage2,
      institute: "UNHCR, the UN Refugee Agency",
      title: "Event Coordinator",
    },
    {
      image: activityImage3,
      institute: "South Asian Institute of Policy and Governance",
      title: "Event Organizer",
    },
    {
      image: activityImage4,
      institute: "Yunan University of China",
      title: "Research Assistant",
    },
  ];

  return (
    <div className="mt-20">
      <div className="header text-center mb-5">
        <div className="main-title text-xl text-[#f5f5f5] font-bold capitalize">
          extra & co-curricular activities
        </div>
        <div className="line bg-[#333] w-[280px] h-[2px] mx-auto mt-1">
          <div className="bg-blue-500 w-[80px] h-[2px]"></div>
        </div>
      </div>
      <div className="content 2xl:w-3/4 xl:w-[90%] mx-auto lg:grid grid-cols-2 gap-5 mt-10">
        {activities.map((activity, index) => (
          <ProjectCard key={index} item={activity} />
        ))}
      </div>
    </div>
  );
};

export default Works;
