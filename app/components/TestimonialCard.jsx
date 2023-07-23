const TestimonialCard = ({ testimonial }) => {
  const { name, company, text } = testimonial;
  return (
    <div className="testimonial bg-[#101010] rounded p-4 mx-3">
      <div className="text text-[#919195] h-[168px] italic">{text}</div>
      <div className="author flex items-center gap-3 mt-5">
        <div className="w-5 h-0.5 bg-[#919195]"></div>
        <div className="name text-[#919195] text-xs">
          <p>
            {name}({company})
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
