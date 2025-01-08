import { Link } from "react-router-dom";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { MdTimer } from "react-icons/md";

const Welcome = () => {
  const data = [
    {
      title: "Affordable Goods and Services",
      text: "Good bye to financial stress, affordable options for a worry free life ",
      icons: <FaHandHoldingUsd />,
    },
    {
      title: "Competitive advantage ",
      text: "Stand out from competitors by offering a unique online shopping experience",
      icons: <FaHandsHelping />,
    },
    {
      title: "24/7 Availability",
      text: "Customers can browse and purchase products or services at any time, increasing sales opportunities",
      icons: <MdTimer />,
    },
  ];
  return (
    <div className=" w-[100%] h-[420px] flex justify-center ">
      <div className="w-[90%] ">
        {/* rignt */}
        <center>
          <div className="capitalize font-bold text-[20px] small:text-[15px] mobile:text-[15px] mobilel:text-[15px] ">
            Welcome to Boundary Market{" "}
          </div>
          <div className="mt-[20px] text-[15px] small:text-[12px] mobile:text-[12px] mobilel:text-[12px] ">
            Your premier online destination for affordable buying and selling.
            Connect with a vibrant community of shoppers and sellers, and
            discover a world of possibilities. Buy with confidence, sell with
            ease, and experience the thrill of boundary-less commerce. Explore,
            shop, and thrive with us!
          </div>
          {data?.map((props?: any) => (
            <div className="mt-[10px] ">
              {/* one */}
              <div className="text-[40px] small:text-[17px] mobile:text-[17px] mobilel:text-[17px] text-[#456104] ">
                {props?.icons}
              </div>
              {/*end one */}
              {/* two */}
              <div className="text-[15px] font-semibold small:text-[13px] mobile:text-[13px] mobilel:text-[13px] ">
                {props?.title}
              </div>
              {/*end two */}
              {/* three */}
              <div className="text-[14px] small:text-[12px] mobile:text-[12px] mobilel:text-[12px] ">
                {props?.text}
              </div>
              {/*end three */}
            </div>
          ))}
        </center>
        {/* rignt */}
      </div>
    </div>
  );
};

export default Welcome;
