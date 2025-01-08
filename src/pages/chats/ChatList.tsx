import {
  AiFillFilter,
  AiFillPlusSquare,
  AiOutlineSearch,
} from "react-icons/ai";

const ChatList = () => {
  const data = [
    {
      pic: "U",
      name: "Uchechukwu Chinonso ",
      meesage: "Afar bro, how e dey be na",
      date: "2:20am",
      numb: 1,
      role: "admin",
    },
    {
      pic: "O",
      name: "Onuiri Destiny ",
      meesage: "Afar I will not be around today oo ",
      date: "2:30pm",
      numb: 5,
      role: "user",
    },
    {
      pic: "C",
      name: "Christain",
      meesage: "will you come to destiny's side",
      date: "2:35pm",
      numb: 2,
      role: "buyer",
    },
    {
      pic: "m",
      name: "mi Familiar",
      meesage: "una good evening oo ",
      date: "5:00pm",
      numb: 60,
      role: "buyer",
    },
    {
      pic: "J",
      name: "Jemimah Love",
      meesage: "my system is spoilt it remain 45k  ",
      date: "6:00pm",
      numb: 1,
      role: "user",
    },
    {
      pic: "O",
      name: "Onyemaobi Jecinta",
      meesage: "i have nothing to say to you  ",
      date: "7:00pm",
      numb: 1,
      role: "admin",
    },
    {
      pic: "A",
      name: "Augusta",
      meesage: "u go sef ee your matter tire me  ",
      date: "7:00pm",
      numb: 3,
      role: "buyer",
    },
    {
      pic: "O",
      name: "Onwachu Chinenye",
      meesage: "neye How far ",
      date: "9:00pm",
      numb: 1,
      role: "user",
    },
    {
      pic: "F",
      name: "Fortune ",
      meesage: "Fortune How far ",
      date: "9:10pm",
      numb: 3,
      role: "buyer",
    },
  ];
  return (
    <div>
      <div className="p-5 w-[27vw] h-[100vh] bg-gray-950  overflow-y-scroll">
        {/* firstcomponent */}
        <div className="w-full flex justify-between text-white items-center">
          <div className="font-bold text-[25px]">Chats</div>
          <div className="flex text-[20px]">
            <AiFillPlusSquare />
            <AiFillFilter className="ml-3" />
          </div>
        </div>
        {/*end firstcomponent */}

        {/* search */}
        <div className="w-[100%] h-[50px] pl-2 flex bg-gray-900 py-1 rounded mt-4  items-center  ">
          <AiOutlineSearch className="text-[#456104] " />
          <input
            type="text"
            placeholder="Search or start a new chat"
            className="ml-2 flex-1 bg-gray-900 border-none outline-none text-white text-[12px] "
          />
        </div>
        {/*end search */}

        {/* secondComponent */}
        <div className="">
          {data?.map((props:any) => (
            <div className="w-full flex justify-between items-center my-4 mb-3 ">
              {/* first */}
              <div className="flex ">
                {/* image */}
                <div className="w-[50px] h-[50px] rounded-[50%] bg-[#fa9608] mr-[8px] flex justify-center items-center text-white font-bold">
                 {props?.pic}
                </div>
                {/*end image */}
                <div className="text-white">
                  {/* name */}
                  <h4 className="text-[12px] small:text-[11px] mobile:text-[11px] mobilel:text-[11px] font-semibold ">
                    {props?.name}
                    
                  </h4>
                  {/*end name */}
                  {/* message */}
                  <p className="small:text-[11px] mobile:text-[11px] mobilel:text-[11px] text-[12px]">
                    {props?.meesage}
                  </p>
                  {/*end message */}
                </div>
              </div>
              {/*end first */}
              {/* second  */}
              <div className="flex items-center flex-col">
                {/* time */}
                <p className="text-white text-[10px] mb-1 font-bold ml-1 ">
                  {props?.date}
                </p>
                {/*end time */}

                {/* message */}
                <div className="w-[15px] h-[15px] rounded-[50%] bg-[#456104] p-1  flex justify-center items-center text-[10px] font-bold text-white">
                 {props?.numb}
                </div>
                {/* message */}
                {/* role */}
                <p className="text-white text-[10px] mt-1 ml-1 font-bold">
                  {props?.role}
                </p>
                {/* role */}
              </div>
              {/*end second  */}
            </div>
          ))}
        </div>
        {/*end secondComponent */}
      </div>
    </div>
  );
};

export default ChatList;
