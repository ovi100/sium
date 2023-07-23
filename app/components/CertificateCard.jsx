import Image from "next/image";
import Link from "next/link";

const CertificateCard = ({ item }) => {
  const { image, year, institute, title, link } = item;
  return (
    <div
      className="certificate flex items-center gap-5 border-2 border-[#444] rounded-md mb-4 translate-y-0 
    transition duration-300 ease-linear hover:shadow-[0_12px_17px_rgba(0,0,0,.12)] hover:cursor-pointer hover:-translate-y-2"
    >
      <div className="image bg-[#444] h-32 md:flex hidden items-center justify-center p-8">
        <Link href={link} target="_blank">
          <Image className="w-14 h-auto" src={image} alt="icon" />
        </Link>
      </div>
      <div className="text flex-1 p-5">
        <div className="title text-base lg:text-sm text-[#f5f5f5]">{title}</div>
        <div className="institute text-xs text-[#777] capitalize my-2">
          {institute}
        </div>
        <div className="year text-xs text-[#777]">{year}</div>
        <div className="details text-xs text-[#777] text-right">
          <Link href={link} target="_blank">
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
