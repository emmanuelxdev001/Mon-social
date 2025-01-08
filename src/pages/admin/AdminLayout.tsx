import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminSlider from "./AdminSlider";
import MobileSliderAdmin from "./MobileSlider";

const AdminLayout = () => {
  return (
    <div className="w-[100%]  relative ">
      <AdminHeader />
      <div className="flex  justify-between ">
        <div className="w-[20%] fixed left-0 z-50 small:hidden mobile:hidden mobilel:hidden">
          <AdminSlider />
        </div>
        <div className="hidden fixed left-0 z-50 small:flex mobile:flex mobilel:flex  w-[10vw] ">
          <MobileSliderAdmin />
        </div>
        <div className="absolute right-0 w-[80%] mobile:w-[84%] mobilel:w-[84%] small:w-[84%]   ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
