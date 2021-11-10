import Button from "./Button";
import Post from "./Post";

function Feeds() {
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
        <form action="" className="">
          <input
            type="text"
            className="w-full rounded-lg border border-gray-200 px-4 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Tulis post"
          />
          <div className="flex justify-end mt-5">
            <Button text="Buat Post" />
          </div>
        </form>
      </div>
      <Post
        avatar="https://randomuser.me/api/portraits/women/31.jpg"
        name="Arlene"
      />
      <Post
        avatar="https://randomuser.me/api/portraits/men/33.jpg"
        name="Josh"
      />
      <Post
        avatar="https://randomuser.me/api/portraits/men/40.jpg"
        name="Moore"
      />
    </div>
  );
}

export default Feeds;
