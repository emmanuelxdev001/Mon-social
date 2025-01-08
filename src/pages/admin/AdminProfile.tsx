
const AdminProfile = () => {
  return (
    <div className="w-[100%] h-[100vh] bg-[#e0dede] flex justify-center items-center ">
      <div className="w-[100%] h-[500px] mobile:min-h-[720px] flex justify-center items-center mobile:flex-col mobile:p-5 ">
      
        <form className="w-[50%] h-[100%] mobile:w-[100%] ">
          <div className="w-[80%] min-h-[80%] bg-white rounded p-5 mt-[20px] ">
            <center className="text-[17px] small:text-[13px] font-semibold small:font-bold mobile:text-[14px] ">Update Profile</center>
            <input
              className="w-[100%] text-[12px] h-[40px] p-2 bg-[#e0dede] outline-none mt-[20px]  "
              placeholder=" FullName"
              type="text"
            />

            <div className=" flex justify-center flex-col items-center ">
                <img className=" w-[80px] h-[100px] rounded-[50%] object-cover mt-[20px] "
                 src="https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg" alt="ping"
                 id="image"
                 />
                 <input type="file" id="image" hidden />
                 <label
                 className="w-[70%] h-[35px] rounded-[5px] border-[2px] mt-[20px] flex justify-center items-center  font-semibold text-[#456104] hover:scale-[1.05] duration-700 transition-all hover:cursor-pointer overflow-hidden small:text-[13px] mobile:text-[13px] text-[12px] "
                 id="image"
                  htmlFor="image">Upload Image </label>
            </div>

            <div className="w-[100%] h-[35px] rounded-[5px] bg-[#456104] mt-[20px] flex justify-center items-center  font-semibold text-[black] hover:scale-[1.05] duration-700 transition-all hover:cursor-pointer overflow-hidden mobile:text-[13px] ">
              <button type="submit">Update</button>
            </div>
          </div>
        </form>
      </div>

    </div>
  );
};

export default AdminProfile;
