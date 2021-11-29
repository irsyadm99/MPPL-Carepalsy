import React, { useState } from "react";
import Admin from "../../../../layouts/Admin";

function CommentEdit() {
  const [text, setText] = useState();
  return (
    <>
      <div className="flex flex-col mt-16">
        <h1 className="text-4xl mb-12 font-bold text-[#404040]">
          Edit Comment
        </h1>
        <div className="flex flex-col max-w-[900px] mb-12">
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
              onClick={editComment}
              className="px-4 py-2 text-white bg-primary font-semibold rounded-lg border-2 border-primary-hover w-full"
            >
              Edit
            </button>
            <Link href="/admin/comment">
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

export default CommentEdit;

CommentEdit.layout = Admin;

export async function getServerSideProps(ctx) {
  return {
    props: {},
  };
}
