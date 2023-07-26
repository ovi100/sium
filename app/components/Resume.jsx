import ResumeCard from "./ResumeCard";

const Resume = () => {
  const educations = [
    {
      year: "2018 - 2022",
      institute: "North South University",
      title: "BBA, Finance",
    },
    {
      year: "2015 - 2017",
      institute: "Notre Dame College",
      title: "HSC (Business Studies)",
    },
    {
      year: "2009 - 2015",
      institute: "N.K.M High School and Homes",
      title: "SSC (Business Studies)",
    },
  ];

  const experiences = [
    {
      year: "Jan 2023 - Present",
      institute: "ACI Logistics Ltd.",
      title: "Business Analyst",
    },
    {
      year: "Oct 2022 - Dec 2022",
      institute: "ACI Logistics Ltd.",
      title: "Internship Trainee",
    },
    {
      year: "Sep 2021 - Dec 2022",
      institute: "ICMA NSU",
      title: "ICMA NSU Student Chapter",
    },
    {
      year: "Jun 2022 - Sep 2022",
      institute: "LOOX",
      title: "Digital Marketing Executive",
    },
    {
      year: "Jun 2021 - May 2022",
      institute: "Jadroo",
      title: "Executive, CS",
    },
  ];

  return (
    <div className="mt-20">
      <div className="title text-white text-5xl text-center capitalize p-5">
        resume
      </div>
      <div className="content 2xl:w-3/4 xl:w-[90%] w-[95%] mx-auto lg:flex justify-center xl:gap-14 lg:gap-7 mt-10">
        <div className="experience mt-10 lg:mt-0">
          <div className="header mb-10">
            <div className="main-title text-xl text-[#f5f5f5] font-bold capitalize">
              experience
            </div>
            <div className="line bg-[#333] w-[100px] h-[2px] mt-1">
              <div className="bg-blue-500 w-[30px] h-[2px]"></div>
            </div>
          </div>
          {experiences.map((experience, index) => (
            <ResumeCard key={index} item={experience} isExperience={true} />
          ))}
        </div>
        <div className="education md:mb-0 mb-5">
          <div className="header mb-10">
            <div className="main-title text-xl text-[#f5f5f5] font-bold capitalize">
              education
            </div>
            <div className="line bg-[#333] w-[90px] h-[2px] mt-1">
              <div className="bg-blue-500 w-[30px] h-[2px]"></div>
            </div>
          </div>
          {educations.map((education, index) => (
            <ResumeCard key={index} item={education} isExperience={false} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
