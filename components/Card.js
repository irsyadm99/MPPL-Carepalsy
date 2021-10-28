import Button from "./Button";

function Card({ index, title, desc }) {
  return (
    <div className="flex w-[612px] h-[264px] border-2 border-[#7575] rounded-lg shadow-sm mb-4 lg:mr-3">
      <div className="px-4 py-6">
        <div className="flex items-center mb-5">
          <h1 className="px-2 py-1 bg-primary-surface text-primary border-2 border-primary-border text-xl rounded-lg font-semibold">
            {index}
          </h1>
          <h1 className="text-xl ml-3 font-semibold">{title}</h1>
        </div>
        <p className="text-lg text-gray-500">{desc}</p>
        <div className="flex justify-end mt-5 mx-5">
          <Button text="Baca" />
        </div>
      </div>
    </div>
  );
}

export default Card;
