import { FaRegCheckCircle } from "react-icons/fa";
import {AiFillPhone,AiFillMessage,AiOutlineMenu} from "react-icons/ai"
import { CiSettings } from "react-icons/ci";

import { GiFullWoodBucketHandle } from "react-icons/gi";
import { FaRegStar } from "react-icons/fa";

const Sider = () => {
  return (
    <div>
      <div className="w-[4vw] small:text-[13px] mobile:text-[13px] mobilel:text-[13px] h-[100vh] bg-black text-white flex items-center flex-col text-[20px] py-2">
        <AiOutlineMenu />
        <AiFillMessage className="my-4"/>
        <AiFillPhone />
        <FaRegCheckCircle className="mt-4"/>
        <div className="flex-1"></div>
        <FaRegStar/>
        <GiFullWoodBucketHandle className="my-4" />
        <CiSettings className="my-4" />
        <img className="w-[35px] h-[40px] small:hidden mobile:hidden mobilel:hidden rounded-[50%]  " src="https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg" alt="ping" />
        <div className="hidden small:flex mobile:flex mobilel:flex ">
        <div className="w-[20px] h-[20px] rounded-[50%] bg-[#456104] mr-[8px]  text-[10px]  flex justify-center tablet:hidden laptop:hidden   items-center text-white font-bold">U</div>
        </div>
      </div>
    </div>
  );
};

export default Sider;
