import { certificate } from "@/public/assets/images";
import CertificateCard from "./CertificateCard";

const Certificates = () => {
  const certificates = [
    {
      image: certificate,
      year: "July 2020",
      institute: "coursera.org",
      title: "Initiating and Planning Projects",
      link: "https://www.coursera.org/account/accomplishments/verify/GUAPF7JGZYTR",
    },
    {
      image: certificate,
      year: "June 2020",
      institute: "coursera.org",
      title: "Excel Skills for Business: Essentials",
      link: "https://www.coursera.org/account/accomplishments/verify/G2TVCX37VWKT",
    },
    {
      image: certificate,
      year: "July 2019",
      institute: "Google Digital Garage",
      title: "The Fundamental of Digital Marketing",
      link: "https://learndigital.withgoogle.com/digitalgarage/course/digital-marketing",
    },
    {
      image: certificate,
      year: "March 2016",
      institute: "NOTREDAME ENGLISH CLUB",
      title: "INTRA COLLEGE ENGLISH CARNIVAL",
      link: "/",
    },
  ];

  return (
    <div className="mt-20">
      <div className="header text-center mb-5">
        <div className="main-title text-xl text-[#f5f5f5] font-bold capitalize">
          certificates
        </div>
        <div className="line bg-[#333] w-[100px] h-[2px] mx-auto mt-1">
          <div className="bg-blue-500 w-[30px] h-[2px]"></div>
        </div>
      </div>
      <div className="content 2xl:w-3/4 xl:w-[90%] mx-auto lg:grid grid-cols-2 gap-5 mt-10">
        {certificates.map((certificate, index) => (
          <CertificateCard key={index} item={certificate} />
        ))}
      </div>
    </div>
  );
};

export default Certificates;
