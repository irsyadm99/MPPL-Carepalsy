import React from "react";
import ContentIndex from "./ContentIndex";

function ContentDiet({ title, cardTitle }) {
  return (
    <div className="flex flex-col items-center mt-12">
      <h2 className="text-primary text-5xl mb-12 font-bold">{title}</h2>
      <p className="text-gray-600 text-justify text-xl max-w-[820px] mb-8">
        Anak dengan cerebral palsy memiliki risiko yang tinggi untuk mengalami
        kepadatan tulang rendah. Maka ada beberapa zat gizi yang dibutuhkan anak
        penyandang cerebral palsy adalah Kalsium, Fosfor, dan Vitamin D. Bahan
        pangan yang dibutuhkan antara lain keju, susu sapi, bayam, sawi
      </p>
      <div className="rounded-lg border-2 border-primary-border shadow-sm max-w-[820px]">
        <div className="flex flex-col items-center p-8">
          <h2 className="text-5xl mb-14 font-bold">{cardTitle}</h2>
          <div className="grid grid-cols-2">
            <div className="">
              <ContentIndex index="01" title="Pembentukan tulang dan gigi" />
              <ContentIndex
                index="02"
                title="Menjaga kerja hormon dan faktor pertumbuhan"
              />
              <ContentIndex index="03" title="Mengatur pembekuan darah" />
            </div>
            <div className="">
              <ContentIndex index="04" title="Relaksasi dan kontraksi otot" />
              <ContentIndex
                index="05"
                title="Berperan dalam fungsi saraf, tekanan darah, dan fungsi kekebalan"
              />
              <ContentIndex
                index="06"
                title="Menjaga permeabilitas membran sel"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentDiet;
