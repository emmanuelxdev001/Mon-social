import { useSelector } from "react-redux";
import { allUserHook } from "../../hook/UserHook";

const AdminDataBase = () => {
  const { alluser } = allUserHook();
  // const user = useSelector((state:any)=>state?.user)

  return (
    <div className="w-[500px] h-[100%] small:w-[100%] mobile:w-[100%] mt-[30px] mobile:flex mobile:justify-center small:flex small:justify-center ">
      {alluser &&
        alluser?.map((props: any) => (
          <div className="flex gap-[15px] small:w-[100%] mobile:w-[90%] ">
            {/* name */}
            <div className="  w-[220px] overflow-hidden mobile:w-[300px] small:w-[300px] ">
              {/* <div className=" text-[12px] font-bold mobile:text-[10px] small:text-[10px] ">Name</div> */}
              <div className="mt-[30px] h-[50px] overflow-hidden flex gap-[10px] items-end ">
                <img
                  className="w-[35px] h-[35px] rounded-[50%] object-cover hover:cursor-pointer transition-all hover:scale-[1.05] duration-700 "
                  src="https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg"
                  alt="pinimg"
                />
                <div className="text-[10px] font-bold hover:text-[#18fb18a9] hover:cursor-pointer small:text-[8px] mobile:text-[8px] ">
                  {props?.name}
                </div>
              </div>
            </div>
            <div className="  w-[200px] overflow-hidden mobile:w-[400px] small:w-[400px] ">
              {/* <div className=" text-[12px] font-bold  mobile:text-[10px] small:text-[10px]  ">Email</div> */}
              <div className="mt-[30px] h-[50px] overflow-hidden flex items-end  ">
                <div className="text-[10px] font-bold hover:text-[#18fb18a9] hover:cursor-pointer small:text-[8px] mobile:text-[8px] ">
                  {props?.email}
                </div>
              </div>
            </div>
            <div className="  w-[100px] overflow-hidden mobile:w-[80px] small:w-[80px] ">
              {/* <div className=" text-[12px] font-bold  mobile:text-[10px] small:text-[10px] ">Role</div> */}
              <div className="mt-[30px] h-[50px] overflow-hidden  flex items-end   ">
                <div className="text-[10px] font-bold hover:text-[#18fb18a9] hover:cursor-pointer small:text-[8px] mobile:text-[8px]   ">
                  {props?.role}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AdminDataBase;
