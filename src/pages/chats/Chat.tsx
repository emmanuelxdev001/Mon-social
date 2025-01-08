import { AiOutlineSearch } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

const Chat = () => {
    const data = [
        {
          pic: "U",
          name: "Uchechukwu Chinonso ",
          message: "  bm market is an online sales platform?",
          date: "2:20pm",
          numb: 1,
          role: "admin",
        },
        {
          pic: "O",
          name: "Onuiri Destiny ",
          message: "almost ready for work, anything ",
          date: "2:30pm",
          numb: 5,
          role: "user",
        },
        {
          pic: "C",
          name: "Christain",
          message: "are u going to destiny's place today ",
          date: "2:35pm",
          numb: 2,
          role: "buyer",
        },
        {
          pic: "m",
          name: "mi Familiar",
          message: "una good morning oo?",
          date: "5:00pm",
          numb: 60,
          role: "buyer",
        },
        {
          pic: "J",
          name: "Jemimah Love",
          message: " be whyning me  ",
          date: "6:00pm",
          numb: 1,
          role: "user",
        },
        {
          pic: "O",
          name: "Onyemaobi Jecinta",
          message: "your order has been processed  ",
          date: "7:00pm",
          numb: 1,
          role: "admin",
        },
        {
          pic: "A",
          name: "Augusta",
          message: "your problem plenty",
          date: "7:00pm",
          numb: 3,
          role: "buyer",
        },
        {
          pic: "O",
          name: "Onwachu Chinenye",
          message: "neye how far ",
          date: "9:00pm",
          numb: 1,
          role: "user",
        },
        {
          pic: "F",
          name: "Fortune ",
          message: "bos lady good morning ",
          date: "9:10pm",
          numb: 3,
          role: "buyer",
        },
      ];

  return (
    <div>
      <div className="w-full h-[100vh] flex justify-center items-center bg-slate-900">
        <div className="w-[370px]  h-[600px] bg-white rounded-[20px] overflow-hidden">
           {/* first component */}
           <div className="w-full h-[100px] bg-[#456104] p-3 text-white font-bold">
                <div className="flex justify-between items-center">
                    <h1 className="text-[20px]">Bm</h1>
                    <div className="flex w-[50px] justify-between">
                    <AiOutlineSearch/>
                    <BsThreeDotsVertical/>
                    </div>
                </div>
                <div className="flex justify-between px-5 mt-5">
                    <h2 className="border-b-2 pb-2 px-5">CHAT</h2>
                    <h2>CALLS</h2>
                    <h2>STATUS</h2>
                </div>
            </div>
           {/* first end component */}
         {/* secondcomponent */}
     {
        data?.map((props:any)=>(
            <div className="px-4">
            <div className="w-full flex justify-between items-center my-4">
               <div className="flex">
               <div className="w-[45px] h-[45px] rounded-[50%] bg-[#456104] mr-[8px] flex justify-center items-center text-white font-bold">{props?.pic}</div>
                  <div className="">
                      {/* name */}
                      <h4 className="font-bold text-[15px]">{props?.name}</h4>
                      {/* message */}
                      <p className="small:text-[11px] mobile:text-[11px] mobilel:text-[11px]  text-[13px]  ">{props?.message}</p>
                  </div>
               </div>
                  <div className="flex items-center flex-col">
                      {/* date */}
                      <p className="text-[#456104] small:text-[11px] mobile:text-[11px] mobilel:text-[11px] text-[12px] ">{props?.date}</p>
                      {/* time */}
                      <div className="w-[20px] h-[20px] rounded-[50%] bg-[#456104] flex justify-center items-center text-[10px] text-white">{props?.numb}</div>
                      <p className="text-[#456104] small:text-[11px] mobile:text-[11px] mobilel:text-[11px] text-[12px] ">{props?.role}</p>
                  </div>
              </div>
  
                  </div>
        ))
     }

          </div>
         {/* secondcomponent */}
        </div>
      </div>
  );
};

export default Chat;
