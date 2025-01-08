import { Link, useNavigate, useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { createUser } from "../../api/UserApi";
import { PulseLoader } from "react-spinners";
import { useSelector } from "react-redux";

const UserRegistration = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const adminID = useSelector((state: any) => state.user);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const storedRole = user?.role;
  //   setRole(storedRole?.ADMIN);
  // }, []);

  const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().required().lowercase(),
    address: yup.string().required(),
    accountNumb: yup.string().required(),
    telNumb: yup.string().required(),
    password: yup.string().required(),
    confirmPassword: yup
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
    if (adminID.role === "ADMIN") {
      createUser(data, adminID?._id).then(() => {
        navigate("/user-sign-in");
      });
    } else {
      console.log("error admin");
    }

    setLoading(false);
  });

  return (
    <div
      className="w-[100%] h-[100vh] flex justify-center items-center"
      style={{
        background: "rgba(179, 184, 231, 0.25)",
        boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37  )",
        backdropFilter: "blur( 4px )",
        WebkitBackdropFilter: " blur( 4px )",
        // border:"1px solid rgba( 255, 255, 255, 0.18 )",
      }}
    >
      <form
        onSubmit={onSubmit}
        className="w-[350px] small:w-[80%] mobile:w-[80%] mobile:text-[14px] p-[20px] rounded bg-[white] min-h-[400px]  "
      >
        <div className="text-center font-semibold text-[18px] text-[#b5b1b1] small:text-[14px] ">
          Registration
        </div>

        <input
          className="w-[100%] h-[40px] mt-[20px] rounded p-[10px] outline-none placeholder:text-[12px] placeholder:text-[#d1cdcd] bg-transparent border-[2px] text-[12px] "
          type="text"
          placeholder="Jecinta  "
          {...register("name")}
        />
        <input
          className="w-[100%] h-[40px] mt-[20px] rounded p-[10px] outline-none placeholder:text-[12px] placeholder:text-[#d1cdcd] bg-transparent border-[2px] text-[12px] "
          type="text"
          placeholder="Your Address  "
          {...register("address")}
        />
        <input
          className="w-[100%] h-[40px] mt-[20px] rounded p-[10px] outline-none placeholder:text-[12px] placeholder:text-[#d1cdcd] bg-transparent border-[2px] text-[12px] "
          type="text"
          placeholder="Account Number "
          {...register("accountNumb")}
        />
        <input
          className="w-[100%] h-[40px] mt-[20px] rounded p-[10px] outline-none placeholder:text-[12px] placeholder:text-[#d1cdcd] bg-transparent border-[2px] text-[12px] "
          type="email"
          placeholder="email "
          {...register("email")}
        />
        <input
          className="w-[100%] h-[40px] mt-[20px] rounded p-[10px] outline-none placeholder:text-[12px] placeholder:text-[#d1cdcd] bg-transparent border-[2px] text-[12px] "
          type="text"
          placeholder="Telephone Number "
          {...register("telNumb")}
        />
        <input
          className="w-[100%] h-[40px] mt-[20px] rounded p-[10px] outline-none placeholder:text-[12px] placeholder:text-[#d1cdcd] bg-transparent border-[2px] text-[12px] "
          type="password"
          placeholder="password "
          {...register("password")}
        />
        <input
          className="w-[100%] h-[40px] mt-[20px] rounded p-[10px] outline-none placeholder:text-[12px] placeholder:text-[#d1cdcd] bg-transparent border-[2px] text-[12px] "
          type="password"
          placeholder="confirmPassword "
          {...register("confirmPassword")}
        />

        <button
          className="w-[100%] h-[40px] mt-[20px] rounded p-[10px]  hover:cursor-pointer hover:scale-[1.05] transition-all duration-500 "
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
              <PulseLoader color="#456104" />
            </div>
          ) : (
            <div>Sign Up</div>
          )}
        </button>
        <div className="w-[100%] h-[50px] mt-[20px] flex justify-center gap-2 text-[12px] ">
          <div>Already have an account?</div>
          <Link to="/user-sign-in">
            <div>Sign in</div>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UserRegistration;
