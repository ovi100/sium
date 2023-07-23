import { arrow } from "@/public/assets/images";
import SkillBox from "./SkillBox";

const Skills = () => {
  const skills = {
    proficiencies: [
      { name: "Power BI", percentage: "90%", width: "w-[90%]" },
      { name: "Python", percentage: "90%", width: "w-[90%]" },
      { name: "Excel", percentage: "90%", width: "w-[90%]" },
      { name: "PowerPoint", percentage: "95%", width: "w-[95%]" },
      { name: "Word", percentage: "80%", width: "w-[80%]" },
    ],
    educational: [
      { name: "Accounting", percentage: "85%", width: "w-[85%]" },
      { name: "Research", percentage: "85%", width: "w-[85%]" },
      { name: "Business Analysis", percentage: "90%", width: "w-[90%]" },
      { name: "Leadership", percentage: "75%", width: "w-[75%]" },
    ],
    others: [
      { name: "Customer Service", percentage: "85%", width: "w-[85%]" },
      { name: "Digital Marketing", percentage: "85%", width: "w-[85%]" },
      { name: "Business Analysis", percentage: "90%", width: "w-[90%]" },
      { name: "Project Management", percentage: "80%", width: "w-[80%]" },
    ],
  };

  const { proficiencies, educational, others } = skills;

  return (
    <div className="mt-20">
      <div className="header text-center mb-5">
        <div className="main-title text-xl text-[#f5f5f5] font-bold capitalize">
          skills
        </div>
        <div className="line bg-[#333] w-[60px] h-[2px] mx-auto mt-1">
          <div className="bg-blue-500 w-[30px] h-[2px]"></div>
        </div>
      </div>
      <div className="content 2xl:w-3/4 xl:w-[90%] mx-auto lg:grid grid-cols-3 gap-10 justify-center mt-10">
        <SkillBox icon={arrow} skills={proficiencies} />
        <SkillBox icon={arrow} skills={educational} />
        <SkillBox icon={arrow} skills={others} />
      </div>
    </div>
  );
};

export default Skills;
