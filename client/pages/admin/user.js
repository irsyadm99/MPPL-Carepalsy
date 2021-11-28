import React from "react";
import TableUser from "../../components/admin/table/TableUser";
import Admin from "../../layouts/Admin";
import userServices from "../../services/user.services";

function user({ users }) {
  return (
    <>
      <div className="flex flex-col mt-16">
        <h1 className="text-4xl mb-12 font-bold text-[#404040]">User</h1>
        <div className="w-full mb-12">
          <TableUser data={users} />
        </div>
      </div>
    </>
  );
}

export default user;

user.layout = Admin;

export async function getServerSideProps() {
  let users = {};
  await userServices.getUserDashboard().then((response) => {
    users = response.data.users;
  });
  return {
    props: {
      users,
    },
  };
}
