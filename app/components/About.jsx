import { profileImage } from "@/public/assets/images";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import ReactTypingEffect from "react-typing-effect";

const About = () => {
  return (
    <div className="lg:flex items-center justify-center gap-10 mt-5 lg:mt-20">
      <motion.div
        className="image flex items-center justify-center 2xl:flex-[0.22_1_0%] xl:flex-[0.3_1_0%] lg:flex-[0.4_1_0%]"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          className="lg:w-full lg:h-auto mx-auto"
          src={profileImage}
          alt="profile picture"
        />
      </motion.div>
      <motion.div
        className="text text-white 2xl:flex-[0.4_1_0%] xl:flex-[0.5_1_0%] lg:flex-[0.8_1_0%] text-center lg:text-left mt-5 lg:mt-0"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="title text-base text-[#aaa] capitalize mb-2">
          <ReactTypingEffect
            text={["business analyst"]}
            eraseDelay={1000}
            typingDelay={1000}
          />
        </div>
        <div className="name text-5xl text-[#f5f5f5] capitalize mb-2">
          ashiqul islam sium
        </div>
        <div className="short-text text-sm text-[#d5d5d5] leading-6">
          Finding creative solutions to problems is something I have always
          enjoyed. As a kid I loved tinkering with things that were broken,
          figuring out how they worked and fixing them again. I am a highly
          motivated professional with a passion for finance and business
          analytics. Currently, I am thriving in my role as a Business Analyst
          at ACI Logistics, where I contribute my expertise in financial
          analysis, data interpretation, and strategic planning to drive the
          company's growth and success. I firmly believe that continuous
          learning and adaptability are key to success in today's ever-changing
          business landscape. As I continue to evolve and grow in my career, I
          am excited to embrace new challenges and make a positive difference
          wherever my path leads me.
        </div>
        <div className="social-link flex items-center gap-3 my-5 justify-center lg:justify-start">
          <a
            href="https://www.facebook.com/lovesercher.ashik?mibextid=ZbWKwL"
            target="_blank"
          >
            <FaFacebookSquare className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/ashiqul-islam-sium-466967177"
            target="_blank"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
        <div className="buttons flex items-center gap-5 mt-5 justify-center lg:justify-start">
          <a
            className="bg-[#333] border-2 border-blue-400 cursor-pointer rounded-3xl px-4 py-2 hover:bg-blue-400"
            href="https://drive.google.com/drive/folders/1weBCw82h2kiENRqR76B8se5N55geSg3V?usp=sharing"
            target="_blank"
          >
            Download CV
          </a>
          <Link
            className="bg-[#333] border-2 border-[#d5d5d5] capitalize cursor-pointer rounded-3xl px-6 py-2 hover:bg-[#d5d5d5]"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            contact
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
