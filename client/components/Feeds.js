import Button from "./Button";
import Post from "./Post";
import { Avatar } from "@mui/material";
import { useState } from "react";
import postServices from "../services/post.services";
import { useRouter } from "next/router";

function Feeds({ user }) {
  const router = useRouter();
  const [text, setText] = useState("");
  const style = "px-5 py-5 bg-white rounded-lg border border-gray-200";

  const handlePost = async (e) => {
    e.preventDefault();

    try {
      await postServices.createPost(text).then(() => {
        console.log("post berhasil dibuat");
        setText("");
        router.reload();
      });
    } catch (err) {
      console.log(err);
    }
  };
  console.log(text);
  return (
    <div>
      <div className={user === undefined ? "hidden" : style}>
        <div className="flex items-center mb-5">
          <Avatar className="h-12 w-12">{user?.user.name[0]}</Avatar>
          <h2 className=" ml-4 text-xl">{user?.user.name}</h2>
        </div>
        <form action="" onSubmit={handlePost} className="">
          <textarea
            onChange={(e) => setText(e.target.value)}
            type="text"
            value={text}
            className="w-full rounded-lg border border-gray-200 px-4 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Tulis post"
          />
          <div className="flex justify-end mt-5">
            <Button type="submit" text="Buat Post" />
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
