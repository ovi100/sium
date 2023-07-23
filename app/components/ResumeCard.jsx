const ResumeCard = ({ item, isExperience }) => {
  const { year, institute, title } = item;
  return (
    <div className="resume-box relative text-white border-l border-[#333] p-5">
      <div className="md:flex items-center gap-5">
        <div className="dot-year flex items-center gap-4 md:absolute md:-left-3 relative -left-8 md:mb-0 mb-5">
          <div className="dot w-6 h-6 bg-[#222] border border-[#333] rounded-full"></div>
          <div className="year w-auto bg-[#000] rounded-3xl text-center text-sm px-6 py-2">
            {year}
          </div>
        </div>

        <div
          className={`institute-title text-base text-[#f5f5f5] font-bold capitalize ml-0 ${
            isExperience ? "md:ml-64" : "md:ml-52"
          } `}
        >
          <div className="institute text-white text-base capitalize mb-2">
            {institute}
          </div>
          <div className="title text-[#bbb] text-sm">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
