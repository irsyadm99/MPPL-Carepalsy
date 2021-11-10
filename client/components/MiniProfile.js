function MiniProfile() {
  return (
    <div>
      <div className="px-5 py-5 bg-white rounded-lg border border-gray-200">
        <div className="flex items-center mb-5">
          <img
            src="https://randomuser.me/api/portraits/men/46.jpg"
            alt="userimg"
            className="rounded-full object-contain h-14 w-14"
          />
          <h2 className=" ml-4 text-2xl">Sam</h2>
        </div>
        <div className="flex items-center space-x-2 mb-2">
          <h2 className="font-bold text-primary text-xl">25</h2>
          <h2 className="font-bold text-gray-400 text-xl">Post</h2>
        </div>
        <div className="flex items-center space-x-2">
          <h2 className="font-bold text-primary text-xl">16</h2>
          <h2 className="font-bold text-gray-400 text-xl">Balasan</h2>
        </div>
      </div>
      <div className=" bg-white rounded-lg divide-double divide-y mt-5">
        <div className="px-3 py-3">
          <h2 className="font-bold text-gray-400 text-2xl">Semua</h2>
        </div>
        <div className="px-3 py-3">
          <h2 className="font-bold text-gray-400 text-2xl">Upvoted</h2>
        </div>
        <div className="px-3 py-3">
          <h2 className="font-bold text-gray-400 text-2xl">Post Anda</h2>
        </div>
        <h2 className="font-bold text-gray-400 text-2xl px-3 py-3">Terbaru</h2>
      </div>
    </div>
  );
}

export default MiniProfile;
