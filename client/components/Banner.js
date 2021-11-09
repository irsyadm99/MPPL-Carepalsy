import Button from "./Button";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] w-full">
      <Image src="/banner1.png" layout="fill" objectFit="cover" />
      <div className="absolute w-[505px] h-[382px] leading-7 mt-[130px] ml-[90px] lg:ml-[155px]">
        <div className="flex flex-col">
          <div className="mb-5">
            <h1 className="text-6xl text-primary font-bold mb-3">
              Cerebral Palsy
            </h1>
            <h1 className="text-6xl text-primary font-bold">Food Education</h1>
          </div>
          <p className="text-md mb-5">
            Program edukasi pola makan bagi anak penyandang cerebral palsy yang
            ditujukan untuk orang tua maupun pengasuhnya
          </p>
          <Button text="Button" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
