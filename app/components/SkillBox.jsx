import Image from "next/image";

const SkillBox = ({ icon, title, skills }) => {
  return (
    <>
      <div className="skill-box">
        {skills.map((skill, index) => (
          <div className="lists flex items-center gap-3 mb-3" key={index}>
            <div className="icon">
              <Image className="w-2.5 h-2.5" src={icon} alt="arrow" />
            </div>
            <div className="name text-[#bbb] text-[13px]">{skill.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SkillBox;
