import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { signInUser } from "../../api/UserApi";
import { BeatLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { logInUser } from "../../components/global/redux";

const UserSignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const schema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (data: any) => {
    setLoading(true);
    const { email, password } = data;
    console.log("handle submit", { email, password });
    signInUser({ email, password }).then((res: any) => {
      dispatch(logInUser(res));
      reset();
      navigate("/user");
    });
    setLoading(false);
  });

  return (
    <div
      className="w-[100%] h-[100vh] flex justify-center items-center  "
      style={{
        background: "rgba(179, 184, 231, 0.25)",
        boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37  )",
        backdropFilter: "blur( 4px )",
        WebkitBackdropFilter: " blur( 4px )",
      }}
    >
      <form
        onSubmit={onSubmit}
        className="w-[350px] small:w-[70%] mobile:w-[70%] p-[20px]  overflow-hidden rounded bg-[white] min-h-[300px]  "
      >
        <div className="text-center font-semibold text-[16px] text-[#b5b1b1] ">
          Sign In User
        </div>

        <input
          className="w-[100%] h-[50px] mt-[20px] rounded p-[10px] outline-none placeholder:text-[12px] placeholder:text-[#d1cdcd] bg-transparent border-[2px] text-[12px] "
          type="email"
          placeholder="email "
          {...register("email")}
        />

        <input
          className="w-[100%] h-[50px] mt-[20px] rounded p-[10px] outline-none placeholder:text-[12px] placeholder:text-[#d1cdcd] bg-transparent border-[2px] text-[12px] "
          type="password"
          placeholder="password  "
          {...register("password")}
        />

        <button
          className="w-[100%] h-[50px] mt-[20px] rounded p-[10px]  bg-slate-400  hover:cursor-pointer hover:scale-[1.05] transition-all duration-500 "
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
            <div>Sign In</div>
          )}
        </button>
        <div className="w-[100%] h-[50px] mt-[20px] flex justify-center gap-2 text-[12px] ">
          <div>Don't have an account?</div>
          <Link to="/user-sign-up">
            <div>Sign up</div>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UserSignIn;
