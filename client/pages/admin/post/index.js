import React from "react";
import PostTable from "../../../components/admin/table/PostTable";
import Admin from "../../../layouts/Admin";
import postServices from "../../../services/post.services";

function post({ posts }) {
  return (
    <>
      <div className="flex flex-col mt-16">
        <h1 className="text-4xl mb-12 font-bold text-[#404040]">Post</h1>
        <div className="w-full mb-12">
          <PostTable data={posts} color="light" />
        </div>
      </div>
    </>
  );
}

export default post;

post.layout = Admin;

export async function getServerSideProps() {
  let posts = {};
  await postServices.getPost().then((response) => {
    posts = response.data.posts;
  });

  return {
    props: {
      posts,
    },
  };
}
