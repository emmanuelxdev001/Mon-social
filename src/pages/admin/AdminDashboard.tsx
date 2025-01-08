import { FaNairaSign, FaPeopleGroup } from "react-icons/fa6";
import { GiExpense } from "react-icons/gi";
import { FaBorderNone } from "react-icons/fa";
import { CiBag1 } from "react-icons/ci";
import { MdPerson } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const user = useSelector((state: any) => state?.user);

  return (
    <div className="w-[100%] h-[100%]   ">
      <div className="w-[100%] h-[100%] flex justify-center ">
        <div className="w-[90%] small:w-[95%] mobilel:w-[95%] mobile:w-[95%] ">
          <div className="text-[25px] text-[#456104] font-bold mt-[20px] mobile:text-[15px] ">
            {" "}
            Dashboard{" "}
          </div>
          {/* card */}
          <div className="w-[100%] mt-[40px] flex gap-[30px] small:gap-[20px] mobile:gap-[35px] flex-wrap  ">
            {/* first */}

            <div className="w-[15%] h-[100px] flex justify-center flex-col items-center bg-[#f9f0f0] rounded hover:cursor-pointer hover:duration-700 hover:transition-all hover:scale-[1.05] small:w-[80px]  mobile:w-[80px] mobilel:w-[100px]   ">
              <div className="text-[#456104] font-bold text-[17px] small:text-[12px] mobile:text-[13px] mobilel:text-[13px] tablet:text-[13px] ">
                <FaPeopleGroup />
              </div>

              <div className="text-[15px] font-semibold mt-[10px] text-[#456104] small:text-[10px] mobile:text-[10px] small:mt-[5px] mobile:mt-[5px] mobilel:mt-[5px] mobilel:text-[11px] tablet:text-[12px] tablet:mt-[5px] ">
                <Link to="/admin/profiles">my Profile</Link>
              </div>
              <div className="text-[15px] font-bold mt-[10px] small:text-[10px] mobile:text-[10px] mobilel:text-[11px] tablet:text-[11px]  "></div>
            </div>

            {/* second */}

            <div className="w-[15%] h-[100px] flex justify-center flex-col items-center bg-[#f9f0f0] rounded hover:cursor-pointer hover:duration-700 hover:transition-all hover:scale-[1.05] small:w-[80px]  mobile:w-[80px] mobilel:w-[100px]   ">
              <div className="text-[#456104] font-bold text-[17px] small:text-[12px] mobile:text-[13px] mobilel:text-[13px] tablet:text-[13px] ">
                <MdPerson />
              </div>

              <div className="text-[15px] font-semibold mt-[10px] text-[#456104] small:text-[10px] mobile:text-[10px] small:mt-[5px] mobile:mt-[5px] mobilel:mt-[5px] mobilel:text-[11px] tablet:text-[12px] tablet:mt-[5px] ">
                Total Users
              </div>
              <div className="text-[15px] font-bold mt-[10px] small:text-[10px] mobile:text-[10px] mobilel:text-[11px] tablet:text-[11px]  ">
                {user?.length}
              </div>
            </div>

            {/* third */}

            <div className="w-[15%] h-[100px] flex justify-center flex-col items-center bg-[#f9f0f0] rounded hover:cursor-pointer hover:duration-700 hover:transition-all hover:scale-[1.05] small:w-[80px]  mobile:w-[80px] mobilel:w-[100px]   ">
              <div className="text-[#456104] font-bold text-[17px] small:text-[12px] mobile:text-[13px] mobilel:text-[13px] tablet:text-[13px] ">
                <MdPerson />
              </div>

              <div className="text-[15px] font-semibold mt-[10px] text-[#456104] small:text-[10px] mobile:text-[10px] small:mt-[5px] mobile:mt-[5px] mobilel:mt-[5px] mobilel:text-[11px] tablet:text-[12px] tablet:mt-[5px] ">
                <Link to="/admin/profile">update profile</Link>
              </div>
              <div className="text-[15px] font-bold mt-[10px] small:text-[10px] mobile:text-[10px] mobilel:text-[11px] tablet:text-[11px]  "></div>
            </div>
            {/* fourth */}

            <div className="w-[15%] h-[100px] flex justify-center flex-col items-center bg-[#f9f0f0] rounded hover:cursor-pointer hover:duration-700 hover:transition-all hover:scale-[1.05] small:w-[80px]  mobile:w-[80px] mobilel:w-[100px]   ">
              <div className="text-[#456104] font-bold text-[17px] small:text-[12px] mobile:text-[13px] mobilel:text-[13px] tablet:text-[13px] ">
                <CiBag1 />
              </div>

              <div className="text-[15px] font-semibold mt-[10px] text-[#456104] small:text-[10px] mobile:text-[10px] small:mt-[5px] mobile:mt-[5px] mobilel:mt-[5px] mobilel:text-[11px] tablet:text-[12px] tablet:mt-[5px] ">
                Total Sales
              </div>
              <div className="text-[15px] font-bold mt-[10px] small:text-[10px] mobile:text-[10px] mobilel:text-[11px] tablet:text-[11px]  ">
                0
              </div>
            </div>
            {/* fifth */}

            <div className="w-[15%] h-[100px] flex justify-center flex-col items-center bg-[#f9f0f0] rounded hover:cursor-pointer hover:duration-700 hover:transition-all hover:scale-[1.05] small:w-[80px]  mobile:w-[80px] mobilel:w-[100px]   ">
              <div className="text-[#456104] font-bold text-[17px] small:text-[12px] mobile:text-[13px] mobilel:text-[13px] tablet:text-[13px] ">
                <FaNairaSign />
              </div>

              <div className="text-[15px] font-semibold mt-[10px] text-[#456104] small:text-[10px] mobile:text-[10px] small:mt-[5px] mobile:mt-[5px] mobilel:mt-[5px] mobilel:text-[11px] tablet:text-[12px] tablet:mt-[5px] ">
                Total Revenue
              </div>
              <div className="text-[15px] font-bold mt-[10px] small:text-[10px] mobile:text-[10px] mobilel:text-[11px] tablet:text-[11px]  ">
                0
              </div>
            </div>

            {/* sixth */}
            <div className="w-[15%] h-[100px] flex justify-center flex-col items-center bg-[#f9f0f0] rounded hover:cursor-pointer hover:duration-700 hover:transition-all hover:scale-[1.05] small:w-[80px]  mobile:w-[80px] mobilel:w-[100px]   ">
              <div className="text-[#456104] font-bold text-[17px] small:text-[12px] mobile:text-[13px] mobilel:text-[13px] tablet:text-[13px] ">
                <GiExpense />
              </div>

              <div className="text-[15px] font-semibold mt-[10px] text-[#456104] small:text-[10px] mobile:text-[10px] small:mt-[5px] mobile:mt-[5px] mobilel:mt-[5px] mobilel:text-[11px] tablet:text-[12px] tablet:mt-[5px] ">
                Total Expenses
              </div>
              <div className="text-[15px] font-bold mt-[10px] small:text-[10px] mobile:text-[10px] mobilel:text-[11px] tablet:text-[11px]  ">
                0
              </div>
            </div>

            {/* seventh */}
            <div className="w-[15%] h-[100px] flex justify-center flex-col items-center bg-[#f9f0f0] rounded hover:cursor-pointer hover:duration-700 hover:transition-all hover:scale-[1.05] small:w-[80px]  mobile:w-[80px] mobilel:w-[100px]   ">
              <div className="text-[#456104] font-bold text-[17px] small:text-[12px] mobile:text-[13px] mobilel:text-[13px] tablet:text-[13px] ">
                <FaBorderNone />
              </div>

              <div className="text-[15px] font-semibold mt-[10px] text-[#456104] small:text-[10px] mobile:text-[10px] small:mt-[5px] mobile:mt-[5px] mobilel:mt-[5px] mobilel:text-[11px] tablet:text-[12px] tablet:mt-[5px] ">
                Total Orders
              </div>
              <div className="text-[15px] font-bold mt-[10px] small:text-[10px] mobile:text-[10px] mobilel:text-[11px] tablet:text-[11px]  ">
                0
              </div>
            </div>
            {/* eight */}

            <div className="w-[15%] h-[100px] flex justify-center flex-col items-center bg-[#f9f0f0] rounded hover:cursor-pointer hover:duration-700 hover:transition-all hover:scale-[1.05] small:w-[80px]  mobile:w-[80px] mobilel:w-[100px]   ">
              <div className="text-[#456104] font-bold text-[17px] small:text-[12px] mobile:text-[13px] mobilel:text-[13px] tablet:text-[13px] ">
                <FaNairaSign />
              </div>

              <div className="text-[15px] font-semibold mt-[10px] text-[#456104] small:text-[10px] mobile:text-[10px] small:mt-[5px] mobile:mt-[5px] mobilel:mt-[5px] mobilel:text-[11px] tablet:text-[12px] tablet:mt-[5px] ">
                Total Revenue
              </div>
              <div className="text-[15px] font-bold mt-[10px] small:text-[10px] mobile:text-[10px] mobilel:text-[11px] tablet:text-[11px]  ">
                0
              </div>
            </div>

            {/* ninth */}
            <div className="w-[15%] h-[100px] flex justify-center flex-col items-center bg-[#f9f0f0] rounded hover:cursor-pointer hover:duration-700 hover:transition-all hover:scale-[1.05] small:w-[80px]  mobile:w-[80px] mobilel:w-[100px]   ">
              <div className="text-[#456104] font-bold text-[17px] small:text-[12px] mobile:text-[13px] mobilel:text-[13px] tablet:text-[13px] ">
                <GiExpense />
              </div>

              <div className="text-[15px] font-semibold mt-[10px] text-[#456104] small:text-[10px] mobile:text-[10px] small:mt-[5px] mobile:mt-[5px] mobilel:mt-[5px] mobilel:text-[11px] tablet:text-[12px] tablet:mt-[5px] ">
                Total Expenses
              </div>
              <div className="text-[15px] font-bold mt-[10px] small:text-[10px] mobile:text-[10px] mobilel:text-[11px] tablet:text-[11px]  ">
                0
              </div>
            </div>

            {/* tenth */}
            <div className="w-[15%] h-[100px] flex justify-center flex-col items-center bg-[#f9f0f0] rounded hover:cursor-pointer hover:duration-700 hover:transition-all hover:scale-[1.05] small:w-[80px]  mobile:w-[80px] mobilel:w-[100px]   ">
              <div className="text-[#456104] font-bold text-[17px] small:text-[12px] mobile:text-[13px] mobilel:text-[13px] tablet:text-[13px] ">
                <FaBorderNone />
              </div>

              <div className="text-[15px] font-semibold mt-[10px] text-[#456104] small:text-[10px] mobile:text-[10px] small:mt-[5px] mobile:mt-[5px] mobilel:mt-[5px] mobilel:text-[11px] tablet:text-[12px] tablet:mt-[5px] ">
                Total Orders
              </div>
              <div className="text-[15px] font-bold mt-[10px] small:text-[10px] mobile:text-[10px] mobilel:text-[11px] tablet:text-[11px]  ">
                0
              </div>
            </div>
          </div>
          {/* end card */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
