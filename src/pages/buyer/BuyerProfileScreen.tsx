import { Link } from "react-router-dom";
import {
  AiOutlineMessage,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";
import { useSelector } from "react-redux";

const BuyerProfileScreen = () => {
  const data = useSelector((state: any) => state?.myBuyer);

  return (
    <div className="w-[90%] mobilel:w-[90%] rounded-[10px] small:w-[90%] mobile:w-[90%] h-[100vh] bg-[white] flex justify-center overflow-hidden ">
      <div className="w-[90%]  ">
        <div className="mt-[10px] w-[100%] flex justify-center flex-col items-center ">
          <img
            className="w-[130px] h-[150px] border rounded-[50%] object-cover small:w-9px] small:h-[100px] mobile:w-[80px] mobile:h-[100px] hover:cursor-pointer hover:scale-[1.05] transition-all duration-700 "
            src={data?.image}
            alt="pinimg"
          />

          <div className="font-bold text-[12px] mt-[20px] hover:text-[#456104] transition-all hover:cursor-pointer ">
            {data?.name}
          </div>
          <div className="font-bold text-[12px] hover:text-[#456104] transition-all hover:cursor-pointer  ">
            {data?.email}
          </div>
        </div>
        <div className="w-[100%] flex justify-center gap-[20px] items-center mt-[20px] font-bold text-[20px] ">
          <Link to="/buyer/profile">
            <AiOutlineMessage />
          </Link>
          <AiOutlinePhone />
          <AiOutlineMail />
        </div>
        <div className="w-[100%] mt-[30px] tablet:mt-[50px] ">
          <div className="text-[15px] font-bold small:text-[13px]  mobile:text-[13px] ">
            About Me
          </div>
          <div className=" mt-[20px] text-[12px] text-[#838181] ">
            {data?.details}
          </div>
        </div>
        <div className="w-[100%] mt-[30px] tablet:mt-[50px]  flex justify-between items-center ">
          <div>
            <div className="text-[13px] font-bold"> Name</div>
            <div className="text-[12px]">{data?.name}</div>
          </div>
          <div>
            <div className="text-[13px] font-bold"> Email</div>
            <div className="text-[12px]">{data?.email}</div>
          </div>
        </div>
        <div className="w-[100%] mt-[10px]  flex justify-between items-center ">
          <div>
            <div className="text-[13px] font-bold"> Role</div>
            <div className="text-[12px]">{data?.role}</div>
          </div>
          <div>
            <div className="text-[13px] font-bold">your Email</div>
            <div className="text-[12px]">{data?.email}</div>
          </div>
        </div>
        <div className="w-[100%] h-[70px] mt-[20px] tablet:mt-[35px] ">
          <div className="text-[13px] font-bold">Other Buyers</div>
          <div className="flex gap-[6px] items-center tablet:mt-[20px] ">
            <img
              className="w-[30px] h-[30px] rounded-[50%] object-cover hover:cursor-pointer hover:scale-[1.05] duration-700 "
              src="https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg"
            />
            <img
              className="w-[30px] h-[30px] rounded-[50%] object-cover hover:cursor-pointer hover:scale-[1.05] duration-700 "
              src="https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg"
              alt="pinimg"
            />
            <img
              className="w-[30px] h-[30px] rounded-[50%] object-cover hover:cursor-pointer hover:scale-[1.05] duration-700 "
              src="https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg"
              alt="pinimg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerProfileScreen;
