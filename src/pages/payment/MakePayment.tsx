import axios from "axios";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useSelector } from "react-redux";

const MakePayment = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const user = useSelector((state: any) => state?.user);
  const cart = useSelector((state: any) => state?.cart);

  const makePaymentApiCall = async () => {
    console.log("object");
    setToggle(true);
    await axios
      .post(`http://localhost:2003/api/v1/make-payment`, {
        email: user?.email,
        amount: 10000,
        // {
        //    cart ?.reduce((a, b) => {
        //           return a + b;
        //         }, 0)},
        // }
      })
      .then((res: any) => {
        console.log("object", res.data.data);
        window.location.replace(res.data.data.authorization_url);
      })
      .finally(() => {
        setToggle(false);
      });
  };
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
      <div className="w-[50%] h-[200px] p-5 bg-[white] rounded ">
        <button
          className="w-[100%] h-[50px] mt-[20px] rounded p-[10px]   hover:cursor-pointer hover:scale-[1.05] transition-all duration-500 flex justify-center items-center gap-2 "
          //   type="submit"
          style={{
            background: "rgba(179, 184, 231, 0.25)",
            boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37  )",
            backdropFilter: "blur( 4px )",
            WebkitBackdropFilter: " blur( 4px )",
          }}
          onClick={makePaymentApiCall}
        >
          {" "}
          {toggle ? (
            <div>
              <FaSpinner />
            </div>
          ) : (
            <div>Proceed</div>
          )}
        </button>
      </div>
    </div>
  );
};

export default MakePayment;
