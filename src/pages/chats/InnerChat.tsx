import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdArrowBack } from "react-icons/io";
import { MdOutlineSettingsVoice } from "react-icons/md";
// import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { BsCameraVideo } from "react-icons/bs";
import { SlPhone } from "react-icons/sl";
import InputEmoji from "react-input-emoji";
import { useState } from "react";

const InnerChat = () => {
  const [text, setText] = useState("");
  console.log("enter", text);

  const handleOnEnter =()=> {
  }
  console.log("reading", text)


  const data = [
    {
      "chat":"hello",
      "myChat":"hi"
    },
    {
      "chat":"how far this is Gerald",
      "myChat":"oo Gerald nice meeting u, am Jecinta"
    },
    {
      "chat":"what a beautiful name",
      "myChat":" blussing thank you"
    },
    {
      "chat":"I will like to know you more",
      "myChat":" ok "
    },
    {
      "chat":"",
      "myChat":" am Onyemaobi jecinta by name, a full stact software engineer, coo of executive core, and also a content creator ",
    },

  ]

  return (
    <div>
      <div className="w-full h-[100vh] flex justify-center items-center mt-[30px]">
        <div className="w-[370px] overflow-y-scroll   bg-slate-300">
         {/* firstcomponent */}
          <div className="w-[100%] h-[70px] bg-green-950 text-white flex items-center px-2 justify-between">
         <div className="flex  justify-between items-center">
                <IoMdArrowBack/>
              <div className="w-[30px] h-[30px] rounded-[50%] bg-red-400 text-[12px] font-bold flex justify-center items-center ml-1 ">U</div>
              <div>
                <h6 className="text-[12px] ml-2 mt-4 font-semibold ">Uchechukwu Chinonso</h6>
                <p className="text-[10px]">online</p>
              </div>
            </div>
            <div className="w-[90px] flex justify-between text-[15px]">
                <BsCameraVideo/>
                <SlPhone/>
                <BsThreeDotsVertical/>
            </div>
          </div>
         {/* firstcomponent */}

          <div className="px-2">
            {
              data?.map((props:any)=>(
                <div>
                {/* friendchat */}
               <div className="bg-[white] max-w-[200px] rounded-[5px] my-2 p-2 text-left text-[#456104] text-[11px] items-center flex">{props?.chat}</div>
               {/* myChat */}
               <div className="flex justify-end">
               <div className="bg-[#456104] max-w-[200px] rounded-[5px] my-2 p-2 items-center text-[white] text-[11px] flex">{props?.myChat}</div>
               </div>
               </div>
              ))
            }
           
             <div className="w-[100%] h-[60px] flex items-center my-3">
            <div className="w-[100%] h-[100%] bg-white rounded-[30px] flex items-center text-[30px] pl-4">
                {/* <MdOutlineEmojiEmotions/> */}
                <div className="w-[80%] ml-3 text-[20px] border-none outline-none">
                <InputEmoji
            value={text}
            onChange={setText}
            cleanOnEnter
            onEnter={handleOnEnter}
            placeholder="Start a chat" shouldReturn={false} shouldConvertEmojiToImage={false}  
              />
              </div>
                <FaCamera className="text-[20px] ml-3 "/>
            </div>
          
             <div className="w-[45px] h-[45px] rounded-[50%] flex justify-center items-center bg-[#456104] text-[23px] text-white">
                <MdOutlineSettingsVoice/>
             </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerChat;
