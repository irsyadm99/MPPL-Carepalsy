import Button from "./Button";

function Banner() {
  return (
    <div className="flex h-[300px] sm:h-[400px] lg:h-[500px] bg-primary-surface">
      <div className="flex flex-col w-[505px] h-[382px] leading-7 mt-[114px] ml-[90px] lg:ml-[155px]">
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
  );
}

export default Banner;
