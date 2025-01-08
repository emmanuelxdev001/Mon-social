import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateUserInfo } from "../../api/UserApi";
import { logInUser } from "../../components/global/redux";

const BuyerProfile = () => {
  const data = useSelector((state: any) => state.myBuyer);
  const dispatch = useDispatch();
  const [image, setImage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [avatar, setAvatar] = useState("");

  const changeImage = (e: any) => {
    const file = e.target.files[0];
    const readFile = URL.createObjectURL(file);
    setImage(file);
    setAvatar(readFile);
  };

  const updateProfile = async () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("details", desc);
    await updateUserInfo(data?._id, formData).then((res) => {
      dispatch(logInUser(res));
    });
  };

  return (
    <div className="w-[100%] h-[88vh] bg-[#e0dede] flex justify-center items-center ">
      <div className="w-[100%] h-[500px] mobile:min-h-[720px] flex justify-center items-center mobile:flex-col mobile:p-5  ">
        <div className="w-[50%] h-[100%] mobile:w-[100%] ">
          <div className="w-[80%] min-h-[80%] bg-white rounded p-5 mt-[20px] ">
            <center className="text-[17px] small:text-[13px] font-semibold small:font-bold mobile:text-[14px] ">
              Update Profile
            </center>
            <input
              className="w-[100%] text-[12px] h-[40px] p-2 bg-[#e0dede] outline-none mt-[20px]  "
              placeholder=" name"
              type="text"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
            <input
              className="w-[100%] text-[12px] h-[50px] p-2 bg-[#e0dede] outline-none mt-[20px]  "
              placeholder="tell us about your self"
              type="text"
              value={desc}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDesc(e.target.value)
              }
            />

            <div className=" flex justify-center flex-col items-center ">
              <img
                className=" w-[80px] h-[100px] rounded-[50%] object-cover mt-[20px] "
                src={
                  avatar
                    ? avatar
                    : "https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg"
                }
                alt="pinimg"
                id="image"
              />
              <input
                type="file"
                id="imagePix"
                className="hidden"
                onChange={changeImage}
              />
              <label
                className="w-[70%] h-[35px] rounded-[5px] border-[2px] mt-[20px] flex justify-center items-center text-[12px] font-semibold text-[#18fb18a9] hover:scale-[1.05] duration-700 transition-all hover:cursor-pointer overflow-hidden small:text-[13px] mobile:text-[13px] "
                htmlFor="imagePix"
              >
                Upload Image{" "}
              </label>
            </div>

            <div className="w-[100%] h-[35px] rounded-[5px] bg-[#18fb18a9] mt-[20px] flex justify-center items-center  font-semibold text-[black] hover:scale-[1.05] duration-700 transition-all hover:cursor-pointer overflow-hidden mobile:text-[13px] ">
              <button
                onClick={() => {
                  updateProfile();
                }}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerProfile;