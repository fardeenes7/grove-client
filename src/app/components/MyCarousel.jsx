import Image from "next/image";


import Logo1 from "../../../public/assets/serlkirk.png";
import dummyLogo1 from "../../../public/assets/dummy-logo.png";
import dummyLogo2 from "../../../public/assets/dummy-logo-1.png";

const MyCarousel = () => {
  // const logos = Array(12).fill(Logo);

  return (
    <div className="bg-[#FFFF] pt-16 lg:pt-36 pb-20">
  <div className="container max-w-[1120px mx-auto">
      <h1 className="text-center text-3xl md:text-6xl font-black text-[#329BEC] mb-4">
        Our Sponsors
      </h1>
      <p className="md:w-2/4 text-center mx-auto md:text-xl 3xl:text-2xl">Like a guiding star, your sponsorship lights our path to success. Together, let’s make dreams reality and build a future filled with achievements..</p>
      <div>
        <div className="flex justify-center flex-wrap gap-8 py-16">
          <Image src={Logo1} alt="serlkirk" className="w-[80%] sm:w-[40%] md:w-[20rem]"/>
          <Image src={dummyLogo1} alt="serlkirk" className="w-[80%] sm:w-[40%] md:w-[20rem]"/>
          <Image src={dummyLogo2} alt="serlkirk" className="w-[80%] sm:w-[40%] md:w-[20rem]"/>
        </div>
      </div>
     
    </div>
    </div>
  
  );
};

export default MyCarousel;
