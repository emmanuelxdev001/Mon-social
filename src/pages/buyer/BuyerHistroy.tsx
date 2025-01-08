import { AiOutlineClockCircle } from "react-icons/ai";
import { useProductOrder } from "../../hook/ProductHook";
import { useParams } from "react-router-dom";
import moment from "moment";

const BuyerHistory = () => {
  const { userID } = useParams();
  const { data } = useProductOrder(userID);
  return (
    <div className=" w-[100%] h-[100%] flex justify-center ">
      <div className="w-[90%] small:w-[100%] mobile:w-[100%] h-[100%] mt-[30px] ">
        {/* histroys */}
        <div className=" mt-[50px] small:mt-[5px] mobile:mt-[5px] mobilel:mt-[5px] ">
          <div className=" text-[17px] font-semibold small:tetx-[13px] mobile:text-[13px] mobilel:text-[13px] ">
            Your Histroy{" "}
          </div>
        </div>

        <div className=" mt-[50px] small:mt-[10px] mobile:mt-[10px] mobilel:mt-[10px]  w-[100%] min-h-[50%] p-[20px] small:p-[5px] mobile:p-[5px] mobilel:p-[5px]  bg-[#ded7d7]  rounded-[10px] ">
          {data?.map((props: any) => (
            <div className=" w-[100%] h-[50px] mt-[25px] mobile:h-[50px] mobilel:h-[50px] small:h-[50px] p-[5px]  flex items-center mb-3  ">
              {/* date */}
              <div className="w-[20%] small:w-[13%] text-[14px] font-semibold mobile:text-[10px] small:text-[10px] mobilel:text-[10px] ">
                12 Jan 2024
              </div>
              {/*end date */}
              {/* time */}
              <div className=" w-[10%] h-[50px] flex items-center gap-[10px] font-bold text-[14px] bg-[#f1eeee] ">
                <AiOutlineClockCircle className="text-[17px]  mobile:text-[10px] small:text-[10px] mobilel:text-[10px] small:mr-[20px] mobile:mr-[20px] mobilel:mr-[20px] " />
                <div>08:00</div>
              </div>
              {/* time */}
              <div className=" w-[70%] small:w-[77%] mobile:w-[77%] mobilel:w-[77%] h-[50px] flex items-center gap-[10px] font-bold text-[14px] bg-[#f1eeee] mobile:text-[10px] small:text-[10px] mobilel:text-[10px] ">
                {data?.title}
              </div>
            </div>
          ))}
        </div>
        {/*end histroys */}
      </div>
    </div>
  );
};

export default BuyerHistory;
