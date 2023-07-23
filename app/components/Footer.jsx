const Footer = () => {
  return (
    <div className="footer border-t-2 border-[#333] px-3 py-5">
      <div className="content text-[#d5d5d5] text-sm text-center md:flex items-center justify-between">
        <div className="link capitalize flex items-center md:justify-start justify-center gap-3">
          <a
            href="https://www.facebook.com/lovesercher.ashik?mibextid=ZbWKwL"
            target="_blank"
          >
            facebook
          </a>
          <a href="https://www.linkedin.com/in/sayed2017" target="_blank">
            linkedin
          </a>
        </div>
        <div className="copyright md:mt-0 mt-3">
          &copy; 2023 All rights reserved. Ashiqul Islam Sium.
        </div>
      </div>
    </div>
  );
};

export default Footer;
