import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const VerifyPayment = () => {
  const user = useSelector((state: any) => state?.user);

  const { search } = useLocation();

  const refID = search.split("reference=")[1];

  const VerifyPaymentApiCall = async () => {
    axios
      // .post("https://boundarymarket.onrender.com/api/v1/verify-payment", {
      .post("http://localhost:2003/api/v1/verify-payment", {
        refNumb: refID,
        email: user?.email,
      })
      .then((res) => {
        console.log("return", res);
        if (res.data.data.data.gateway_response === "Successful") {
          console.log("Payment verified successfully!");
        } else {
          console.log(
            "Payment verification failed:",
            res.data.data.data.gateway_response
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    VerifyPaymentApiCall();
  }, []);

  return (
    <div
      className="flex justify-center items-center w-[100%] h-[100vh] "
      style={{
        background: "rgba(179, 184, 231, 0.25)",
        boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37  )",
        backdropFilter: "blur( 4px )",
        WebkitBackdropFilter: " blur( 4px )",
      }}
    >
      <div className="w-[45%] min-h-[80px] p-5 bg-[white] rounded ">
        <div className="text-[15px] small:text-[12px] mobile:text-[12px] mobilel:text-[12px] font-bold text-[#456104] ">
          {user?.name} Your Payment Have been verified and is SuccessFul
        </div>
        {/* <FaThumbsUp className="text-[20px] font-bold text-[#fa9608] " />
        <button>verifyied</button> */}
      </div>
    </div>
  );
};

export default VerifyPayment;
