import React, { useState } from "react";
import postServices from "../../services/post.services";

function FaqEditCard({ data }) {
  const [question, setQuestion] = useState(data.question);
  const [answer, setAnswer] = useState(data.answer);
  const faqId = data._id;

  const editFaq = async (e) => {
    e.preventDefault();

    try {
      await postServices.editFaq(question, answer, faqId).then(() => {
        console.log("berhasil edit");
        window.location.replace("/admin/dashboard");
      });
    } catch (err) {
      console.log(err);
      alert("error");
    }
  };

  return (
    <div className="relative flex flex-col w-[820px] bg-white rounded-lg p-8 shadow-lg">
      <h2 className="text-2xl font-semibold mb-5">Edit FAQ</h2>
      <hr className="w-44 mb-12" />
      <div className="flex flex-col space-y-4 mb-8">
        <h3 className="text-lg">Isi Pertanyaan</h3>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="rounded-lg border-transparent appearance-none border border-gray-300 w-full py-2 px-4 bg-white 
              text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary 
              focus:border-transparent"
        />
        <h3 className="text-lg">Isi Jawaban</h3>
        <textarea
          rows="10"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="rounded-lg border-transparent appearance-none border border-gray-300 w-full py-2 px-4 bg-white 
                    text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary 
                    focus:border-transparent"
        ></textarea>
      </div>
      <button
        className="px-4 py-2 text-white bg-primary font-semibold rounded-lg border-2 border-primary-hover w-full"
        onClick={editFaq}
      >
        Edit
      </button>
    </div>
  );
}

export default FaqEditCard;
