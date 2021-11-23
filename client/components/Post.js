import {
  ArrowUpIcon,
  ArrowDownIcon,
  ShareIcon,
  ChatIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import { Avatar } from "@mui/material";
import moment from "moment";
import postServices from "../services/post.services";
import voteServices from "../services/vote.services";

function Post({
  text,
  name,
  timestamp,
  postId,
  comments,
  upvote,
  downvote,
  upvoted,
  downvoted,
}) {
  const [upVote, setUpVote] = useState(upvote);
  const [downVote, setDownVote] = useState(0);
  const [comment, setComment] = useState("");
  // const [commentCount, setCommentCount] = useState(0);
  // console.log(comments[0].user);
  console.log(upvoted);

  const username = name?.split(" ").join("").toLocaleLowerCase();
  const date = moment(timestamp).calendar();

  // const handleUpVote = () => {
  //   const plus = upVote + 1;
  //   setUpVote(plus);
  // };

  // const handleDownVote = () => {
  //   const minus = downVote + 1;
  //   setDownVote(minus);
  // };

  const handlePostComment = async (e) => {
    e.preventDefault();
    // const countPlus = commentCount + 1;

    try {
      await postServices.createComment(comment, postId).then(() => {
        console.log("Komentar berhasil dibuat");
        setComment("");
        // setCommentCount(countPlus);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpvote = async (e) => {
    e.preventDefault();

    try {
      await voteServices.upvote(postId).then(() => {
        setUpVote(upVote + 1);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="px-5 py-5 bg-white rounded-lg border border-gray-200 my-5">
      <div className="flex items-center">
        <Avatar className="h-12 w-12">{username[0]}</Avatar>
        <h2 className="ml-4 text-xl flex-1 font-medium">{username}</h2>
        <h2 className=" text-md text-gray-400">{date}</h2>
      </div>
      <p className="text-md my-5 text-gray-400">{text}</p>
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-5">
          <div
            className={
              upvoted
                ? "flex items-center bg-primary-surface"
                : "flex items-center"
            }
          >
            <ArrowUpIcon
              className={
                upvoted
                  ? "h-6 w-6 text-primary cursor-pointer"
                  : "h-6 w-6 text-gray-400 cursor-pointer"
              }
              onClick={handleUpvote}
            />
            <h3
              className={
                upvoted
                  ? "text-lg text-primary ml-2"
                  : "text-lg text-gray-400 ml-2"
              }
            >
              {upVote}
            </h3>
          </div>
          <div className="flex items-center">
            <ArrowDownIcon
              className="h-6 w-6 text-gray-400 cursor-pointer"
              // onClick={handleDownVote}
            />
            <h3 className="text-lg text-gray-400 ml-2">{downVote}</h3>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <ChatIcon className="h-6 w-6 text-gray-400" />
            <h3 className="text-lg text-gray-400 ml-2">{comments.length}</h3>
          </div>
          <ShareIcon className="h-6 w-6 text-gray-400" />
        </div>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="flex-1 rounded-lg border border-gray-200 px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Tulis komentar"
        />
        <div className="hover:bg-primary-surface rounded-lg ml-2 flex items-center">
          <h3
            onClick={handlePostComment}
            className="text-lg text-primary cursor-pointer px-1 py-1"
          >
            Post
          </h3>
        </div>
      </div>
      <div className="mt-10 border-t-2 border-gray-300 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
        {comments.map((comment) => (
          <div className="px-1 pt-8" key={comment._id}>
            <div className="flex items-center mb-3">
              <Avatar className="h-8 w-8">{comment.user.name[0]}</Avatar>
              <h3 className="ml-4 font-medium">{comment.user.name}</h3>
            </div>
            <p className="text-gray-400 ml-12">{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
