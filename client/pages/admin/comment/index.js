import React from "react";
import CommentTable from "../../../components/admin/table/CommentTable";
import Admin from "../../../layouts/Admin";
import postServices from "../../../services/post.services";

function comment({ comments }) {
  return (
    <>
      <div className="flex flex-col mt-16">
        <h1 className="text-4xl mb-12 font-bold text-primary">Comment</h1>
        <div className="w-full mb-12">
          <CommentTable color="light" data={comments} />
        </div>
      </div>
    </>
  );
}

export default comment;

comment.layout = Admin;

export async function getServerSideProps() {
  let comments = {};
  await postServices.getCommentDashboard().then((response) => {
    comments = response.data.comments;
  });
  return {
    props: {
      comments,
    },
  };
}
