import ProductHeader from "./ProductHeader";

const UserProduct = () => {

  const state = [
    {
    title:"Orange",
    image:`https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg`,
    amount:"2,000"
  },
    {
    title:"Orange",
    image:`https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg`,
    amount:"2,000"
  },
    {
    title:"Orange",
    image:`https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg`,
    amount:"2,000"
  },
    {
    title:"Orange",
    image:`https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg`,
    amount:"2,000"
  },
  
    {
    title:"Orange",
    image:`https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg`,
    amount:"2,000"
  },
    {
    title:"Orange",
    image:`https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg`,
    amount:"2,000"
  },

    {
    title:"Orange",
    image:`https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg`,
    amount:"2,000"
  },
    {
    title:"Orange",
    image:`https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg`,
    amount:"2,000"
  },

]

  return (
 <div>
          <ProductHeader/>
 <div className="w-[100%] h-[100%] flex justify-center ">

  <div className="w-[90%] small:w-[90%] mobile:w-[90%]   ">
    <div className="mt-[20px]">hello Onyemaobi</div>
    <div className="text-[20px] mt-[20px] font-bold text-[#456104] ">Welcome to crystal store</div>
  <div className="flex items-center gap-[35px] mobile:gap-[40px] small:w-[100%] small:gap-[] flex-wrap   ">
  {/* card */}
  {
  state?.map((props:any)=>(
    <div className="w-[200px] h-[230px] border mt-[30px] rounded-[10px] overflow-hidden small:w-[150px] mobile:w-[150px] ">
    {/* image */}
    <img 
    className="w-[100%] h-[60%] rounded-sm transition-all hover:scale-[1.1] hover:cursor-pointer  duration-700 "
    src={props?.image} alt="pinimg" /> 
    {/*end image */}
    {/* name */}
  <div className="w-[100%] mt-[15px]  ">
  <div className="text-[13px] mt-[-10px] font-bold text-center
  ">Orang{props?.name}</div>
  
  </div>        {/*end name */}
  
  
  <div className=" w-[100%] h-[20px]  flex justify-center  gap-[20px] hover:cursor-pointer mb-[5px]  ">
        <div className="text-[12px]  ">
          {"⭐".repeat(5)}
        </div>
      <div className="font-bold text-[12px] ">{props?.amount}</div>
    </div>
  
        <div className="flex  justify-end w-[100%] ">
  <div
    className="flex items-center h-[40px] mx-1 text-white bg-hover:cursor-pointer bg-[#456104] px-3 hover:cursor-pointer duration-700 transition-all hover:scale-[1.05] rounded-sm text-[12px] text-center leading-tight">
   Add to Cart
  </div>
  </div>
  {/* card */}
  </div>
  ))
  }
  </div>
  </div>
  </div>

  </div>
  );
};

export default UserProduct;
