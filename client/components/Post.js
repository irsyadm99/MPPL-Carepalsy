import {
  ArrowUpIcon,
  ArrowDownIcon,
  ShareIcon,
  ChatIcon,
} from "@heroicons/react/solid";
import { useState } from "react";

function Post({ avatar, name }) {
  const [upVote, setUpVote] = useState(0);
  const [downVote, setDownVote] = useState(0);

  const handleUpVote = () => {
    const plus = upVote + 1;
    setUpVote(plus);
  };

  const handleDownVote = () => {
    const minus = downVote + 1;
    setDownVote(minus);
  };

  return (
    <div className="px-5 py-5 bg-white rounded-lg border border-gray-200 my-5">
      <div className="flex items-center">
        <img
          src={avatar}
          alt="userimg"
          className="rounded-full object-contain h-14 w-14"
        />
        <h2 className=" ml-4 text-2xl flex-1">{name}</h2>
        <h2 className=" text-xl text-gray-400">3h ago</h2>
      </div>
      <p className="text-md my-5 text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa officia
        iusto voluptate ullam expedita eligendi voluptas eos necessitatibus
        pariatur ea, alias quidem rerum consequatur porro maiores culpa ex
        accusantium illo!
      </p>
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-5">
          <div className="flex items-center">
            <ArrowUpIcon
              className="h-6 w-6 text-gray-400 cursor-pointer"
              onClick={handleUpVote}
            />
            <h3 className="text-lg text-gray-400 ml-2">{upVote}</h3>
          </div>
          <div className="flex items-center">
            <ArrowDownIcon
              className="h-6 w-6 text-gray-400 cursor-pointer"
              onClick={handleDownVote}
            />
            <h3 className="text-lg text-gray-400 ml-2">{downVote}</h3>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <ChatIcon className="h-6 w-6 text-gray-400" />
            <h3 className="text-lg text-gray-400 ml-2">18</h3>
          </div>
          <ShareIcon className="h-6 w-6 text-gray-400" />
        </div>
      </div>
      <form action="" className="flex items-center">
        <input
          type="text"
          className="flex-1 rounded-lg border border-gray-200 px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Tulis komentar"
        />
        <h3 className="text-lg text-primary ml-2">Post</h3>
      </form>
    </div>
  );
}

export default Post;
