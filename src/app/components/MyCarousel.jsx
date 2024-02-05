import Image from "next/image";
import Marquee from "react-fast-marquee";
import Logo from "../../../public/assets/logo_marquee.png";

const MyCarousel = () => {
  const logos = Array(12).fill(Logo);

  return (
    <div className="w-2/3 mx-auto rounded-full">
      <h1 className="text-center text-2xl md:text-6xl font-black text-white mb-8 md:mb-16">
        Our Sponsors
      </h1>
      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        <div className="flex justify-between">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={`Logo ${index + 1}`}
              width={300}
              height={300}
              className="p-5 border-2 border-r-blue-600"
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default MyCarousel;
