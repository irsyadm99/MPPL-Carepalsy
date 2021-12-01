import { Avatar } from "@mui/material";
import { useState, useEffect } from "react";
import postServices from "../services/post.services";

function MiniProfile({ user }) {
  const [mypost, setMypost] = useState([]);

  useEffect(async () => {
    await postServices.getSelfPost().then((response) => {
      setMypost(response.data.posts);
    });
  }, []);

  return (
    <div>
      <div className="px-5 py-5 bg-white rounded-lg border border-gray-200">
        <div className="flex items-center mb-5">
          <Avatar className="h-12 w-12">{user?.user.name[0]}</Avatar>
          <h2 className=" ml-4 text-xl">{user?.user.name}</h2>
        </div>
        <div className="flex items-center space-x-2 mb-2">
          <h2 className="font-bold text-primary text-xl">{mypost.length}</h2>
          <h2 className="font-bold text-gray-400 text-xl">Post</h2>
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
