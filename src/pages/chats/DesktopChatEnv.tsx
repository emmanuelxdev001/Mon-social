import { MdOutlineSettingsVoice } from "react-icons/md";
import InputEmoji from "react-input-emoji"
import { FaCamera } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { FaVideo } from "react-icons/fa6";
import { useState } from "react";


const DesktopChatEnv = () => {
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
    {
      "chat":"wow that's nice",
      "myChat":"",
    },
    {
      "chat":",Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quae officiis dolor, non eius ab voluptatem. Fuga corrupti deleniti vero rem, eligendi cupiditate reiciendis sequi totam necessitatibus quos architecto eos!",
      "myChat":" nice, i will like to work with you, i can see your vision is clear ",
    },
  ]

  return (
    <div>
      <div className="w-[69vw] h-[100vh]  phone:w-[320px]">
    {/* firstcomponent  */}
    <div className="w-full h-[50px] px-4 py-2 flex justify-between  text-[20px] text-white bg-[#456104]  ">
           {/* first */}
           <div className="flex items-center">

                <div className="w-[40px] h-[40px] rounded-[50%]    bg-[#fa9608] mr-2 p-1 flex justify-center items-center font-bold">U</div>

                <p>Uchechukwu Chinonso</p>
            </div>
           {/*end first */}
            <div className="flex items-center ">
                <AiFillPhone/>
                
                <FaVideo className="mx-3"/>
                <FaCamera/>
            </div>
        </div>
    {/*end firstcomponent  */}
       {/* secondcomponent */}
       <div className="w-full h-[calc(100vh-110px)] bg-slate-300 p-4 phone:overflow-hidden overflow-y-scroll  ">
        
        {/* charts */}
        {
      data?.map((props:any)  => (
        <div className="">
              {/* friend chat */}
            <div className="w-[300px]">
            <div className="bg-white max-w-[400px] rounded-[5px] my-2 p-2  items-center flex text-[14px] min-w-[0px] ">{props?.chat}</div>
            </div>
              {/*end friend chat */}
              {/* mychat */}
             <div className="flex justify-end">
             <div className="bg-[#456104] max-w-[500px] text-[12px]  rounded-[5px] my-2 p-2 text-center text-[white] items-center font-semibold flex">{props?.myChat}</div>
             </div>
              {/* mychat */}
             
             </div>
      ))
    }
        {/*end charts */}

        </div>
       {/*end secondcomponent */}
        <div className="w-full h-[60px] flex small:w-[100%]  items-center mobile:w-[100%] mobilel:w-[100%]  ">
            <div className="w-[310px] h-[100%] small:w-[80%] mobile:w-[80%] mobilel:w-[80%]   rounded-[30px] flex items-center text-[30px] pl-4 flex-1 text-white small:h-[30px] mobile:[h-30px] mobilel:h-[30px] ">
               
            <InputEmoji
            value={text}
            onChange={setText}
            cleanOnEnter
            onEnter={handleOnEnter}
            placeholder="Start a chat" shouldReturn={false} shouldConvertEmojiToImage={false}  
              />
                <FaCamera className="text-[20px] mr-4"/>
            </div>
          
             <div className="w-[45px] h-[45px]   mobile:w-[15%] mobilel:w-[10%] small:w-[15%] small:h-[30px] rounded-[50%] flex justify-center items-center mr-4 bg-[#456104] text-[23px] mobile:text-[15px] mobilel:[15px] mobile:h-[30px] mobilel:h-[30px] small:text-[15px] text-white">
                <MdOutlineSettingsVoice />
             </div>
             </div>
      </div>
    </div>
  )
}

export default DesktopChatEnv