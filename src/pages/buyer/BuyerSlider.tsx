import {
  AiOutlineDashboard,
  AiOutlineMessage,
  AiOutlineCalendar,
  AiOutlineRadiusSetting,
  AiOutlineProfile,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOutUser } from "../../components/global/redux";

const BuyerSlider = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const buyerID = useSelector((state:any)=>state?.myBuyer);

  const onHandleLogOut = () => {
    dispatch(logOutUser());
    navigate("/");
  };

  return (
    <div>
      <div className="w-[200px] mobile:hidden mobilel:hidden  small:hidden small:w-[50%] h-[100vh] bg-orange-500 rounded-[10px] overflow-hidden flex justify-center mobile:w-[50%]  ">
        <div className="w-[90%]  ">
          <div className="mt-[30px] ">
            <Link to="/buyer">
              <div className="w-[100%] h-[50px] flex items-center gap-[10px] text-[15px] text-[silver] p-2 hover:text-[#18fb18a9] transition-all hover:cursor-pointer hover:rounded-[10px] hover:bg-[#d8d7d7] ">
                <AiOutlineDashboard />
                <div>DashBoard</div>
              </div>
            </Link>

            <Link to="/buyer/profile">
              <div className="w-[100%] h-[50px] flex items-center gap-[10px] text-[15px] text-[silver] p-2 hover:text-[#18fb18a9] transition-all hover:cursor-pointer hover:rounded-[10px] hover:bg-[#d8d7d7] relative mt-[20px] ">
                <AiOutlineProfile />
                <div>Update Profile</div>
              </div>
            </Link>

            <Link to="/buyer/message">
              <div className="w-[100%] h-[50px] flex items-center gap-[10px] text-[15px] text-[silver] p-2 hover:text-[#18fb18a9] transition-all hover:cursor-pointer hover:rounded-[10px] hover:bg-[#d8d7d7] relative mt-[20px] ">
                <AiOutlineMessage />
                <div>Messenger</div>
                <div className="flex items-center justify-center rounded-full  text-white text-[11px] w-[25px] h-[25px] absolute top-1 right-2 animate-ping bg-red-500 ">
                  0
                </div>
              </div>
            </Link>

            <Link to="/buyer/calender">
              <div className="w-[100%] h-[50px] flex items-center gap-[10px] text-[15px] text-[silver] p-2 hover:text-[#18fb18a9] transition-all hover:cursor-pointer hover:rounded-[10px] hover:bg-[#d8d7d7] mt-[20px] ">
                <AiOutlineCalendar />
                <div>Calender</div>
              </div>
            </Link>

            <Link to="/buyer/histroy">
              <div className="w-[100%] h-[50px] flex items-center gap-[10px] text-[15px] text-[silver] p-2 hover:text-[#18fb18a9] transition-all hover:cursor-pointer hover:rounded-[10px] hover:bg-[#d8d7d7] mt-[20px] ">
                <AiOutlineRadiusSetting />
                <div>Histroy</div>
              </div>
            </Link>
            <Link to="/store">
              <div className="w-[100%] h-[50px] flex items-center gap-[10px] text-[15px] text-[silver] p-2 hover:text-[#18fb18a9] transition-all hover:cursor-pointer hover:rounded-[10px] hover:bg-[#d8d7d7] mt-[20px] ">
                <AiOutlineRadiusSetting />
                <div>Stores</div>
              </div>
            </Link>
            <Link to="">
              <div className="w-[100%] h-[50px] flex items-center gap-[10px] text-[15px] text-[silver] p-2 hover:text-[#18fb18a9] transition-all hover:cursor-pointer hover:rounded-[10px] hover:bg-[#d8d7d7] mt-[20px] ">
                <AiOutlineRadiusSetting />
                <div>settings</div>
              </div>
            </Link>
            <div className="w-[100%] h-[50px] flex items-center gap-[10px] text-[15px] text-[silver] p-2 hover:text-[#18fb18a9] transition-all hover:cursor-pointer hover:rounded-[10px] hover:bg-[#d8d7d7] mt-[20px] ">
              <AiOutlineRadiusSetting />
              <div onClick={onHandleLogOut}>Logout</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerSlider;
