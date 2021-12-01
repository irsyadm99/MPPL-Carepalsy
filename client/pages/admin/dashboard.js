import React from "react";
import CardDashbboard from "../../components/admin/CardDashbboard";
import CardTable from "../../components/admin/table/CardTable";
import Admin from "../../layouts/Admin";
import {
  UsersIcon,
  ClipboardListIcon,
  ChatAlt2Icon,
} from "@heroicons/react/solid";
import postServices from "../../services/post.services";
import userServices from "../../services/user.services";
import FaqTable from "../../components/admin/table/FaqTable";

function dashboard({ posts, users, comments, faqs }) {
  return (
    <>
      <div className="flex flex-col mt-16">
        <h1 className="text-4xl mb-12 font-extrabold text-primary">
          DASHBOARD
        </h1>
        <div className="flex flex-wrap mb-10 space-x-8">
          <CardDashbboard
            Icon={UsersIcon}
            title="Total User"
            data={users.length}
          />
          <CardDashbboard
            Icon={ClipboardListIcon}
            title="Total Post"
            data={posts.length}
          />
          <CardDashbboard
            Icon={ChatAlt2Icon}
            title="Total Comment"
            data={comments.length}
          />
        </div>
        <FaqTable color="light" data={faqs} />
      </div>
    </>
  );
}

export default dashboard;

dashboard.layout = Admin;

export async function getServerSideProps() {
  let posts = {};
  let users = {};
  let comments = {};
  let faqs = {};

  await postServices.getPostDashboard().then((response) => {
    posts = response.data.posts;
  });

  await postServices.getCommentDashboard().then((response) => {
    comments = response.data.comments;
  });

  await userServices.getUserDashboard().then((response) => {
    users = response.data.users;
  });

  await postServices.getFaq().then((response) => {
    faqs = response.data.faqs;
  });

  return {
    props: {
      posts,
      comments,
      users,
      faqs,
    },
  };
}
