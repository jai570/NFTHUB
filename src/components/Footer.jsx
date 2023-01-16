import timelessLogo from "../assets/timeless.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.25] justify-center items-center text-white font-bold">
        {/* <img src={timelessLogo} alt="logo" className="w-32" /> */}
        <p style={{ fontSize: "30px" }}>NFT HUB</p>
      </div>

      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          JaiKishan Sharma
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Harsh Singh
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Kapil Jetwani
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Harshit Aggarwal
        </p>
      </div>

      <div className="flex flex-[0.25] justify-center items-center">
        <p className="text-white text-right text-xs">
          &copy;2023 All rights reserved
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
