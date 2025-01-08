import { AiOutlineClockCircle } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useProductOrder } from "../../hook/ProductHook";
import moment from "moment";

const UserHistory = () => {
  const { userID } = useParams();
  const { data } = useProductOrder(userID);
  // const date = moment();

  return (
    <div className=" w-[100%] h-[100%] flex justify-center bg-[#f1eeee] ">
      <div className="w-[90%] small:w-[100%] mobile:w-[100%] h-[100%] mt-[30px] ">
        <div className="flex items-center text-[18px] font-semibold gap-[50px] ">
          <div>Order Details: </div>
          <div className="border-b-[3px] h-[35px] w-[62px] border-[#456104] hover:cursor-pointer ">
            Histroy{" "}
          </div>
        </div>
        {/* histroys */}
        <div className="flex items-center gap-[20px] mt-[50px] ">
          <div className=" text-[17px] font-semibold ">Orders</div>
          <div className="text-[25px] font-semibold  ">790841</div>
        </div>

        <div className=" mt-[50px] w-[100%] h-[100%] p-[20px]  bg-[white]  rounded-[10px] ">
          {data?.map((props: any) => (
            <div className=" w-[100%] h-[50px] mt-[25px] mobile:h-[200px] small:h-[200px] p-[5px]  flex items-center  ">
              {/* date */}
              <div className="w-[20%] text-[14px] font-semibold ">
                12 Jan 2024
              </div>
              {/*end date */}
              {/* time */}
              <div className=" w-[10%] h-[50px] flex items-center gap-[10px] font-bold text-[14px] bg-[#f1eeee] ">
                <AiOutlineClockCircle className="text-[17px] ml-[10px]  " />
                <div>08:00</div>
              </div>
              {/* time */}
              <div className=" w-[70%] h-[50px] flex items-center gap-[10px] font-bold text-[14px] bg-[#f1eeee] ">
                {props?.description}
              </div>
            </div>
          ))}
        </div>
        {/*end histroys */}
      </div>
    </div>
  );
};

export default UserHistory;
