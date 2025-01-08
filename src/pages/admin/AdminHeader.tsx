import {
  AiOutlineBell,
  AiOutlineArrowDown,
  AiOutlineMenu,
} from "react-icons/ai";
import { useSelector } from "react-redux";
// import { oneAdminHooks } from "../../hook/AdminHook"

const AdminHeader = () => {
  // const {data} = oneAdminHooks();
  const data = useSelector((state: any) => state?.myAdmin);
  return (
    <div className="w-[100%] h-[70px] flex justify-center  ">
      <div className="w-[90%] flex justify-between items-center ">
        <div className="hidden mobile:flex mobilel:flex small:flex items-center  ">
          <div className="text-[25px] font-bold text-[#456104]  small:text-[12px] hover:cursor-pointer mobile:text-[12px] mobilel:text-[12px] mobile:hidden small:hidden mobilel:hidden ">
            BoundaryMarket
          </div>
          <div className="">
            <AiOutlineMenu className="hover:cursor-pointer text-[#456104] " />
          </div>
        </div>
        <div className="text-[25px] font-bold text-[#456104]  small:text-[12px] hover:cursor-pointer mobile:text-[12px] mobilel:text-[12px] ">
          BoundaryMarket
        </div>
        <div className="w-[300px] h-[40px] border-[2px] rounded-[5px] border-[#456104] mobile:hidden small:hidden mobilel:hidden  ">
          <input
            className=" w-[100%] h-[100%] outline-none border-none p-2 placeholder:text-[13px]  "
            placeholder="Search"
            type="search"
          />
        </div>
        <div className=" flex gap-5 small:flex mobile:flex  ">
          <div className="relative hidden small:flex mobile:flex  mobilel:flex animate-bounce ">
            <AiOutlineBell className="hover:cursor-pointer small:mr-5 mobile:mr-5 mobilel:mr-5 " />
            <div className="flex items-center justify-center rounded-full bg-orange-500 text-white text-[10px] w-[15px] h-[15px] absolute top-0 left-2 hover:cursor-pointer hover:animate-spin ">
              0
            </div>
            <div className="small:flex mobile:flex mobilel:flex ">
              <AiOutlineArrowDown className="hover:cursor-pointer text-[#456104] " />
            </div>
          </div>
          <div className=" hidden small:flex mobile:flex mobilel:hidden  ">
            <AiOutlineMenu />
          </div>
        </div>
        <div className="flex justify-center items-center gap-[20px] small:hidden mobile:hidden mobilel:hidden ">
          <div className="relative text-[#456104] ">
            <AiOutlineBell className="hover:cursor-pointer animate-bounce " />
            <div className="flex items-center justify-center rounded-full bg-orange-500 text-white text-[10px] w-[15px] h-[15px] absolute top-0 left-2 hover:cursor-pointer animate-bounce">
              0
            </div>
          </div>
          <div className="flex items-center gap-[5px] mobilel:hidden ">
            <div className="w-[30px] h-[30px] rounded-[50%] ">
              <img
                className="w-[100%] h-[100%] rounded-[50%]  hover:cursor-pointer hover:scale-[1.05] transition-all duration-700  "
                src="https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg"
                alt="ping"
              />
            </div>
            <div className="text-[12px] font-bold hover:cursor-pointer text-[#456104] ">
              {data?.name}
            </div>
          </div>
          <div className="mobilel:hidden">
            <AiOutlineArrowDown className="hover:cursor-pointer text-[#456104] " />
          </div>
          <div className=" hidden small:flex mobile:flex  mobilel:flex  ">
            <AiOutlineMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
