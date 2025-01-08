import { Link } from "react-router-dom";
import { AiOutlineAccountBook } from "react-icons/ai";
import img from "../assets/WhatsApp Image 2024-08-14 at 16.27.43_d30eb196.jpg";

const FifthCard = () => {
  return (
    <div className="mt-[100px] flex justify-center ">
      <div className="w-[95%] h-[80vh] small:w-[100%] mobile:w-[100%] mobilel:w-[100%]  ">
        <img className="w-[100%] h-[100%] object-cover " src={img} />
        <Link to="/sign-up">
          <div className="flex justify-center items-center mt-[-190px] w-[100px] mobile:ml-[160px] small:ml-[-150px] text-[18px] font-bold gap-1 text-[#fa9608] h-[50px]  rounded p-1 hover:scale-[1.05] duration-700 cursor-pointer ml-[470px] small:text-[13px] ">
            <button type="button">Register</button>
            <AiOutlineAccountBook />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FifthCard;
