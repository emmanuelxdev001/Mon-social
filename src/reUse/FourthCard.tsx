import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const FourthCard = () => {

    const data = [
        {
            image:`https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg`,
            tittle:"Tomato Store",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg`,
            tittle:"Okro Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg`,
            tittle:"Rice Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg`,
            tittle:"Pineapple Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg`,
            tittle:"Coconut Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg`,
            tittle:"plantain Store",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg`,
            tittle:"Pepper Store",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg`,
            tittle:"Okro Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg`,
            tittle:"Rice Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg`,
            tittle:"Pineapple Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg`,
            tittle:"Coconut Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg`,
            tittle:"Pepper Store",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg`,
            tittle:"Tomato Store",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg`,
            tittle:"Okro Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg`,
            tittle:"Rice Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg`,
            tittle:"Pineapple Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg`,
            tittle:"Coconut Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg`,
            tittle:"Pepper Store",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg`,
            tittle:"Ugwu Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg`,
            tittle:"BitterLeaf Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg`,
            tittle:"Onion Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg`,
            tittle:"WaterLeaf Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:"",
            tittle:"Tomato Store",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:"",
            tittle:"Okro Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:"",
            tittle:"Rice Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:"",
            tittle:"Pineapple Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:"",
            tittle:"Coconut Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:"",
            tittle:"Pepper Store",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:"",
            tittle:"Ugwu Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:"",
            tittle:"BitterLeaf Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:"",
            tittle:"Onion Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:"",
            tittle:"WaterLeaf Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
    ]
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ],
      };

  return (
    <div className="w-[100%] ">
        <div className="  mt-[30px] w-[100%] gap-20 ">
        <Slider {...settings}>
       <div className="h-[300px] overflow-hidden p-[10px] rounded bg-[#504f4f] w-[250px] small:text-[15px] ml-[20px] mr-[20px] small:w-[250px] ">
              <div className="flex justify-center gap-2 ">
                <div className="text-[#456104] font-semibold text-[20px] ">Recent</div>
                <div className="text-[white] font-semibold text-[20px] ">Project</div>
              </div>
              <div className="w-[100%] text-[13px] font-medium text-[white] mt-[20px] text-center ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione ea ullam ab. Doloribus maxime ad dolore accusamus illum eos eligendi porro corporis omnis reprehenderit, ea sint officiis beatae minima magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis impedit velit. </div>
                <div className="p-2 text-[14px] h-[40px] rounded hover:scale-[1.05] text-white transition-all duration-700 bg-[#456104#18fb18a9] hover:cursor-pointer text-center mt-[30px] font-medium ">
                    <button>Lorem.</button>
                </div>
            </div>
          
           {
                data?.map((props:any)=>(
                    <div className="h-[300px] mr-[50px] overflow-hidden rounded w-[250px] mx-4 !important ">
                <img
                className="h-[50%] w-[100%] "
                 src={props?.image} alt="pinimg" />
                  <div className=" text-[15px] text-[#504f4f] font-semibold mt-[15px] ">{props?.tittle}</div>
            <div className="font-[meium] w-[100%] mt-[20px] text-[#5d5c5c] text-[13px] ">{props?.text}</div>
            <div className="p-2 text-[14px] h-[40px] rounded hover:scale-[1.05] text-white transition-all duration-700 bg-[#456104] text-center mt-[20px] font-medium hover:cursor-pointer ">
                    <button>{props?.butt}</button>
                </div>
            </div>
                ))
            }
           </Slider>
        </div>
    </div>
  )
}

export default FourthCard