
const UserNotification = () => {
  return (
    <div className="w-[330px] min-h-[200px] rounded-md bg-[white] flex justify-center ">
      <div className="w-[90%] ">
        <div  className="text-[18px] font-bold small:text-[14px] mobile:text-[14px] mobilel:[1px] text-[#456104] ">Your Notifications</div>
        {/* notification */}
        <div className="w-[100%] h-[70px] rounded-md flex justify-between mt-[20px] items-center cursor-pointer hover:bg-[whitesmoke] ">
          {/* left */}
          <div className=" flex items-center gap-[10px] ">
            {/* first */}
            <div className="">
              <img className="w-[40px] h-[50px] rounded-[50%]   " src="https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg" alt="ping" />
            </div>
            {/*end first */}
            {/* second */}
            <div className=" ">
             <div className="flex gap-[2px]">
             <div className="text-[10px] font-bold ">Onyemaobi Jecinta</div>
              <div className="text-[10px] font-semibold">Buyer</div>
              <div className="text-[10px] font-medium">order a watch</div>
              </div> 
              <div className="flex gap-[7px] mt-[8px] ">
                <div className="text-[10px] font-semibold ">Monday</div>
                <div className="font-bold text-[10px] ">11:30am</div>
                </div>   
            </div>
            {/*end second */}
          </div>
          {/*end left */}
          {/* right */}
          <div>
            <div className="w-[6px] h-[8px] rounded-[50%] bg-[#456104] mt-[7px] "></div>
            <div className="text-[10px] font-medium mt-[10px] ">2 hours ago</div>
          </div>
          {/* end right */}
        </div>
        {/*end notification */}
        {/* notification */}
        <div className="w-[100%] h-[70px] rounded-md flex justify-between mt-[20px] items-center cursor-pointer hover:bg-[whitesmoke] ">
          {/* left */}
          <div className=" flex items-center gap-[10px] ">
            {/* first */}
            <div className="">
              <img className="w-[40px] h-[50px] rounded-[50%]   " src="https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg" alt="ping" />
            </div>
            {/*end first */}
            {/* second */}
            <div className=" ">
             <div className="flex gap-[2px]">
             <div className="text-[10px] font-bold ">Onyemaobi Jecinta</div>
              <div className="text-[10px] font-semibold">Buyer</div>
              <div className="text-[10px] font-medium">order a watch</div>
              </div> 
              <div className="flex gap-[7px] mt-[8px] ">
                <div className="text-[10px] font-semibold ">Friday</div>
                <div className="font-bold text-[10px] ">11:30am</div>
                </div>   
            </div>
            {/*end second */}
          </div>
          {/*end left */}
          {/* right */}
          <div>
            <div className="w-[6px] h-[8px] rounded-[50%] bg-[#456104] mt-[7px] "></div>
            <div className="text-[10px] font-medium mt-[10px] ">2 minutes ago</div>
          </div>
          {/* end right */}
        </div>
        {/*end notification */}
      </div>

    </div>
  )
}

export default UserNotification