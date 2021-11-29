import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import Title from "../../components/gizi/Title";
import Content from "../../components/gizi/Content";

function page4() {
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
          <Link href="/gizi/page-2">
            <div className="rounded-full bg-primary-surface border-2 border-primary-border cursor-pointer">
              <h1 className="text-7xl font-bold text-primary px-5 py-5">02</h1>
            </div>
          </Link>
          <Link href="/gizi/page-3" replace>
            <div className="rounded-full border-2 cursor-pointer bg-primary-surface border-primary-border">
              <h1 className="text-7xl font-bold px-5 py-5 text-primary">03</h1>
            </div>
          </Link>
          <div className="rounded-full bg-primary border-2 border-primary cursor-pointer">
            <h1 className="text-7xl font-bold text-white px-5 py-5">04</h1>
          </div>
        </div>
        <div className="flex flex-col items-center mt-32 space-y-12">
          <Content title="Anjuran Makanan Untuk Anak CP" />
          <Content title="Makanan Yang Tidak Dianjurkan" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page4;
