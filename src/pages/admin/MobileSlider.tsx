import { CiSettings } from "react-icons/ci";
import { GiFullWoodBucketHandle } from "react-icons/gi";
import {
  AiOutlineDashboard,
  AiOutlineMessage,
  AiOutlineCalendar,
  AiOutlineDatabase,
  AiOutlineProfile,
  AiOutlineHistory,
} from "react-icons/ai";
import {
  CgLogOut,
  CgProfile,
  CgShoppingBag,
  CgProductHunt,
} from "react-icons/cg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../components/global/redux";

const MobileSliderAdmin = () => {
  const dispach = useDispatch();
  const adminID = useSelector((state: any) => state?.myAdmin);
  return (
    <div className="fixed left-0 ">
      <div className="w-[12vw] small:text-[15px] mobile:text-[15px] mobilel:text-[15px] h-[100vh] bg-black text-white flex items-center flex-col hover:cursor-pointer text-[20px] py-2">
        <Link to="/admin">
          <AiOutlineDashboard className="my-3" />
        </Link>
        <Link to="/admin/profiles">
          <AiOutlineProfile className="my-3" />
        </Link>
        <Link to="/admin/calender">
          <AiOutlineCalendar className="my-3" />
        </Link>
        <Link to="/admin/database">
          <AiOutlineDatabase className="my-3" />
        </Link>
        <Link to="/admin/shop">
          <CgShoppingBag className="my-3" />
        </Link>
        <Link to="/product">
          <CgProductHunt className="my-3" />
        </Link>
        <AiOutlineMessage className="mt-3" />
        <Link to="/admin/orders">
          <GiFullWoodBucketHandle className="my-3" />
        </Link>
        <Link to="/admin/histroys">
          <AiOutlineHistory className="my-3" />
        </Link>
        <Link to={`/${adminID}/user-sign-up`}>
          <CgProfile className="my-3" />
        </Link>
        <CiSettings className="my-3" />
        <CgLogOut
          className="my-3"
          onClick={() => {
            dispach(logOutUser());
          }}
        />
      </div>
    </div>
  );
};

export default MobileSliderAdmin;
