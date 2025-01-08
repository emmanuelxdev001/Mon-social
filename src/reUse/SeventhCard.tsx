import { Link } from "react-router-dom";
import logo from "../assets/bmlogo.jpg";

const SeventhCard = () => {
  return (
    <div className="w-[100%] h-[400px] small:h-[500px] mobile:h-[500px] mobilel:h-[500px] flex justify-center ">
      <div className="w-[90%] flex justify-center items-center small:flex-col mobile:flex-col mobilel:flex-col ">
        {/* left */}
        <div className="w-[50%] h-[100%] small:w-[100%] mobile:w-[100%] mobilel:w-[100%] small:h-[200px] mobile:h-[200px] mobilel:h-[200px] ">
          <img
            className="w-[100%] h-[100%] object-cover "
            src={logo}
            alt={logo}
          />
        </div>
        {/* end left */}
        {/*  right */}
        <center className="w-[50%] mt-[60px] h-[100%] small:mt-[0px] mobile:mt-[0px] mobilel:mt-[0px] small:w-[100%] mobile:w-[100%] mobilel:w-[100%] small:h-[300px] mobile:h-[300px] mobilel:h-[300px] p-1 ">
          <div className="font-bold text-[20px] small:text-[13px] mobile:text-[13px] mobilel:text-[13px] ">
            We Offer You The Best Quality Services
          </div>
          <div className="w-[100%] text-[13px] font-medium mt-[20px] small:text-[12px] mobilel:text-[12px] mobile:text-[12px] text-[#a7a6a6]  ">
            Experience the best of the best with us! We're committed to
            delivering top-notch quality that exceeds your expectations. Our
            dedication to excellence ensures that you receive only the finest
            products and services, tailored to meet your unique needs. Trust us
            to provide you with the exceptional quality you deserve, every time
          </div>
          <div className="mt-[50px] small:mt-[10px] ">
            <div className="flex items-center  justify-center ">
              <input className="cursor-pointer" type="checkbox" aria-checked />
              <div className="text-[13px] mt-2 small:text-[11px] mobile:text-[11px] mobilel:text-[11px] ">
                Start shopping smarter at Boundary Market - where affordability
                meets opportunity
              </div>
            </div>
            <div className="flex items-center  justify-center ">
              <input className="cursor-pointer" type="checkbox" aria-checked />
              <div className="text-[13px] mt-2 small:text-[11px] mobile:text-[11px] mobilel:text-[11px] ">
                Buy, sell, and connect at Boundary Market - your gateway to
                limitless commerce
              </div>
            </div>
            <div className="flex items-center  justify-center ">
              <input className="cursor-pointer" type="checkbox" aria-checked />
              <div className="text-[13px] mt-2 small:text-[11px] mobile:text-[11px] mobilel:text-[11px] ">
                Experience the future of ecommerce at Boundary Market - where
                everyone can thrive
              </div>
            </div>
          </div>
        </center>
        {/* end right */}
      </div>
    </div>
  );
};

export default SeventhCard;
