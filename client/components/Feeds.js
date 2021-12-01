import Button from "./Button";
import Post from "./Post";
import { Avatar } from "@mui/material";
import { useState, useEffect } from "react";
import postServices from "../services/post.services";
import { useRouter } from "next/router";

function Feeds({ user, posts: ps }) {
  const router = useRouter();
  const [text, setText] = useState("");
  const [posts, setPosts] = useState(ps);
  // const [vote, setVote] = useState([]);
  const style = "px-5 py-5 bg-white rounded-lg border border-gray-200";
  const name = user?.user.name;
  const username = name?.split(" ").join("").toLocaleLowerCase();
  // console.log(posts);

  const refreshData = () => {
    router.replace(router.asPath);
  };

  useEffect(async () => {
    // ambil vote
    await postServices.getPostVote().then((response) => {
      setPosts(
        posts.map((i) => {
          return {
            ...i,
            ...response.data.posts.find((x) => x._id == i._id),
          };
        })
      );
    });
  }, []);

  const handlePost = async (e) => {
    e.preventDefault();

    try {
      await postServices.createPost(text).then(() => {
        console.log("post berhasil dibuat");
        setText("");
        // refreshData();
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className={user === undefined ? "hidden" : style}>
        <div className="flex items-center mb-5">
          <Avatar className="h-12 w-12">{username}</Avatar>
          <h2 className=" ml-4 text-xl font-medium">{username}</h2>
        </div>
        <form action="" onSubmit={handlePost} className="">
          <textarea
            onChange={(e) => setText(e.target.value)}
            type="text"
            row="10"
            value={text}
            className="w-full rounded-lg border border-gray-200 px-4 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Tulis post"
          />
          <div className="flex justify-end mt-5">
            <Button type="submit" text="Buat Post" />
          </div>
        </form>
      </div>
      {posts.map((data) => (
        <Post
          key={data._id}
          text={data.text}
          name={data.user.name}
          timestamp={data.date}
          postId={data._id}
          comments={data.comments.filter((i) => i._id != undefined)}
          upvote={data.sum_upvote}
          downvote={data.sum_downvote}
          upvoted={data.upvoted}
          downvoted={data.downvoted}
          user={user}
        />
      ))}
    </div>
  );
}

export default Feeds;
