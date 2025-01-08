import {
  AiOutlineBell,
  AiOutlineArrowDown,
  AiOutlineMenu,
} from "react-icons/ai";
import { useSelector } from "react-redux";

const UserHeader = () => {
  const user = useSelector((state: any) => state?.myUser);

  return (
    <div className="w-[100%] h-[70px] flex justify-center  ">
      <div className="w-[90%] flex justify-between items-center ">
        <div className="hidden mobile:flex mobilel:flex small:flex items-center gap-[10px] ">
          <div className="mobile:flex mobilel:flex small:flex ">
            <AiOutlineArrowDown className="hover:cursor-pointer " />
          </div>
          <div className="text-[25px] font-bold  small:text-[13px] hover:cursor-pointer mobilel:text-[13px] mobile:text-[13px] ">
            BoundaryMarket
          </div>
        </div>
        <div className="text-[25px] font-bold  small:text-[13px] hover:cursor-pointer mobilel:text-[13px] mobile:text-[13px] small:hidden mobile:hidden mobilel:hidden ">
          BoundaryMarket
        </div>

        <div className="w-[300px] h-[40px] border-[2px] rounded-[5px] border-[black] small:hidden mobile:hidden mobilel:hidden  ">
          <input
            className=" w-[100%] h-[100%] outline-none border-none p-2 placeholder:text-[13px] "
            placeholder="Search"
            type="search"
          />
        </div>
        <div className=" flex gap-5 small:flex mobile:flex  ">
          <div className="relative hidden small:flex mobile:flex  animate-bounce ">
            <AiOutlineBell className="hover:cursor-pointer" />
            <div className="flex items-center justify-center rounded-full bg-red-500 text-white text-[10px] w-[15px] h-[15px] absolute top-0 left-2 hover:cursor-pointer hover:animate-spin ">
              0
            </div>
          </div>
          <div className=" hidden small:flex mobile:flex  mobilel:hidden ">
            <AiOutlineMenu />
          </div>
        </div>
        <div className="flex justify-center items-center gap-[20px] small:hidden mobile:hidden ">
          <div className="relative">
            <AiOutlineBell className="hover:cursor-pointer animate-bounce " />
            <div className="flex items-center justify-center rounded-full bg-red-500 text-white text-[10px] w-[15px] h-[15px] absolute top-0 left-2 hover:cursor-pointer animate-bounce ">
              0
            </div>
          </div>
          <div className="flex items-center gap-[5px] small:hidden mobile:hidden mobilel:hidden ">
            <div className="w-[30px] h-[30px] rounded-[50%] ">
              <img
                className="w-[100%] h-[100%] rounded-[50%]  hover:cursor-pointer hover:scale-[1.05] transition-all duration-700  "
                src={user?.image}
                alt="pinimg"
              />
            </div>
            <div className="text-[12px] font-bold hover:cursor-pointer ">
              {user?.name}
            </div>
          </div>
          <div className="mobile:hidden mobilel:hidden small:hidden ">
            <AiOutlineArrowDown className="hover:cursor-pointer " />
          </div>
          <div className=" hidden small:hidden mobile:hidden  mobilel:flex ">
            <AiOutlineMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
