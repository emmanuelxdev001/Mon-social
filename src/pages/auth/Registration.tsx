import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { BeatLoader } from "react-spinners";
import { useState } from "react";
import { createBuyer } from "../../api/UserApi";

const Registration = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const schema = yup.object({
    name: yup.string().required(),
    address: yup.string().required(),
    telNumb: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    confirm: yup
      .string()
      .required()
      .oneOf([yup.ref("password")]),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (data: any) => {
    setLoading(true);
    console.log("handle submit", data);
    createBuyer(data).then(() => {
      navigate("/sign-in");
    });
    setLoading(false);
  });
  // console.log(onSubmit)

  return (
    <div
      className="w-[100%] h-[100vh] flex justify-center items-center"
      style={{
        background: "rgba(179, 184, 231, 0.25)",
        boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37  )",
        backdropFilter: "blur( 4px )",
        WebkitBackdropFilter: " blur( 4px )",
      }}
    >
      <form
        onSubmit={onSubmit}
        className="w-[350px] small:w-[80%] mobile:w-[80%] mobile:text-[14px] p-[20px] small:h-[350px] rounded bg-[white] min-h-[400px]  "
      >
        <div className="text-center font-semibold text-[18px] text-[#b5b1b1] small:text-[14px] ">
          Registration
        </div>
        <input
          className="w-[100%] small:h-[35px] h-[50px] mt-[20px] rounded p-[10px] outline-none placeholder:text-[12px] placeholder:text-[#d1cdcd] bg-transparent border-[2px] text-[12px] "
          type="text"
          placeholder="Jecinta "
          {...register("name")}
        />
        <input
          className="w-[100%] h-[50px] mt-[20px] rounded p-[10px] outline-none placeholder:text-[12px] placeholder:text-[#d1cdcd] bg-transparent border-[2px] text-[12px] "
          type="text"
          placeholder="Your Address  "
          {...register("address")}
        />
        <input
          className="w-[100%] h-[50px] mt-[20px] rounded p-[10px] outline-none placeholder:text-[12px] placeholder:text-[#d1cdcd] bg-transparent border-[2px] text-[12px] "
          type="text"
          placeholder="Telephone Number  "
          {...register("telNumb")}
        />
        <input
          className="w-[100%] h-[50px] small:h-[35px] mt-[20px] rounded p-[10px] outline-none placeholder:text-[12px] placeholder:text-[#d1cdcd] bg-transparent border-[2px] text-[12px] "
          type="email"
          placeholder="Jecinta@gmail.com  "
          {...register("email")}
        />
        <input
          className="w-[100%] h-[50px] small:h-[35px] mt-[20px] rounded p-[10px] outline-none placeholder:text-[12px] placeholder:text-[#d1cdcd] bg-transparent border-[2px] text-[12px] "
          type="password"
          placeholder="Password "
          {...register("password")}
        />
        <input
          className="w-[100%] h-[50px] small:h-[35px] mt-[20px] rounded p-[10px] outline-none placeholder:text-[12px] placeholder:text-[#d1cdcd] bg-transparent border-[2px] text-[12px] "
          {...register("confirm")}
          type="password"
          placeholder="confirmPassword   "
        />

        <button
          className="w-[100%] small:h-[35px] h-[50px] mt-[20px] rounded p-[10px] hover:cursor-pointer hover:scale-[1.05] transition-all duration-500 "
          type="submit"
          style={{
            background: "rgba(179, 184, 231, 0.25)",
            boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37  )",
            backdropFilter: "blur( 4px )",
            WebkitBackdropFilter: " blur( 4px )",
          }}
        >
          {loading ? (
            <div>
              <BeatLoader color="#456104" />
            </div>
          ) : (
            <div>Sign Up</div>
          )}
        </button>
        <div className="w-[100%] h-[50px] mt-[20px] flex justify-center gap-2 text-[12px] ">
          <div>Already have an account?</div>
          <Link to="/sign-in">
            <div>Sign in</div>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Registration;
