import React from "react";
import FaqCard from "../../../components/admin/FaqCard";
import Admin from "../../../layouts/Admin";

function faq() {
  return (
    <>
      <div className="flex flex-col mt-16">
        <h1 className="text-4xl mb-12 font-bold text-primary">
          Frequently Asked Question
        </h1>
        <FaqCard />
      </div>
    </>
  );
}

export default faq;

faq.layout = Admin;
