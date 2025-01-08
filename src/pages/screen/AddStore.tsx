import { useState } from "react";
import { useSelector } from "react-redux";

const AddProduct = () => {
  const [category, setCategory] = useState("");
  const [storeSocialMediaAcc, setStoreSocialMediaAcc]: any = useState("");
  const [storeEmail, setStoreEmail]: any = useState("");
  const [storeUrl, setStoreUrl]: any = useState("");
  const [description, setDescription]: any = useState("");
  const [storeName, setStoreName]: any = useState("");
  const [storeImage, setStoreImage]: any = useState("");
  const [storeAvatar, setStoreAvatar]: any = useState("");

  const formData = new FormData();
  const userID = useSelector((state: any) => state?.myUser);

  formData.append("category", category);
  formData.append("storeSocialMediaAcc", storeSocialMediaAcc);
  formData.append("storeEmail", storeEmail);
  formData.append("storeUrl", storeUrl);
  formData.append("description", description);
  formData.append("storeName", storeName);
  formData.append("image", storeImage);

  const onhandleImageUpload = (e: any) => {
    const file = e.target.files[0];
    const readFile = URL.createObjectURL(file);
    setStoreImage(file);
    setStoreAvatar(readFile);
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
      <div className="flex justify-center border small:border-none small:ml-2 small:p-2 p-5 small:mr-2 rounded-md absolute z-[3]  ">
        <div className=" ml-4">
          <div className="flex flex-col mt-3 ">
            <input
              placeholder="storeName"
              type="text"
              className="border rounded-md small:text-[12px] mobile:text-[12px] w-[300px] h-[50px] small:h-[35px] mobile:h-[35px] my-2 pl-2 outline-none text-[15px] "
              value={storeName}
              onChange={(e: any) => setStoreName(e.target.value)}
            />
            <input
              placeholder="storeEmail"
              className="border rounded-md w-[300px] h-[50px] small:text-[12px] mobile:text-[12px] my-2 pl-2 small:h-[35px] mobile:h-[35px] outline-none text-[15px] "
              type="email"
              value={storeEmail}
              onChange={(e: any) => setStoreEmail(e.target.value)}
            />
            <input
              placeholder="storeUrl optional "
              className="border rounded-md w-[300px] h-[50px] small:text-[12px] mobile:text-[12px] my-2 pl-2 small:h-[35px] mobile:h-[35px] outline-none text-[15px] "
              type="url"
              value={storeUrl}
              onChange={(e: any) => setStoreUrl(e.target.value)}
            />
            <input
              placeholder="StoreSocialMediaAccount optional"
              className="border rounded-md w-[300px] h-[50px] small:text-[12px] mobile:text-[12px] my-2 pl-2 small:h-[35px] mobile:h-[35px] outline-none text-[15px] "
              type="text"
              value={storeSocialMediaAcc}
              onChange={(e: any) => setStoreSocialMediaAcc(e.target.value)}
            />
            <select
              className="border rounded-md w-[300px] h-[50px] small:text-[12px] text-[12px] mobile:text-[12px] my-2 pl-2 small:h-[35px] mobile:h-[35px] outline-none"
              name="category"
              id="category-select"
              value={category}
              onChange={(e: any) => setCategory(e.target.value)}
            >
              <option value="">Select a category</option>
              <option value="food">Food and Beverages</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="arts">Arts and Craft</option>
              <option value="officesupplies">Office and School Supplies</option>
              <option value="sports">Sports and Outdoor</option>
              <option value="health">Health</option>
              <option value="arts">Home and Garden</option>
              <option value="babycare">Baby and Kids </option>
              <option value="instruments">Musical Instrument </option>
              <option value="pet">Pet Care</option>
              <option value="automotive">Automotive</option>
              <option value="Gift">Gift Items</option>
              <option value="furniture">Furniture</option>
              <option value="Accomodation">Real Estate</option>
              <option value="personalcare">Beauty and PersonalCare</option>
              <option value="travel">Travel and Tourism </option>
            </select>

            <textarea
              placeholder="storeDescription"
              className="border rounded-md w-[300px] h-[50px] my-2 pl-2 small:text-[12px] mobile:text-[12px] outline-none text-[15px] resize-none "
              value={description}
              onChange={(e: any) => setDescription(e.target.value)}
            />

            <label
              htmlFor="image"
              className="flex items-center h-[50px] justify-center text-white bg-purple-900 hover:cursor-pointer duration-300 transition-all hover:scale-[1.02] rounded-sm mb-4 "
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
            <div
              className="flex items-center h-[50px] justify-center small:text-[12px] mobile:text-[12px] text-white bg-[#fa9608] hover:cursor-pointer duration-300 transition-all hover:scale-[1.02] rounded-sm small:h-[35px] mobile:h-[35px]  "
              // onClick={() => {
              //   // createStore(formData, userID).then((res) => {
              //     // console.log(res);
              //   });
              // }}
            >
              Add Store
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
