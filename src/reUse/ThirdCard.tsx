import { Link } from "react-router-dom";

const ThirdCard = () => {
  const data = [
    {
      image: `https://c.ndtvimg.com/2023-07/2qkikmj8_vegetables_625x300_05_July_23.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350`,
      title: "Vegitables and Fruits",
      details:
        "it is Rich in Vitamins and Minerals, Boosts Immune System, promotes,Promotes Digestive Health,Supports Healthy Weight,and reduce chronic dieases",
      butt: "Purchase",
    },
    {
      image: `https://pbs.twimg.com/media/DhPR_jwWsAArGl4?format=jpg&name=small`,
      title: "Electronis and Gadgets",
      details:
        "Quality devices that meets high standards of performance, These products are designed to provide efficient functionality, ensuring a seamless user experience",
      butt: "Purchase",
    },
    {
      image: `https://st4.depositphotos.com/1001877/20108/i/1600/depositphotos_201082784-stock-photo-home-appliances-set-household-kitchen.jpg`,
      title: "Home Appliances",
      details:
        "Home appliances that are electrical and mechanical devices designed to perform specific tasks and make household chores easier, like Refrigerators, gas cooker, Washing Machines and more.",
      butt: "Purchase",
    },
    {
      image: `https://st4.depositphotos.com/1001877/20108/i/1600/depositphotos_201082784-stock-photo-home-appliances-set-household-kitchen.jpg`,
      title: "Construction Services",
      details:
        "Construction services is the processes and activities involved in building, maintaining, and repairing physical structures, infrastructure, and facilities.",
      butt: "Purchase",
    },
  ];

  return (
    <div
      className=" w-[100%] h-[350px] mobile:h-[600px] mobilel:h-[700px] small:h-[600px]
     flex justify-center"
    >
      <div className=" w-[90%]  small:flex-wrap mobile:flex-wrap mobilel:flex-wrap flex gap-14 small:gap-[15px] mobile:gap-[15px] mobilel:gap-[15px] ">
        {/* card */}
        {data?.map((props: any) => (
          <div className="w-[25%] small:w-[47%] mobile:w-[47%] mobilel:w-[47%] h-[100%] rounded-md overflow-hidden bg-[#fa9608] small:h-[300px] mobile:h-[300px] mobilel:h-[300px] ">
            <img
              className="w-[100%] h-[50%] hover:scale-[1.05] hover:cursor-pointer duration-700 transition-all  "
              src={props?.image}
              alt={props?.image}
            />
            <center className="w-[100%]">
              <div className="text-[13px] font-bold small:text-[11px] mobile:text-[11px] mobilel:text-[11px]  ">
                {props?.title}
              </div>
              <div className="text-[13px] w-[100%] small:text-[11px] mobile:text-[11px] mobilel:text-[11px] font-[medium]  ">
                {props?.details}
              </div>

              <Link to="/sign-in">
                <button className="text-[12px] p-2 bg-[#456104] rounded-md text-[#fa9608] mt-[10px] hover:scale-[1.05] hover:cursor-pointer duration-700 transition-all ">
                  {props?.butt}
                </button>
              </Link>
            </center>
          </div>
        ))}
        {/* card */}
      </div>
    </div>
  );
};

export default ThirdCard;
