import React from "react";
import FaqEditCard from "../../../../components/admin/FaqEditCard";
import Admin from "../../../../layouts/Admin";
import postServices from "../../../../services/post.services";

function FaqEdit({ faq }) {
  return (
    <>
      <div className="flex flex-col mt-16">
        <h1 className="text-4xl mb-12 font-bold text-primary">
          Edit Frequently Asked Question
        </h1>
        <FaqEditCard data={faq} />
      </div>
    </>
  );
}

export default FaqEdit;

FaqEdit.layout = Admin;

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;
  let faq = {};

  await postServices.getFaqByid(id).then((response) => {
    faq = response.data.faq;
  });
  return {
    props: {
      faq,
    },
  };
}
