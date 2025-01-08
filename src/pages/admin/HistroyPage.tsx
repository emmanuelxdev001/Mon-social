import { AiOutlineClockCircle } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useProductOrder } from "../../hook/ProductHook";
import moment from "moment";
const HistroyPage = () => {
  const { userID } = useParams();
  const { data } = useProductOrder(userID);
  const date = moment();
  console.log(date.format("MMMM Do YYYY, h:mm:ss a"));

  return (
    <div className=" w-[100%] h-[100%] flex justify-center ">
      <div className="w-[90%]  ">
        <div className="flex items-center text-[18px] font-semibold gap-[50px] small:text-[13px] mobile:text-[13px] mobilel:text[13px] ">
          <div>Order Details: </div>
          <div className="border-b-[3px] h-[35px] w-[62px] border-[#18fb18a9] hover:cursor-pointer ">
            Histroy{" "}
          </div>
        </div>
        {/* histroys */}
        <div className="flex items-center gap-[20px] mt-[50px]  ">
          <div className=" text-[17px] font-semibold small:text-[13px] mobile:text-[13px] mobilel:text-[13px] ">
            Orders
          </div>
          <div className="text-[25px] font-semibold small:text-[13px] mobile:text-[13px] mobilel:text-[13px] ">
            #790841
          </div>
        </div>

        <div className=" mt-[50px] w-[100%] h-[100%] p-[10px]  bg-[#d7d0d0]  rounded-[10px] small:p-[5px] mobile:p-[5px] mobilel:p-[5px] ">
          {data?.map((props: any) => (
            <div className=" w-[100%] h-[50px]  mt-[25px] mb-3 flex items-center ">
              {/* date */}
              <div className="w-[20%] small:w-[10px] text-[14px] font-semibold small:text-[10px] mobile:text-[10px] mobilel:text-[10px] ">
                {/* date.format("MMMM Do YYYY") */}
              </div>
              {/*end date */}
              {/* time */}
              <div className=" w-[10%] h-[50px] flex items-center gap-[10px] font-bold text-[14px] small:text-[10px] mobile:text-[10px] mobilel:text-[10px] ">
                <AiOutlineClockCircle className="text-[17px] ml-[10px] small:mr-[-10px] mobile:mr-[-10px] mobilel:mr-[-10px] " />
                <div>{/* date.format("h:mm:ss a") */}</div>
              </div>
              {/* time */}
              <div className=" w-[70%] small:w-[80%] h-[50px] flex items-center gap-[10px] font-bold text-[14px] bg-[#f1eeee] small:text-[10px] mobile:text-[10px] mobilel:text-[10px] small:ml-[20px] mobilel:ml-[20px] mobile:ml-[20px] ">
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

export default HistroyPage;
