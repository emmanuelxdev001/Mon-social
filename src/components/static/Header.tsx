
const Header = () => {
    return (
      <div className="w-[100%] h-[70px] flex justify-center  ">
          < div className="w-[90%] flex gap-[50px] items-center ">
          <div className="text-[25px] font-bold  small:text-[12px] hover:cursor-pointer mobile:text-[17px] text-[#456104] ">BoundaryMarket</div>
          <div className="w-[400px] h-[50px] border-[2px] border-[#456104] rounded-[7px] p-1 small:w-[130px] mobile:w-[130px] text-[13px] font-semibold text-[#456104] ">
              <input 
              className="w-[100%] h-[100%] outline-none border-none text-[12px] "
              placeholder="#
              , name Search Store"
              type="search " />
          </div>
          </div>
          </div>
    )
  }
  
  export default Header