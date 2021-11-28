import React from "react";

function Content({ title }) {
  return (
    <div className="space-y-10 flex flex-col items-center">
      <h2 className="text-primary text-5xl font-bold">{title}</h2>
      <img src="/contentimg.png" alt="img" />
      <p className="text-gray-600 text-justify text-xl max-w-[820px]">
        Antropometri merupakan salah satu indikator penilaian status gizi dengan
        mengukur beberapa parameter, diantaranya :
      </p>
    </div>
  );
}

export default Content;
