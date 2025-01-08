import Sider from "./Sider";
import ChatList from "./ChatList";
import DesktopChatEnv from "./DesktopChatEnv";

const DesktopViewChat = () => {
  return (
    <div className="w-[100%] h-[100vh] flex justify-center">
      <div className="  ">
        <Sider />
      </div>

      <div className="small:hidden mobile:hidden mobilel:hidden ">
        <ChatList />
      </div>

      <DesktopChatEnv />
    </div>
  );
};

export default DesktopViewChat;
