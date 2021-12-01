import React, { useState } from "react";
// import { useRouter } from "next/router";
import Link from "next/link";
import Admin from "../../../../layouts/Admin";
import postServices from "../../../../services/post.services";

function postEdit({ post }) {
  const [text, setText] = useState(post.text);
  const postId = post._id;

  const editPost = async (e) => {
    e.preventDefault();

    try {
      await postServices.editPost(text, postId).then(() => {
        console.log("Edit post berhasil");
        window.location.replace("/admin/post");
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="flex flex-col mt-16 w-[820px]">
        <h1 className="text-4xl mb-12 font-bold text-[#404040]">Edit Post</h1>
        <div className="flex flex-col  mb-12">
          <input
            type="text"
            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white 
              text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary 
              focus:border-transparent"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="your text"
          />
          <div className="flex space-x-3 mt-5">
            <button
              onClick={editPost}
              className="px-4 py-2 text-white bg-primary font-semibold rounded-lg border-2 border-primary-hover w-full"
            >
              Edit
            </button>
            <Link href="/admin/post">
              <button className="px-4 py-2 text-white bg-secondary font-semibold rounded-lg border-2 border-secondary w-full">
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default postEdit;

postEdit.layout = Admin;

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;
  let post = {};

  await postServices.getPostById(id).then((response) => {
    post = response.data.post;
  });

  return {
    props: {
      post,
    },
  };
}
