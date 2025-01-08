import { IoIosSearch } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { useSelector } from "react-redux";
// import { useState } from "react";

const ProductHeader = () => {
  // const toggle = useSelector((state: any) => state?.myBuyer);
  const cart = useSelector((state: any) => state.cart);
  // const [toggles, setToggle] = useState<boolean>(false);
  // const dispatch = useDispatch();

  // const setToggleTrue = () => {
  //   toggle(toggles);
  //   setToggle(dispatch(toggle(true)));
  // };
  // console.log(toggle);
  return (
    <div className="w-[100%] h-[90px] bg-[#456104] flex justify-center ">
      <div className="w-[90%] small:w-[100%] mobile:w-[100%] mobilel:w-[100%] flex justify-between items-center ">
        <Link to="/">
          <h3 className="text-4xl small:hidden mobile:hidden mobilel:hidden  text-[white] small:text-[px] mobile:-[0px] ">
            BoundaryMarket
          </h3>
        </Link>
        <div className="small:flex mobile:flex mobilel:flex justify-center hidden items-center gap-[5px] mobilel:gap-[10px] mobilel:mr-4 ">
          <div className="relative">
            <CiMenuBurger
              fontSize={20}
              color="#fd8605"
              fontWeight={800}
              className="small:ml-[5px] "
            />
            <div
              className=" w-[100px] h-[70px] border-[1px] bg-[#456104] absolute rounded left-1 border-[#fd8605]  "
              // onClick={setToggleTrue}
            >
              <Link to="/check-out">
                <div className="flex  gap-1 justify-center items-center mt-2 ">
                  <div className="relative">
                    <FaCartPlus
                      className="hover:cursor-pointer hover:text-[#fd8605] text-[19px] "
                      fontSize={30}
                      color="white"
                    />
                    <div className="absolute hover:cursor-pointer text-white p-1 rounded-[50%] h-[10px] flex justify-center  items-center bg-[#fd8605] text-[8px] font-bold  top-[0] animate-bounce right-0 ">
                      {cart?.length}
                    </div>
                  </div>
                  <div
                    className="text-[white] font-bold hover:cursor-pointer hover:text-[#fd8605] "
                    // onClick={()=>{
                    //   dispatch(add)
                    // }}
                  >
                    Cart
                  </div>
                </div>
              </Link>
              {/* account */}
              <div className=" flex justify-center gap-1 items-center text-[white] border-[#fd8605] h-[35px] p-[5px] text-[13px] border-[1px] ">
                <VscAccount className="cursor-pointer " fontSize={10} />
                <Link to={`/buyer`}>
                  <p className="hover:cursor-pointer hover:text-[#fd8605] font-bold text-[11px] ">
                    Account
                  </p>
                </Link>
                <Link to={`/buyer`}>
                  <MdOutlineKeyboardArrowDown
                    className="hover:cursor-pointer"
                    fontSize={10}
                  />
                </Link>
              </div>
              {/* account */}
            </div>
          </div>
          <h1 className="text-[white] text-lg ">BmMarket</h1>
        </div>
        {/* search */}
        <div className=" flex gap-2 items-center mobilel:mr-4  ">
          <div className=" flex justify-between items-center w-[300px] border-white border-[2px] small:w-[130px] mobile:w-[130px] mobilel:w-[130px] rounded-sm">
            <IoIosSearch fontSize={20} color="white" />

            <input
              className="w-[250px] h-[50px] rounded-sm outline-none border-none bg-transparent text-[12px] font-bold text-white ml-[5px] small:h-[35px] mobile:h-[35px] mobilel:h-[35px]  "
              type="search"
              placeholder="Search Products"
              name=""
              id=""
            />
          </div>
          <button
            type="submit"
            className="p-2 small:p-[5px] mobilel:px-[5px] mobile:px-[5px] small:text-[10px] mobile:text-[10px] mobilel:text-[10px] bg-[#fd8605] text-[white] rounded-sm text-[13px] font-semibold h-[50px] small:mr-[10px] mobile:mr-[10px] small:h-[35px] mobilel:h-[35px] mobile:h-[35px] "
          >
            SEARCH
          </button>
        </div>
        {/*end search */}
        {/* account */}
        <div className="flex gap-3 mobile:hidden small:hidden mobilel:hidden justify-center items-center ">
          {/* firstCom */}
          <div className=" flex justify-center gap-1 items-center text-[white] border-[#fd8605] h-[50px] p-1 text-[13px] border-[1px] ">
            <VscAccount className="cursor-pointer" fontSize={20} />
            <Link to={`/buyer`}>
              <p className="hover:cursor-pointer hover:text-[#fd8605] font-bold text-[14px] ">
                Account
              </p>
            </Link>
            <Link to={`/buyer`}>
              <MdOutlineKeyboardArrowDown
                className="hover:cursor-pointer"
                fontSize={20}
              />
            </Link>
          </div>
          {/*end firstCom */}
          {/* secondCom */}
          <Link to="/check-out">
            <div className="flex  gap-1 justify-center items-center ">
              <div className="relative">
                <FaCartPlus
                  className="hover:cursor-pointer hover:text-[#fd8605] "
                  fontSize={30}
                  color="white"
                />
                <div className="absolute hover:cursor-pointer text-white p-1 rounded-[50%] h-[15px] flex justify-center  items-center bg-[#fd8605] text-[10px] font-bold top-[0] animate-bounce right-0 ">
                  {cart?.length}
                </div>
              </div>
              <div
                className="text-[white] font-bold hover:cursor-pointer hover:text-[#fd8605] "
                // onClick={()=>{
                //   dispatch(add)
                // }}
              >
                Cart
              </div>
            </div>
          </Link>
          {/* secondCom */}
        </div>
        {/*end account */}
      </div>
    </div>
  );
};

export default ProductHeader;
