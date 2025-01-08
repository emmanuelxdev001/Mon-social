import { AiFillAccountBook } from "react-icons/ai";
import { Link } from "react-router-dom";

const SecondCard = () => {
  return (
    <div className="w-[90%] mt-[120px] small:h-[200px] mobile:h-[800px] mobilel:h-[500px] bg-[blue] small:mt-[-5px] mobile:mt-[30px] ">
      <div className="grid h-[420px] small:grid-cols-1 mobile:grid-cols-1 grid-cols-4 gap-3">
        <div className="grid grid-cols-1 small:grid-cols-1 rounded  ">
          <img
            className="w-[100%] h-[200px] object-cover hover:cursor-pointer "
            src="https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg"
            alt="pinimg"
          />
          <div className=" flex justify-center small:grid small:grid-cols-1 flex-col items-center  ">
            <div className="text-[11px] mt-[15px] mobile:text-center ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique recusandae reprehenderit illo doloribus, repellat fugiat
              accusantium,magnam nesciunt quidem vitae nostrum dolore suscipit
              est eum .
            </div>
            <div className="text-[13px] text-[white] mt-[10px] font-bold ">
              Latest Goods
            </div>
            <Link to="/sign-in">
              <div className="flex justify-center items-center mt-[15px] w-[100px] text-[13px] gap-1 bg-[#fa9608] h-[35px] text-white rounded p-1 hover:scale-[1.05] duration-700 cursor-pointer ">
                <button type="button">Register</button>
                <AiFillAccountBook />
              </div>
            </Link>
          </div>
        </div>
        <div className="grid col-span-3  mobile:h-[200px] small:grid-cols-1  gap-2">
          <div className="grid grid-cols-3 h-[200px] gap-2">
            <div className="grid tablet:h-[200px] h-[20%] col-span-2">
              <img
                className="w-[100%] h-[200px] object-cover "
                src="https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg"
                alt="pinimg"
              />
            </div>
            <div className="grid grid-cols-1 tablet:h-[200px] col-span-1    ">
              <img
                className="w-[100%] h-[200px] object-cover "
                src="https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg"
                alt="pinimg"
              />
            </div>
          </div>
          <div className="grid grid-cols-3  h-[200px] gap-2">
            <div className="grid col-span-1 h-[200px]   ">
              <img
                className="w-[100%] h-[200px] object-cover "
                src="https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg"
                alt="pinimag"
              />
            </div>
            <div className="grid grid-cols-1 col-span-2 h-[200px]    ">
              <img
                className="w-[100%] h-[200px] object-cover "
                src="https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg"
                alt="pinimg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondCard;
