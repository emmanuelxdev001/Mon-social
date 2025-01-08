import {
  AiOutlineDashboard,
  AiOutlineMessage,
  AiOutlineCalendar,
  AiOutlineRadiusSetting,
  AiOutlineProfile,
  AiOutlineStock,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOutUser } from "../../components/global/redux";
const UserSlider = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <div className="w-[200px] mobile:hidden mobilel:hidden small:hidden small:w-[50%] h-[100vh] bg-orange-500 rounded-[10px] overflow-hidden flex justify-center mobile:w-[50%]  ">
        <div className="w-[90%]  ">
          <div className="mt-[30px] ">
            <Link to="/user">
              <div className="w-[100%] h-[50px] flex items-center gap-[10px] text-[15px] text-[silver] p-2 hover:text-[#18fb18a9] transition-all hover:cursor-pointer hover:rounded-[10px] hover:bg-[#d8d7d7] ">
                <AiOutlineDashboard />
                <div>DashBoard</div>
              </div>
            </Link>
            <Link to="/user/profile-screen">
              <div className="w-[100%] h-[50px] flex items-center gap-[10px] text-[15px] text-[silver] p-2 hover:text-[#18fb18a9] transition-all hover:cursor-pointer hover:rounded-[10px] hover:bg-[#d8d7d7] relative mt-[20px] ">
                <AiOutlineProfile />
                <div>Profile</div>
                <div className="flex items-center justify-center rounded-full bg-red-500 text-white text-[11px] w-[25px] h-[25px] absolute top-1 right-2 animate-ping ">
                  0
                </div>
              </div>
            </Link>

            <Link to="/user/calender">
              <div className="w-[100%] h-[50px] flex items-center gap-[10px] text-[15px] text-[silver] p-2 hover:text-[#18fb18a9] transition-all hover:cursor-pointer hover:rounded-[10px] hover:bg-[#d8d7d7] mt-[20px] ">
                <AiOutlineCalendar />
                <div>Calender</div>
              </div>
            </Link>

            <Link to="/user/store">
              <div className="w-[100%] h-[50px] flex items-center gap-[10px] text-[15px] text-[silver] p-2 hover:text-[#18fb18a9] transition-all hover:cursor-pointer hover:rounded-[10px] hover:bg-[#d8d7d7] mt-[20px] tablet:hidden  ">
                <AiOutlineProfile />
                <div>myStore</div>
              </div>
            </Link>
            <Link to="/user/order">
              <div className="w-[100%] h-[50px] flex items-center gap-[10px] text-[15px] text-[silver] p-2 hover:text-[#18fb18a9] transition-all hover:cursor-pointer hover:rounded-[10px] hover:bg-[#d8d7d7] mt-[20px] tablet:hidden  ">
                <AiOutlineProfile />
                <div>Orders</div>
              </div>
            </Link>

            {/* <Link to="/User/histroy">
              <div className="w-[100%] h-[50px] flex items-center gap-[10px] text-[15px] text-[silver] p-2 hover:text-[#18fb18a9] transition-all hover:cursor-pointer hover:rounded-[10px] hover:bg-[#d8d7d7] mt-[20px] ">
                <AiOutlineRadiusSetting />
                <div>Histroy</div>
              </div>
            </Link> */}
            <Link to="/product">
              <div className="w-[100%] h-[50px] flex items-center gap-[10px] text-[15px] text-[silver] p-2 hover:text-[#18fb18a9] transition-all hover:cursor-pointer hover:rounded-[10px] hover:bg-[#d8d7d7] mt-[20px] ">
                <AiOutlineRadiusSetting />
                <div>Products</div>
              </div>
            </Link>
            {/* <Link to="/user/histroy"> */}
            <div className="w-[100%] h-[50px] flex items-center gap-[10px] text-[15px] text-[silver] p-2 hover:text-[#18fb18a9] transition-all hover:cursor-pointer hover:rounded-[10px] hover:bg-[#d8d7d7] mt-[20px] ">
              <AiOutlineRadiusSetting />
              <div>Setting</div>
            </div>
            {/* </Link> */}
            <div
              className="w-[100%] h-[50px] flex items-center gap-[10px] text-[15px] text-[silver] p-2 hover:text-[#18fb18a9] transition-all hover:cursor-pointer hover:rounded-[10px] hover:bg-[#d8d7d7] mt-[20px] "
              onClick={() => {
                dispatch(logOutUser());
                navigate("/");
              }}
            >
              <AiOutlineRadiusSetting />
              <div>Logout</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSlider;
