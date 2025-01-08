import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import axios from "axios";
import { addToList } from "../../components/global/redux";

interface ListItems {
  title: string;
  amount: number;
}

const initialState: ListItems[] = [];

const AddList = () => {
  const dispatch = useDispatch();
  const [listItems, setListItems] = useState<ListItems[]>(initialState);
  const [newItem, setNewItem] = useState<ListItems>({ title: "", amount: 0 });
  const [loading, setLoading] = useState(false);
  const user = useSelector((state: any) => state?.user);
  console.log(user?._id);
  const navigate = useNavigate();
  // const handleAddItem = () => {
  //   setListItems([...listItems, { title: "", amount: 0 }]);
  // };
  const handleAddItem = () => {
    setListItems([...listItems, { title: "", amount: 0 }]);
    // if (newItem.title && newItem.amount > 0) {
    //   setListItems([...listItems, { ...newItem }]);
    //   setNewItem({ title: "", amount: 0 });
    // } else {
    //   alert("Please fill in title and amount");
    // }
  };

  const handleRemoveItem = (index: number) => {
    setListItems(listItems.filter((item, i) => i !== index));
  };

  const handleItemChange = (
    index: number,
    field: string,
    value: string | number
  ) => {
    const updatedListItems = [...listItems];
    updatedListItems[index][field] = value;
    setListItems(updatedListItems);
  };
  // console.log(handleItemChange);

  const handleSubmit = async () => {
    if (!listItems.length) {
      alert("Please provide a valid list");
      return;
    }
    setLoading(true);
    try {
      const jsonData = JSON.stringify({ lists: listItems });
      const url = `http://localhost:2003/api/v1/${user?._id}/create-list`;
      const response = await axios.post(url, jsonData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(addToList(response.data));
      // .then((res)=>{
      //   dispatch(addToList(res))
      // })
      console.log(response);

      // Handle response
      if (response.status === 201) {
        const totalAmount = listItems
          .map((item) => item.amount)
          .reduce((acc, amount) => acc + amount, 0);
        console.log(totalAmount);
        navigate("/list-checkout", { state: { totalAmount } });
      } else {
        // Handle error response
        console.error("Error creating list:", response.data);
        alert("Error creating list: " + response.data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Submission failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-[100%] h-[100vh] flex justify-center ">
      <div className="w-[90%] mt-[20px] ">
        {/*big list */}
        <div>
          {/* up */}
          <div className=" w-[50%] h-[50px] flex items-center  small:w-[100%] mobile:w-[100%] mobilel:w-[100%] border justify-between p-2 text-[13px] font-bold rounded ">
            <div>Items</div>
            <div className="">Amount</div>
          </div>
          {/* up */}
          {/* lists */}
          <div className="w-[50%] small:w-[100%] mobile:w-[100%] mobilel:w-[100%] ">
            {listItems.map((item: ListItems, index: number) => (
              <div
                key={index}
                className="w-[100%] h-[40px] rounded border flex items-center text-[12px] font-semibold mt-[25px] mb-2 "
              >
                {/* left */}
                <div className="w-[70%] h-[100%] border-r-[1px]  border-r-[silver]  ">
                  <input
                    className="w-[100%] h-[100%] outline-none border-none border-r-[1px] p-1 border-r-[silver]"
                    type="text"
                    placeholder="add item"
                    value={item.title}
                    onChange={(e) =>
                      handleItemChange(index, "title", e.target.value)
                    }
                  />
                </div>
                {/*end left */}
                <div className="w-[20%] h-[100%] ">
                  <input
                    className="w-[100%] h-[100%] border-none outline-none p-1 "
                    type="number"
                    placeholder=" amount"
                    value={item.amount}
                    onChange={(e) =>
                      handleItemChange(index, "amount", Number(e.target.value))
                    }
                  />
                </div>
                <div className="w-[10%] h-[100%] text-[8px] font-bold text-[red] flex justify-center items-center  border-l-[1px] hover:cursor-pointer hover:duration-700 border-l-[silver] ">
                  <div onClick={() => handleRemoveItem(index)}>Delete</div>
                </div>
                {/*end right */}
              </div>
            ))}
            {/* butt */}
            <div className=" w-[100%] flex justify-between items-center text-[11px] font-bold mt-[20px] ">
              <button
                className="p-2  bg-[#456104] rounded text-[white] hover:duration-700 hover:transition-all hover:scale-[1.05] "
                type="button"
                onClick={handleAddItem}
              >
                Add Item
              </button>
              <button
                className="p-2 hover:duration-700 hover:transition-all hover:scale-[1.05] bg-[#fa9608] rounded text-[white] "
                type="button"
                onClick={handleSubmit}
              >
                {loading ? (
                  <div>
                    <FaSpinner />
                  </div>
                ) : (
                  <div>Submit List</div>
                )}
              </button>
            </div>
            {/*end butt */}
          </div>
          {/* lists */}
        </div>
        {/*end big list */}
      </div>
    </div>
  );
};

export default AddList;
