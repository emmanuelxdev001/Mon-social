import { Link } from "react-router-dom";

const DataBase = () => {
  return (
    <div className=" w-[100%] h-[100vh] flex justify-center  ">
      <div className="w-[90%] ">
        <div className="text-[18px] font-bold small:text-[14px] mobile:text-[15px] ">
          DataBase
        </div>
        <div className=" mt-[30px]  ">
          <div className=" flex gap-[30px] ">
            <Link to="/admin/database/us">
              <div className=" text-[15px] font-bold hover:border-b-[3px] w-[35px] hover:border-[#18fb18a9] hover:text-[#18fb18a9] transition-all hover:cursor-pointer h-[40px] small:text-[12px] mobile:text-[13px] small:w-[25px] mobile:w-[25px] ">
                User
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataBase;
