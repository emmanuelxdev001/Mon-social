import InnerChat from "./InnerChat"
import Sider from "./Sider"

const MobileLayoutChat = () => {
  return (
    <div className="hidden mobilel:flex mobile:flex small:flex mt-[30px]  ">
        <div>
        <Sider/>
        </div>
        <div>
            <InnerChat/>
        </div>
    </div>
  )
}

export default MobileLayoutChat