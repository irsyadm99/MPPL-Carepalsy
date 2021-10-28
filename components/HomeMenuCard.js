function HomeMenuCard({ Icon, title }) {
  return (
    <div className="w-[520px] bg-white border-2 border-primary-border flex items-center mb-3 rounded-lg cursor-pointer">
      <div className="flex py-3 px-4 items-center">
        <div className="rounded-lg bg-primary border border-primary-border px-2 py-2">
          <Icon className="text-white w-5 h-5 " />
        </div>
        <h2 className="ml-5 text-xl font-[500px]">{title}</h2>
      </div>
    </div>
  );
}

export default HomeMenuCard;
