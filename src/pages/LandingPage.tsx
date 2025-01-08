import ThirdCard from "../reUse/ThirdCard";
import SecondCard from "../reUse/SecondCard";
import Welcome from "../reUse/Welcome";
import FourthCard from "../reUse/FourthCard";
import FifthCard from "../reUse/FifthCard";
import SixthCard from "../reUse/SixthCard";
import SeventhCard from "../reUse/SeventhCard";
import LandingPageHeader from "../components/static/LandingpageHeader";

const LandingPage = () => {
  return (
    <div className="w-full h-[100%] ">
      <LandingPageHeader />

      <div className="w-[100%] mt-[40px] small:mt-[30px]   ">
        <Welcome />
      </div>
      <div className="w-[100%] mt-[40px]    ">
        <ThirdCard />
      </div>
      <div className="w-[100%] mt-[40px] ">
        <SeventhCard />
      </div>

      <div className="w-[100%] mt-[60px]    ">
        <SixthCard />
      </div>

      <div className="w-[100%] mt-[50px]  ">
        <FifthCard />
      </div>
    </div>
  );
};

export default LandingPage;
