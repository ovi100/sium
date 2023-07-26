import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Shakil Sarder",
      company: "Asst. Manager at Alpha Commerz Ltd.",
      text: "Ashiqul Islam Sium had worked at Jadroo E-commerce Ltd in my team. He knows how to attract new customers because he understands what they need. He can handle any sorts of problematic customer in a very easy way. He was one of the best dedicated employee in my team. I wish his bright future.",
    },
    {
      name: "Sangita Akter",
      company: "Simi Stove Private Ltd.",
      text: "Person with a package of good qualities such that hard-working, energetic and visionary leadership skills etc. He has the courageous capabilities of arranging any challenging tasks in the most possible ways. Best of luck for your endeavours.",
    },
    {
      name: "Mohammad Fazla Rabbi",
      company: "Jadroo E-commerce Ltd.",
      text: "Ashiqul Islam is amazing at his job and a quick learner at Jadroo E-Commerce Ltd. He knows how to capture a task and complete it without any second touch. I was amazed at his work when I gave him a huge task and he completed that within a moment, from then I can completely rely on him because of his productivity & performance. He knows his way around people, he is good with the customer and clients in Jadroo, does whatever it takes to help colleagues, and gets things done.",
    },
    {
      name: "AHSAN TAZ",
      company: "Alpha Commerz Ltd.",
      text: "Ashiqul Islam Sium worked at Jadroo eCommerce LTD under my supervision. What I observed about him, he is a great dedicated employee. He takes his tasks very seriously. Once any task/work had been deployed, he made it done with a great outcome. Thank you Sium for your support.",
    },
  ];

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="mt-20">
      <div className="header text-center mb-5">
        <div className="main-title text-xl text-[#f5f5f5] font-bold capitalize">
          testimonials
        </div>
        <div className="line bg-[#333] w-[110px] h-[2px] mx-auto mt-1">
          <div className="bg-blue-500 w-[50px] h-[2px]"></div>
        </div>
      </div>
      <div className="content 2xl:w-3/4 xl:w-[90%] mx-auto mt-10">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
