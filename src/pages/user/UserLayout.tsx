import { Outlet } from "react-router-dom";
import UserHeader from "./UserHeader";
import UserProfileScreen from "./UserProfileScreen";
import UserSlider from "./UserSlider";
import MobileSliderUser from "./MobileUserSLider";
const UserLayout = () => {
  return (
    <div className="w-[100%]  relative ">
      <UserHeader />
      <div className="flex  justify-between ">
        <div className="w-[17%] fixed left-0 z-50 ">
          <UserSlider />
        </div>
        <div className="w-[17%] fixed left-0 z-50 hidden small:flex mobile:flex mobilel:flex ">
          <MobileSliderUser />
        </div>
        <div className="absolute right-[0] w-[80%] mobile:w-[84%] mobilel:w-[84%] small:w-[84%]  ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
