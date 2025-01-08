import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../assets/WhatsApp Image 2024-08-21 at 10.32.23_f3df8c4a.jpg";
import img2 from "../../assets/WhatsApp Image 2024-08-21 at 10.32.24_99771cb7.jpg";
import img3 from "../../assets/WhatsApp Image 2024-08-21 at 10.32.23_2ada9d21.jpg";
import img4 from "../../assets/WhatsApp Image 2024-08-21 at 10.32.23_a84a05f7.jpg";
import img5 from "../../assets/WhatsApp Image 2024-08-21 at 10.32.22_b8d8c740.jpg";
import ing from "../../assets/WhatsApp Image 2024-08-15 at 15.30.44_69799592.jpg";
import ing3 from "../../assets/Download premium image of Black people having a video call via a digital tablet by McKinsey  about african american, young, black people, black friends, and african american friends 2027489.jpeg";
import { Link } from "react-router-dom";

const LandingPageHeader = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="grid grid-cols-1">
      <Slider {...settings}>
        <div className=" h-[95vh] small:w-[100%] mobile:small:w-[100%] small:h-[60vh] mobile:h-[60vh] relative   ">
          <img
            className=" w-[100%] h-[100%] object-cover shadow-md  "
            src={img}
            alt={img}
          />
          {/* navs */}
          <div className="w-[100%] h-[100px] flex justify-center items-center absolute top-0 z-50 ">
            <div className="w-[90%] flex items-center justify-end   ">
              <div className=" flex justify-center items-center gap-[30px] font-semibold small:gap-[10px] mobile:gap-[10px] mt-[30px] ">
                <Link to="/sign-up">
                  <button
                    className="px-4 py-2 h-[40px] border-[1px] border-[white] hover:cursor-pointer hover:scale-[1.1] duration-700  transition-all rounded-[10px] text-[white] text-[15px] small:p-2 small:text-[13px] mobile:p-2 mobile:text-[13px] "
                    type="button"
                  >
                    Register
                  </button>
                </Link>

                <Link to="/sign-in">
                  <button
                    className="px-4 py-2 h-[40px]  border-[white] hover:cursor-pointer hover:scale-[1.1] duration-700  transition-all rounded-[10px] text-[white] text-[15px] small:p-2 small:text-[13px] mobile:p-2 mobile:text-[13px] "
                    type="button"
                  >
                    Log in
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className=" h-[95vh] small:w-[100%] mobile:small:w-[100%] small:h-[60vh] mobile:h-[60vh] relative   ">
          <img
            className=" w-[100%] h-[100%] object-cover shadow-md  "
            src={img4}
            alt={img4}
          />
          {/* navs */}
          <div className="w-[100%] h-[100px] flex justify-center items-center absolute top-0 z-50 ">
            <div className="w-[90%] flex items-center justify-end   ">
              <div className=" flex justify-center items-center gap-[30px] font-semibold small:gap-[10px] mobile:gap-[10px] mt-[30px] ">
                <Link to="/sign-up">
                  <button
                    className="px-4 py-2 h-[40px] border-[1px] border-[white] hover:cursor-pointer hover:scale-[1.1] duration-700  transition-all rounded-[10px] text-[white] text-[15px] small:p-2 small:text-[13px] mobile:p-2 mobile:text-[13px] "
                    type="button"
                  >
                    Register
                  </button>
                </Link>

                <Link to="/sign-in">
                  <button
                    className="px-4 py-2 h-[40px]  border-[white] hover:cursor-pointer hover:scale-[1.1] duration-700  transition-all rounded-[10px] text-[white] text-[15px] small:p-2 small:text-[13px] mobile:p-2 mobile:text-[13px] "
                    type="button"
                  >
                    Log in
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className=" h-[95vh] small:w-[100%] mobile:small:w-[100%] small:h-[60vh] mobile:h-[60vh] relative   ">
          <img
            className=" w-[100%] h-[100%] object-cover shadow-md  "
            src={ing}
            alt={ing}
          />
          {/* navs */}
          <div className="w-[100%] h-[100px] flex justify-center items-center absolute top-0 z-50 ">
            <div className="w-[90%] flex items-center justify-end   ">
              <div className=" flex justify-center items-center gap-[30px] font-semibold small:gap-[10px] mobile:gap-[10px]  ">
                <Link to="/sign-up">
                  <button
                    className="px-4 py-2 h-[40px] border-[1px] border-[white] hover:cursor-pointer hover:scale-[1.1] duration-700  transition-all rounded-[10px] text-[white] text-[15px] small:p-2 small:text-[13px] mobile:p-2 mobile:text-[13px] "
                    type="button"
                  >
                    Register
                  </button>
                </Link>

                <Link to="/sign-in">
                  <button
                    className="px-4 py-2 h-[40px]  border-[white] hover:cursor-pointer hover:scale-[1.1] duration-700  transition-all rounded-[10px] text-[white] text-[15px] small:p-2 small:text-[13px] mobile:p-2 mobile:text-[13px] "
                    type="button"
                  >
                    Log in
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className=" h-[95vh] small:w-[100%] mobile:small:w-[100%] small:h-[60vh] mobile:h-[60vh] relative   ">
          <img
            className=" w-[100%] h-[100%] object-cover shadow-md  "
            src={img3}
            alt={img3}
          />
          {/* navs */}
          <div className="w-[100%] h-[100px] flex justify-center items-center absolute top-0 z-50 ">
            <div className="w-[90%] flex items-center justify-end   ">
              <div className=" flex justify-center items-center gap-[30px] font-semibold small:gap-[10px] mobile:gap-[10px] mt-[30px] ">
                <Link to="/sign-up">
                  <button
                    className="px-4 py-2 h-[40px] border-[1px] border-[#456104] hover:cursor-pointer hover:scale-[1.1] duration-700  transition-all rounded-[10px] text-[#456104] text-[15px] small:p-2 small:text-[13px] mobile:p-2 mobile:text-[13px] "
                    type="button"
                  >
                    Register
                  </button>
                </Link>

                <Link to="/sign-in">
                  <button
                    className="px-4 py-2 h-[40px] border-[1px]  border-[#fa9608] hover:cursor-pointer hover:scale-[1.1] duration-700  transition-all rounded-[10px] text-[#fa9608] text-[15px] small:p-2 small:text-[13px] mobile:p-2 mobile:text-[13px] "
                    type="button"
                  >
                    Log in
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-[95vh] small:w-[100%] mobile:small:w-[100%] small:h-[60vh] mobile:h-[60vh] relative   ">
          <img
            className=" w-[100%] h-[100%] object-cover shadow-md  "
            src={ing3}
            alt={ing3}
          />
          {/* navs */}
          <div className="w-[100%] h-[100px] flex justify-center items-center absolute top-0 z- ">
            <div className="w-[90%] flex items-center justify-between   ">
              <Link to="/">
                <h1 className="text-3xl font-bold small:text-[20px] text-[#456104] ">
                  Bm Market
                </h1>
              </Link>
              <input
                className="w-[300px] h-[50px] outline-none border-[1px] border-[#456104] small:hidden mobile:hidden rounded-[7px] text-[13px] font-semibold p-2 "
                placeholder="Search"
                type="search"
              />
              <div className=" flex justify-center items-center gap-[30px] font-semibold small:gap-[10px] mobile:gap-[10px] ">
                <Link to="/sign-up">
                  <button
                    className="px-4 py-2 h-[40px] border-[1px] border-[#fa9608] hover:cursor-pointer hover:scale-[1.1] duration-700  transition-all rounded-[10px] text-[#fa9608] text-[15px] small:p-2 small:text-[13px] mobile:p-2 mobile:text-[13px] "
                    type="button"
                  >
                    Register
                  </button>
                </Link>

                <Link to="/sign-in">
                  <button
                    className="px-4 py-2 h-[40px]  bg-[#fa9608] hover:cursor-pointer hover:scale-[1.1] duration-700  transition-all rounded-[10px] text-[white] text-[15px] small:p-2 small:text-[13px] mobile:p-2 mobile:text-[13px] "
                    type="button"
                  >
                    Log in
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className=" h-[95vh] small:w-[100%] mobile:small:w-[100%] small:h-[60vh] mobile:h-[60vh] relative   ">
          <img
            className=" w-[100%] h-[100%] object-cover shadow-md  "
            src={img2}
            alt={img2}
          />
          {/* navs */}
          <div className="w-[100%] h-[100px] flex justify-center items-center absolute top-0 z-50 ">
            <div className="w-[90%] flex items-center justify-end   ">
              <div className=" flex justify-center items-center gap-[30px] font-semibold small:gap-[10px] mobile:gap-[10px] mt-[30px] ">
                <Link to="/sign-up">
                  <button
                    className="px-4 py-2 h-[40px] border-[1px] border-[white] hover:cursor-pointer hover:scale-[1.1] duration-700  transition-all rounded-[10px] text-[white] text-[15px] small:p-2 small:text-[13px] mobile:p-2 mobile:text-[13px] "
                    type="button"
                  >
                    Register
                  </button>
                </Link>

                <Link to="/sign-in">
                  <button
                    className="px-4 py-2 h-[40px]  border-[white] hover:cursor-pointer hover:scale-[1.1] duration-700  transition-all rounded-[10px] text-[white] text-[15px] small:p-2 small:text-[13px] mobile:p-2 mobile:text-[13px] "
                    type="button"
                  >
                    Log in
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className=" h-[95vh] small:w-[100%] mobile:small:w-[100%] small:h-[60vh] mobile:h-[60vh]    ">
          <img
            className=" w-[100%] h-[100%] object-cover shadow-md  "
            src={img5}
            alt={img5}
          />
          {/* navs */}
          {/* <div className="w-[100%] h-[100px] flex justify-center items-center absolute top-0 z-50 ">
          <div className="w-[90%] flex items-center justify-end   ">
            <div className=" flex justify-center items-center gap-[30px] font-semibold small:gap-[10px] mobile:gap-[10px] mt-[30px] ">
              <Link to="/sign-up">
                <button
                  className="px-4 py-2 h-[40px] border-[1px] border-[white] hover:cursor-pointer hover:scale-[1.1] duration-700  transition-all rounded-[10px] text-[white] text-[15px] small:p-2 small:text-[13px] mobile:p-2 mobile:text-[13px] "
                  type="button"
                >
                  Register
                </button>
              </Link>

              <Link to="/sign-in">
                <button
                  className="px-4 py-2 h-[40px]  border-[white] hover:cursor-pointer hover:scale-[1.1] duration-700  transition-all rounded-[10px] text-[white] text-[15px] small:p-2 small:text-[13px] mobile:p-2 mobile:text-[13px] "
                  type="button"
                >
                  Log in
                </button>
              </Link>
            </div>
          </div>
        </div> */}
        </div>
      </Slider>
    </div>
  );
};

export default LandingPageHeader;
