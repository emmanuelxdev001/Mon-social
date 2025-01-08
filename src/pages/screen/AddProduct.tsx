import { useState } from "react";
import { createProduct } from "../../api/Product";
// import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaSpinner } from "react-icons/fa";

const AddProduct = () => {
  const userID = useSelector((state: any) => state?.user);
  console.log(userID);
  const [title, setTitle] = useState("");
  const [amount, setAmount]: any = useState(0);
  const [image, setImage]: any = useState(0);
  const [QTYinStock, setQTYinStock]: any = useState(0);
  const [description, setDescription]: any = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const formData = new FormData();

  formData.append("title", title);
  formData.append("amount", amount);
  // formData.append("rating", rating);
  formData.append("QTYinStock", QTYinStock);
  formData.append("description", setDescription);
  formData.append("image", image);

  const onhandleImageUpload = (e: any) => {
    let file = e.target.files[0];
    //  const readFile = URL.createObjectURL(file);
    setImage(file);
    //  setAvatar(readFile);
  };

  return (
    <div
      className="fixed top-0 left-0 bg-white h-[100%] w-full justify-center items-center flex z-[2] "
      style={{
        background: " rgba( 255, 255, 255, 0.15 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: " blur( 7px )",
        borderRadius: "10px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
      }}
    >
      {/* <div className="w-full h-full absolute top-0 left-0 hover:cursor-pointer " /> */}
      <div className="flex justify-center border small:border-none small:ml-2 small:p-2 p-5 small:mr-2 rounded-md absolute z-[3]  ">
        <div className=" ml-4">
          <label
            htmlFor="image"
            className="flex items-center h-[50px] justify-center text-white bg-[#456104] hover:cursor-pointer duration-300 transition-all hover:scale-[1.02] rounded-sm mb-4 "
            onClick={() => {
              // setToggle(false);
            }}
          >
            upload images
          </label>
          <input
            id="image"
            className="hidden"
            onChange={onhandleImageUpload}
            type="file"
            accept=".jpg,.png,.jpeg"
            multiple
          />

          <div className="flex flex-col mt-3 ">
            <input
              placeholder="title"
              className="border rounded-md w-[300px] h-[50px] my-2 pl-2 outline-none text-[15px] "
              value={title}
              type="text"
              onChange={(e: any) => setTitle(e.target.value)}
            />
            <input
              placeholder="amount"
              className="border rounded-md w-[300px] h-[50px] my-2 pl-2 outline-none text-[15px] "
              value={amount}
              type="number"
              onChange={(e: any) => setAmount(e.target.value)}
            />
            <input
              placeholder="quantity"
              className="border rounded-md w-[300px] h-[50px] my-2 pl-2 outline-none text-[15px] "
              value={QTYinStock}
              type="number"
              onChange={(e: any) => setQTYinStock(e.target.value)}
            />
            <input
              placeholder="description"
              className="border rounded-md w-[300px] h-[50px] my-2 pl-2 outline-none text-[15px] "
              value={description}
              type="text"
              onChange={(e: any) => setDescription(e.target.value)}
            />

            <div
              className="flex items-center h-[50px] justify-center small:text-[12px] mobile:text-[12px] text-white bg-[#fa9608] hover:cursor-pointer duration-300 transition-all hover:scale-[1.02] rounded-sm small:h-[35px] mobile:h-[35px]  "
              onClick={() => {
                // setLoading(true);
                createProduct(formData, userID._id).then((res) => {
                  console.log(res);
                });
                // setLoading(false);
                // console.log("clicked");
              }}
            >
              {loading ? (
                <div>
                  <FaSpinner />
                </div>
              ) : (
                <div>Add Product</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
