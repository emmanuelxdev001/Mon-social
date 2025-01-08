const SixthCard = () => {
  const data = [
    {
      title: "Featured Services",
      text: "  Prominently showcased services or offerings that highlight our business's expertise, unique value proposition, or exclusive benefits, setting us apart from competitors and attracting customers seeking specific solutions.",
    },
    {
      title: "Fast Checkout",
      text: "   Fast checkout is streamlined optimized payment process which enables customers to quickly and securely complete their purchases with minimal steps, effort, and time, resulting in a seamless and frictionless online shopping experience.",
    },
    {
      title: "Personalized Recommendations",
      text: "   Personalized recommendations are tailored suggestions for your products, services are uniquely relevant to you individual, customer's preferences, interests, and behaviors.",
    },
    {
      title: "Loyalty Program",
      text: "  structured marketing strategy designed to recognize, reward, and retain our loyal customers by offering incentives, benefits, an  exclusive offers based on their repeat purchases, engagement, or  other desired behaviors..",
    },
    {
      title: "Secure Payment",
      text: " A payment process that protects customer information, ensures the integrity and confidentiality of transactions, and prevent unauthorized access, use, or manipulation of payment data.",
    },
    {
      title: "24/7 Customer Support",
      text: " Continuous, around-the-clock assistance provided to our customers through various communication channels, ensuring prompt resolutio  of inquiries, issues, or concerns at any time of day or night..",
    },
    {
      title: "Trusted Brands",
      text: "  Brands that have established a strong reputation for reliability,quality, and integrity, fostering customer confidence and loyaltythrough consistent delivery of promises, transparency, and ethicalbusiness practices.",
    },
    {
      title: "Trusted Brands",
      text: "  Brands that have established a strong reputation for reliability,quality, and integrity, fostering customer confidence and loyaltythrough consistent delivery of promises, transparency, and ethicalbusiness practices.",
    },
  ];
  return (
    <div className="w-[100%] h-[670px] small:h-[900px] mobile:h-[900px] mobilel:h-[870px] flex justify-center bg-[#456104] p-1 ">
      <center className="w-[90%] ">
        <div className="text-center font-semibold text-[white] text-[18px] small:text-[13px] mobilel:text-[13px] mobile:text-[13px]  mt-[30px]  ">
          Featured Services
        </div>

        <div className="w-[100%] text-center text-[13px] font-medium mt-[30px] text-[#c3bdbd] mobile:mt-[10px] small:w-[100%] small:mt-[10px] mobilel:mt-[10px] small:text-[12px] mobile:text-[12px] mobilel:text-[12px]  ">
          Prominently showcased services or offerings that highlight our
          business's expertise, unique value proposition, or exclusive benefits,
          setting us apart from competitors and attracting customers seeking
          specific solutions.
        </div>
        {/* card */}
        <div className="mt-[30px] small:mt-[20px] mobilel:mt-[20px] mobile:mt-[20px] flex flex-wrap justify-center items-center gap-[30px] small:gap-[10px] ">
          {data?.map((props: any) => (
            <div className="w-[20%] h-[230px] rounded-md hover:cursor-pointer bg-[white] hover:scale-[1.05] duration-700 p-2 small:w-[45%] mobile:w-[45%] mobilel:w-[45%] small:h-[150px] mobile:h-[150px] mobilel:h-[150px] ">
              <div className="text-[15px] text-center font-bold small:p-[0] small:text-[10px] small:w-[100%]  p-2 text-[#fa9608] mobile:w-[100%] mobile:p-[0px] mobile:text-[10px] mobilel:text-[10px] ">
                {props?.title}
              </div>
              <div className="font-[medium] text-[13px] text-center small:text-[9px] small:w-[100%] mobile:w-[100%] mobile:text-[9px] mobile:mt-[2px] mobilel:text-[9px] ">
                {props?.text}
              </div>
            </div>
          ))}
        </div>
        {/*end card */}
      </center>
    </div>
  );
};

export default SixthCard;
