import {AiOutlineSearch,AiOutlineArrowDown,AiOutlineTrademarkCircle,AiOutlineMail,AiOutlinePlusCircle} from "react-icons/ai"

const UserOrders = () => {
  return (
    <div className="w-[100%] h-[100%] flex justify-center bg-[#f1eeee] small:w-[100%] ">
        <div className="w-[90%] small:w-[100%] mobile:w-[100%] ">
            <div className="text-[20px] font-semibold small:mt-[30px] mobile:mt-[30px] ">Orders</div>
            <div className=" mt-[50px] small:mt-[30px] mobile:mt-[30px] w-[40%] h-[50px] small:w-[70%] mobile:w-[70%] flex items-center rounded ">
                <AiOutlineSearch 
                className="text-[23px] text-[#b6b3b3] w-[15%]   "
                />
                <input
                className="h-[100%] w-[85%] outline-none border-none bg-transparent placeholder:text-[12px] placeholder:font-semibold text-[12px] "
                placeholder="Search orders by #, name, or email..."
                type="text" />
            </div>
            {/* orders */}
        <div className="w-[100%] mobile:w-[100%] small:h-[100px] mobile:h-[100px] small:w-[100%] flex  mt-[20px] ">

    {/* input# */}
        <div className="w-[12%] h-[100%]  ">
    <div className="w-[100%] h-[50px] flex gap-[10px] small:gap-[2px] overflow-hidden items-center text-[14px] font-semibold bg-[#e4e2e2]   ">
        <input type="checkbox" className="hover:cursor-pointer ml-[10px] " />
        <div>#</div>
    </div>
            {/* s/n */}
            <div className="w-[100%] h-[70px] flex gap-[10px] small:gap-[2px] hover:cursor-pointer overflow-hidden items-center text-[14px] font-semibold  ">
        <input type="checkbox"  className="hover:cursor-pointer ml-[10px] " />
        <div className="">#11</div>
    </div>
            {/*end s/n */}

        </div>
            {/* end input# */}
            {/* date */}
            <div className="w-[15%]   h-[100%] mobile:w-[30%] small:w-[30%] ">
              <div className="w-[100%] h-[50px] flex items-center text-[13px] gap-[10px] font-semibold bg-[#e4e2e2] ">
              <div className="">
                    Date
                </div>
                <AiOutlineArrowDown/>
              </div>
              <div className="w-[100%] h-[70px] small:text-[10px] mobile:text-[10px] flex items-center text-[13px] gap-[10px] font-semibold overflow-hidden ">
              <div className="">
                    1 Oct,24.
                </div>
                <div>I4:42</div>
              </div>
            </div>
            {/*end date */}
            {/* status */}
            <div className="w-[12%] h-[100%] mobile:w-[20%] small:w-[20%] ">
              <div className="w-[100%] h-[50px] text-[13px]  font-semibold flex items-center  bg-[#e4e2e2]">
              <div className="">
                    Status
                </div>
                
              </div>
              <div className="w-[100%] h-[70px] flex items-center text-[13px] small:text-[10px] gap-[10px] font-semibold overflow-hidden ">
              <AiOutlineTrademarkCircle/>
                <div>Paid</div>
              </div>
            </div>
            {/*end status */}
            {/* avatar */}
            <div className="w-[30%] h-[100%] mobile:hidden small:hidden  ">
    <div className="w-[100%] h-[50px] flex gap-[10px] overflow-hidden items-center text-[14px] font-semibold bg-[#e4e2e2] ">
        <AiOutlinePlusCircle/>
        <div>Customer</div>
    </div>
            {/* s/n */}
            <div className="w-[100%] h-[70px] flex gap-[10px] hover:cursor-pointer overflow-hidden items-center text-[14px] font-semibold  ">
       <img className="w-[35px] h-[40px] rounded-[50%] hover:cursor-pointer hover:scale-[1.05] transition-all duration-700 "
        src="https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg" alt="pinimg" />
        <div>Onyemaobi Jecinta Ugochi</div>
    </div>
            {/*end s/n */}

        </div>
            {/*end avatar */}
            {/* email */}
            <div className="w-[30%] mobile:w-[40%] small:w-[40%] h-[100%]  ">
    <div className="w-[100%] h-[50px] flex gap-[10px] overflow-hidden items-center text-[14px] font-semibold  bg-[#e4e2e2]">
        <AiOutlineMail/>
        <div>Email</div>
    </div>
            {/* mail */}
            <div className="w-[100%] h-[70px] flex gap-[10px] hover:cursor-pointer overflow-hidden items-center text-[13px] font-semibold ">
        
        <div>onyemaobijecintaugochi@gmail.com</div>
    </div>
            {/*end mail */}

        </div>
            {/*end email */}
            
        </div>
            {/* orders */}
        </div>
    </div>
  )
}

export default UserOrders