import {
  AiOutlineDashboard,
  AiOutlineMessage,
  AiOutlineCalendar,
  AiOutlineDatabase,
  AiOutlineRadiusSetting,
  AiOutlineProfile,
} from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOutUser } from "../../components/global/redux";
const AdminSlider = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutUser());
    navigate("/");
  };

  return (
    <div>
      <div className="w-[200px] mobile:hidden mobilel:hidden small:flex small:w-[50%] h-[100vh] bg-orange-500 rounded-[10px] overflow-hidden flex justify-center mobile:w-[50%]  ">
        <div className="w-[90%]   ">
          <div className="mt-[30px] ">
            <div className="w-[100%] h-[50px] flex items-center gap-[10px] text-[15px] text-[silver] p-2 hover:text-[#456104] transition-all hover:cursor-pointer hover:rounded-[10px] hover:bg-[#d8d7d7] ">
              <AiOutlineDashboard />
              <Link to="/admin">
                <div>DashBoard</div>
              </Link>
            </div>
            <div className="w-[100%] h-[30px] flex items-center gap-[10px] text-[15px] text-[silver] p-2 hover:text-[#456104] transition-all hover:cursor-pointer hover:rounded-[10px] hover:bg-[#d8d7d7] relative mt-[20px] ">
              <AiOutlineMessage />
              <div>Messenger</div>
              <div className="flex items-center justify-center rounded-full bg-red-500 text-white text-[11px] w-[25px] h-[25px] absolute top-1 right-2 animate-ping ">
                0
              </div>
            </div>

            <Link to="/admin/calender">
              <div className="w-[100%] h-[30px] flex items-center gap-[10px] text-[15px] text-[silver] p-2 hover:text-[#456104] transition-all hover:cursor-pointer hover:rounded-[10px] hover:bg-[#d8d7d7] mt-[20px] ">
                <AiOutlineCalendar />
                <div>Calender</div>
              </div>
            </Link>
            <Link to="/admin/database">
              <div className="w-[100%] h-[30px] flex items-center gap-[10px] text-[15px] text-[silver] p-2 hover:text-[#456104] transition-all hover:cursor-pointer hover:rounded-[10px] hover:bg-[#d8d7d7] mt-[20px] ">
                <AiOutlineDatabase />
                <div>DataBase</div>
              </div>
            </Link>
            <Link to="/admin/orders">
              <div className="w-[100%] h-[30px] flex items-center gap-[10px] text-[15px] text-[silver] p-2 hover:text-[#456104] transition-all hover:cursor-pointer hover:rounded-[10px] hover:bg-[#d8d7d7] mt-[20px] tablet:hidden  ">
                <AiOutlineProfile />
                <div>Orders</div>
              </div>
            </Link>

            <Link to="/admin/histroys">
              <div className="w-[100%] h-[30px] flex items-center gap-[10px] text-[15px] text-[silver] p-2 hover:text-[#456104] transition-all hover:cursor-pointer hover:rounded-[10px] hover:bg-[#d8d7d7] mt-[20px] ">
                <AiOutlineRadiusSetting />
                <div>Histroy</div>
              </div>
            </Link>
            <Link to="/user-sign-up">
              <div className="w-[100%] h-[30px] flex items-center gap-[10px] text-[15px] text-[silver] p-2 hover:text-[#456104] transition-all hover:cursor-pointer hover:rounded-[10px] hover:bg-[#d8d7d7] mt-[20px] ">
                <CgProfile />
                <div>createUsers</div>
              </div>
            </Link>
            <Link to="/product">
              <div className="w-[100%] h-[30px] flex items-center gap-[10px] text-[15px] text-[silver] p-2 hover:text-[#456104] transition-all hover:cursor-pointer hover:rounded-[10px] hover:bg-[#d8d7d7] mt-[20px] ">
                <AiOutlineRadiusSetting />
                <div>Products</div>
              </div>
            </Link>
            <div className="w-[100%] h-[30px] flex items-center gap-[10px] text-[15px] text-[silver] p-2 hover:text-[#456104] transition-all hover:cursor-pointer hover:rounded-[10px] hover:bg-[#d8d7d7] mt-[20px] ">
              <AiOutlineRadiusSetting />
              <div>Settings</div>
            </div>
            <div
              className="w-[100%] h-[30px] flex items-center gap-[10px] text-[15px] text-[silver] p-2 hover:text-[#456104] transition-all hover:cursor-pointer hover:rounded-[10px] hover:bg-[#d8d7d7] mt-[20px] "
              onClick={handleLogOut}
            >
              <CiLogout />
              <div>LogOut</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSlider;
