import {
  AiFillMail,
  AiFillPhone,
  AiFillMessage,
  AiFillPlusSquare,
  AiFillFilter,
  AiOutlineSearch,
} from "react-icons/ai";
import { FaPeopleGroup } from "react-icons/fa6";
import { useState } from "react";
import InputEmoji from "react-input-emoji";

const ChartingPage = () => {
  return (
    <div className="w-[100%] h-[100%] bg-[white] ">
      {/* firstcomponent */}
      <div className="w-[100%] h-[70px] flex justify-center border-b-[1px] border-b-[#ece8e8] bg-[white]">
        <div className="w-[90%] ">
          <div className="flex justify-between items-center ">
            <div className="text-[25px] mt-[20px] text-[#456104] font-bold small:text-[13px] mobile:text-[13px] mobilel:text-[13px] ">
              BoundaryMarket
            </div>
            <div className="text-[13px] font-semibold small:text-[10px]  text-[#fa9608] small:mt-[30px] mobile:text-[10px] mobilel:text-[10px] mobile:mt-[30px] mobilel:mt-[30px] tablet:mt-[30px] mt-[45px] ">
              Create Memorable talks{" "}
            </div>
          </div>
        </div>
      </div>
      {/* firstcomponent */}
      {/* secondcomponent */}
      <div className="w-[100%] h-[50px] flex justify-center border-b-[1px] border-b-[#ece8e8] bg-[white]">
        <div className="w-[90%] small:w-[96%] flex gap-[50px] small:gap-[13px] items-center mobile:gap-[13px] mobilel:gap-[13px] mobile:w-[96%] mobilel:w-[96%] ">
          <div className="flex items-center gap-[15px] small:gap-[5px] mobile:gap-[5px] mobilel:gap-[5px] ">
            <AiFillMail className="text-[17px] small:text-[13px] mobile:text-[13px] mobilel:text-[13px] hover:cursor-pointer  text-[#456104] " />
            <AiFillMessage className="text-[17px] small:text-[13px] mobile:text-[13px] mobilel:text-[13px] hover:cursor-pointer  text-[#456104] " />
            <AiFillPhone className="text-[17px] small:text-[13px] mobile:text-[13px] mobilel:text-[13px] hover:cursor-pointer  text-[#456104] " />
            <FaPeopleGroup className="text-[17px] small:text-[13px] mobile:text-[13px] mobilel:text-[13px] hover:cursor-pointer  text-[#456104] " />
            <img
              className="w-[20px] h-[25px] rounded-[50%] "
              src="https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg"
              alt="ping"
            />
          </div>

          <div className="flex items-center gap-[10px]  ">
            <img
              className="w-[30px] h-[35px] rounded-[50%] hover:cursor-pointer hover:duration-700 hover:scale-[1.05] transition-all small:w-[20px] small:h-[25px] mobile:w-[20px] mobile:h-[25px] mobilel:w-[20px] mobilel:h-[25px] "
              src="https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg"
              alt="ping"
            />
            <div>
              <div className="text-[11px] text-[#456104] small:text-[10px] mobile:text-[10px] mobilel:text-[10px] font-bold ">
                Onyemaobi Jecinta Ugochi
              </div>
              <div className="text-[8px] font-medium text-[#456104] ">
                Last seen 3 hours ago
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* secondcomponent */}
      {/* thirdComponent */}
      <div className="[100%] h-[70px] flex justify-center ">
        <div
          className="
        w-[90%] flex
        "
        >
          <SideBar />
          <MainChart />
        </div>
      </div>
      {/* thirdComponent */}
    </div>
  );
};

export default ChartingPage;

