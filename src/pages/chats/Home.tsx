// import { useState } from "react";
// import pix from "../../src/assets/man.png";
import Notify from "../../pages/user/UserNotificationPage";
import { allUserHook, oneUserHook } from "../../hook/UserHook";
import DoorDashFavorite from "../loading/LoaderScreen";

const Home = () => {
  const { data } = oneUserHook();
  const { alluser, isLoading } = allUserHook();

  console.log(data);
  return (
    <div>
      <div className="fixed ml-4 z-10">
        <Notify />
      </div>
      <div className="my-6 ml-20">
        welcome back <strong className="capitalize">{data?.username}</strong>
      </div>{" "}
      {isLoading ? (
        <div>
          {Array.from({ length: 5 }, () => (
            <DoorDashFavorite />
          ))}
        </div>
      ) : (
        <div
          className="grid sm:grid-cols-2 md:grid-cols-2
      lg:grid-cols-3 xl:grid-cols-4 gap-6 "
        >
          {alluser?.map((props: any, i: number) => (
            <div>
              {props._id !== data._id && (
                <div
                  className={`min-h-[400px] rounded-sm `}
                  style={{
                    //  backgroundColor: `${randColor()}`,
                    borderRadius: "5px",
                    color: "black",
                  }}
                >
                  <div className="flex flex-col">
                    <div className="w-full h-[300px] relative">
                      <div>
                        <div className="absolute top-[50%] bg-white p-3 rounded-[50%]">
                          <a />
                        </div>
                      </div>

                      <img
                        src=""
                        alt="img"
                        className="w-full h-[300px] object-cover rounded-[15px]"
                      />
                      <div className="absolute top-[50%] left-1 bg[rgba(225, 225, 225, 0.8)]  bg-white p-3 rounded-[50%] rotate">
                        <a />
                      </div>
                    </div>
                    <div className="flex justify-between mt-2">
                      <h2 className="font-bold capitalize text-[17px]">
                        {props?.userName}
                      </h2>
                      <p className="text-gray-500">
                        {" "}
                        {props?.friends?.length} Friends
                      </p>
                    </div>
                    <span>Profile</span>
                    <div className="w-full">
                      {props.friends.some((el: any) => el === data._id) ? (
                        <button
                          className="mt-4 py-2 px-4 text-[15px]
       text-white bg-purple-600 rounded-sm"
                          // onClick={() => {
                          //   unFriend(data._id, props._id).then((res) => {
                          //     console.log(res);
                          //   });
                          // }}
                        >
                          un friend
                        </button>
                      ) : (
                        <button
                          className="mt-4 py-2 px-4 text-[15px]
       text-white bg-purple-600 rounded-sm"
                          // onClick={() => {
                          //   addFriend(data._id, props._id).then((res) => {
                          //     console.log(res);
                          //   });
                          // }}
                        >
                          Add friend
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
