import { Outlet } from "react-router-dom";
import BuyerHeader from "./BuyerHeader";
import BuyerSlider from "./BuyerSlider";
import MobileSliderBuyer from "./MobileSliderBuyer";

const UserLayout = () => {
  return (
    <div className="w-[100%]  relative ">
      <BuyerHeader />
      <div className="flex gap-[20px]  ">
        <div className="w-[20%] fixed left-0 z-50 ">
          <BuyerSlider />
        </div>
        <div className="w-[20%] hidden small: mobile:flex mobilel:flex  fixed left-0 z-50 ">
          <MobileSliderBuyer />
        </div>
        <div className="absolute right-0 w-[80%] mobile:w-[84%] mobilel:w-[84%] small:w-[84%]   ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
