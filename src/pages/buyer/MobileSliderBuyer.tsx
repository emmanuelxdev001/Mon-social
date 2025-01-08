import { CiSettings } from "react-icons/ci";
import {
  AiOutlineDashboard,
  AiOutlineMessage,
  AiOutlineCalendar,
  AiOutlineProfile,
  AiOutlineHistory,
} from "react-icons/ai";
import { CgLogOut, CgProductHunt } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../components/global/redux";

const MobileSliderBuyer = () => {
  const dispach = useDispatch();
  return (
    <div className="fixed left-0 ">
      <div className="w-[12vw] small:text-[15px] mobile:text-[15px] mobilel:text-[15px] h-[100vh] bg-black text-white flex items-center flex-col hover:cursor-pointer text-[20px] py-2">
        <Link to="/buyer">
          <AiOutlineDashboard className="my-3" />
        </Link>

        <Link to="/buyer/calender">
          <AiOutlineCalendar className="my-5" />
        </Link>
        <Link to="/product">
          <CgProductHunt className="my-5" />
        </Link>
        <AiOutlineMessage className="mt-5" />
        <Link to="/buyer/histroy">
          <AiOutlineHistory className="my-5" />
        </Link>
        <Link to="/buyer/profile">
          <AiOutlineProfile className="my-5" />
        </Link>
        <CiSettings className="my-5" />
        <CgLogOut
          className="my-5"
          onClick={() => {
            dispach(logOutUser());
          }}
        />
      </div>
    </div>
  );
};

export default MobileSliderBuyer;