const SideBar = () => {
  return (
    <div className="w-[30%] mt-[20px] h-[100%] small:hidden mobile:hidden mobilel:hidden  ">
      <div className=" mt-[20px] h-[100%] flex justify-center fixed left-0 small:hidden mobile:hidden mobilel:hidden  ">
        <div className="w-[90%] small:w-[97%] mobile:w-[97%] mobilel:w-[97%] ">
          {/* firstComponents */}
          <div className="flex justify-between items-center ">
            <div className="text-[18px] small:text-[13px] text-[#456104] font-semibold mobile:text-[13px] mobilel:text-[13px] ">
              Charts
            </div>
            <div className="flex items-center small:gap-[10px] mobile:gap-[10px] mobilel:gap-[10px] gap-[20px] ">
              <AiFillPlusSquare className="text-[20px] small:text-[12px] mobile:text-[12px] mobilel:text-[12px] text-[#456104] " />
              <AiFillFilter className="text-[20px] small:text-[12px] mobile:text-[12px] mobilel:text-[12px] text-[#456104]" />
            </div>
          </div>
          {/*end firstComponents */}
          {/* search */}
          <div className=" mt-[20px] border w-[100%] h-[50px] flex justify-between items-center rounded-[5px] border-b-[2px] border-b-[#456104] small:h-[30px] mobile:h-[30px] mobilel:h-[30px] ">
            <AiOutlineSearch className="text-[15px] font-bold text-[#456104] ml-[10px] small:text-[12px] mobile:text-[12px] mobilel:text-[12px] " />
            <input
              className="h-[95%] outline-none border-none text-[12px] text-[#456104] w-[90%] mobile:text-[10px] small:text-[10px]  mobilel:text-[10px] mobile:ml-[10px] small:ml-[10px] mobilel:ml-[10px] "
              placeholder="Search or create a new chat "
              type="search"
            />
          </div>
          {/*end search */}
          {/* charts */}
          <div className="flex items-center gap-[10px] w-[100%] mt-[30px] h-[50px] rounded-md hover:cursor-pointer hover:shadow-2xl  ">
            <img
              className="w-[35px] h-[40px] rounded-[50%]  "
              src="https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg"
              alt="ping"
            />
            <div>
              <div className=" flex justify-between gap-[25px] items-center w-[100%] ">
                <div className="text-[12px] font-bold  ">
                  Onyemaobi Jecinta Ugochi
                </div>
                <div className=" text-[10px] relative  ">7 hours ago</div>
              </div>
              <div className="text-[12px] font-medium ">
                you should have sent some for me na
              </div>
            </div>
          </div>
          {/*end charts */}
        </div>
      </div>
    </div>
  );
};

const MainChart = () => {
  const [text, setText] = useState("");
  console.log("enter", text);

  function handleOnEnter() {}
  console.log("reading", text);

  return (
    <div
      className="w-[68%] mt-[20px] h-[500px] overflow-hidden flex justify-center fixed right-0  "
      style={{
        backdropFilter: "blur( 6.5px )",
        background: " ",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        borderRadius: "5px",
        WebkitBackdropFilter: "-webkit-backdrop-filter: blur( 6.5px )",
      }}
    >
      <div className="w-[90%] relative ">
        <div className="mt-[30px]">
          <div className="absolute top-0 left-[320px] text-center text-[13px] font-semibold text-[#456104] ">
            Today{" "}
          </div>
        </div>

        {/* charts */}
        <div className="text-[12px] font-semibold absolute bottom-[80px] w-[30%] left-0 bg-[#fa9608] text-white p-[20px] rounded-[20px] mb-[80px] ">
          i don tell you say make u no dey disturb me
        </div>
        <div className="text-[12px] font-semibold absolute bottom-[80px] w-[50%] right-0 bg-[#456104] text-white p-[20px] rounded-[20px] ">
          you have sent some for me na i told you earlier, now what is this i
          dont like this kind of thing ooo.
        </div>

        {/*end charts */}
        {/* inputemoji */}
        <div className="absolute bottom-0 w-[100%] h-[50px] ">
          <InputEmoji
            value={text}
            onChange={setText}
            cleanOnEnter
            onEnter={handleOnEnter}
            placeholder="Start a chat"
            shouldReturn={false}
            shouldConvertEmojiToImage={false}
          />
        </div>
        {/*end inputemoji */}
      </div>
    </div>
  );
};
