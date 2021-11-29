import React from "react";
import Footer from "../../components/Footer";
import Title from "../../components/gizi/Title";
import Header from "../../components/Header";
import Link from "next/link";
import ContentDiet from "../../components/gizi/ContentDiet";

function page2() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center">
        <Title />
        <div className="mt-24 flex items-center space-x-24">
          <Link href="/gizi" replace>
            <div className="rounded-full border-2 cursor-pointer bg-primary-surface border-primary-border">
              <h1 className="text-7xl font-bold px-5 py-5 text-primary">01</h1>
            </div>
          </Link>
          <div className="rounded-full bg-primary border-2 border-primary cursor-pointer">
            <h1 className="text-7xl font-bold text-white px-5 py-5">02</h1>
          </div>
          <Link href="/gizi/page-3">
            <div className="rounded-full  border-2  cursor-pointer bg-primary-surface border-primary-border">
              <h1 className="text-7xl font-bold text-primary px-5 py-5">03</h1>
            </div>
          </Link>
          <Link href="/gizi/page-4" replace>
            <div className="rounded-full border-2 cursor-pointer bg-primary-surface border-primary-border">
              <h1 className="text-7xl font-bold px-5 py-5 text-primary">04</h1>
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-center mt-32">
          <h2 className="text-primary text-5xl mb-10 font-bold">
            Diet Kesehatan Tulang
          </h2>
          <img src="/menuImg.png" alt="img" />
          <p className="text-gray-600 text-justify text-xl max-w-[820px] mt-5 mb-10">
            Anak dengan cerebral palsy memiliki risiko yang tinggi untuk
            mengalami kepadatan tulang rendah. Maka ada beberapa zat gizi yang
            dibutuhkan anak penyandang cerebral palsy adalah Kalsium, Fosfor,
            dan Vitamin D.
          </p>
          <ContentDiet title="Kalsium" cardTitle="Manfaat Kalsium" />
          <ContentDiet title="Fosfor" cardTitle="Manfaat Fosfor" />
          <ContentDiet title="Vitamin D" cardTitle="Manfaat Vitamin D" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page2;
