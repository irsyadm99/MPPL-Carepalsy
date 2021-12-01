import React from "react";
import Header from "../components/Header";
import postServices from "../services/post.services";
import Footer from "../components/Footer";

function faq({ faqs }) {
  return (
    <div>
      <Header />
      <div className="flex flex-col w-3/5 mx-auto mt-12">
        <h1 className="text-4xl font-extrabold mb-12 tracking-widest text-primary">
          FAQ (
          <span className="font-bold italic">Frequently Asked Question</span>)
        </h1>
        {faqs.map((data) => (
          <div className="mb-12 space-y-5" key={data._id}>
            <h2 className="text-2xl font-bold tracking-wider text-[#404040]">
              {data.question + "?"}
            </h2>
            <p className="text-xl text-justify leading-10 tracking-wide">
              {data.answer}
            </p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default faq;

export async function getServerSideProps() {
  let faqs = {};
  await postServices.getFaq().then((response) => {
    faqs = response.data.faqs;
  });
  return {
    props: {
      faqs,
    },
  };
}
