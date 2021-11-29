import React from "react";
import Header from "../../components/Header";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Footer from "../../components/Footer";
import Link from "next/link";
import Title from "../../components/gizi/Title";

function index() {
  return (
    <div className="">
      <Header />
      <div className="flex flex-col items-center">
        <Title />
        <div className="mt-24 flex items-center space-x-24">
          <div className="rounded-full border-2 cursor-pointer bg-primary border-primary">
            <h1 className="text-7xl font-bold px-5 py-5 text-white">01</h1>
          </div>
          <Link href="/gizi/page-2">
            <div className="rounded-full bg-primary-surface border-2 border-primary-border cursor-pointer">
              <h1 className="text-7xl font-bold text-primary px-5 py-5">02</h1>
            </div>
          </Link>
          <Link href="/gizi/page-3">
            <div className="rounded-full bg-primary-surface border-2 border-primary-border cursor-pointer">
              <h1 className="text-7xl font-bold text-primary px-5 py-5">03</h1>
            </div>
          </Link>
          <Link href="/gizi/page-4" replace>
            <div className="rounded-full border-2 cursor-pointer bg-primary-surface border-primary-border">
              <h1 className="text-7xl font-bold px-5 py-5 text-primary">04</h1>
            </div>
          </Link>
        </div>
        <section className="flex flex-col items-center mt-36 max-w-[1248px]">
          <div className="grid grid-cols-2 space-x-20">
            <img src="/giziImg1.png" alt="img" className="" />
            <div className="flex flex-col mt-10">
              <h2 className="text-primary text-5xl mb-10 font-bold">
                Antropometri
              </h2>
              <p className="text-gray-600 text-justify text-xl max-w-[505px]">
                Antropometri merupakan salah satu indikator penilaian status
                gizi dengan mengukur beberapa parameter, diantaranya :
              </p>
              <ol className="mt-12">
                <li className="text-gray-600 text-xl">Umur</li>
                <li className="text-gray-600 text-xl">Berat Badan</li>
                <li className="text-gray-600 text-xl">Tinggi Badan</li>
                <li className="text-gray-600 text-xl">Lingkar Lengan Atas</li>
                <li className="text-gray-600 text-xl">Lingkar Kepala</li>
                <li className="text-gray-600 text-xl">Lingkar Dada</li>
                <li className="text-gray-600 text-xl">Lingkar Pinggul</li>
                <li className="text-gray-600 text-xl">
                  Tebal Lemak Dibawah Kulit
                </li>
              </ol>
            </div>
          </div>
          <div className="grid grid-cols-2 space-x-20 mt-44 place-items-center">
            <div className="flex flex-col">
              <h2 className="text-primary text-5xl mb-10 font-bold">GMFCS</h2>
              <p className="text-gray-600 text-justify text-xl max-w-[505px]">
                Gross Motor Function Classification System (GMFCS) digunakan
                untuk memberikan gambaran terkait fungsi motorik anak serta
                sebagai pedoman memelihara kondisi anak dalam skala GMFCS.
                Penjelasan lebih rinci dapat dilihat pada video disamping.
              </p>
            </div>
            <img src="/home1.png" alt="img" />
          </div>
          <div className="flex flex-col items-center mt-32">
            <h2 className="text-primary text-5xl mb-10 font-bold">
              Derajat GMFCS
            </h2>
            <div className="mb-10 flex flex-col items-center">
              <p className="text-lg text-gray-600">
                Perbedaan antar level didasarkan pada kemampuan
              </p>
              <p className="text-lg text-gray-600">
                fungsional serta kebutuhan alat bantu
              </p>
            </div>
            <div className="rounded-lg divide-solid divide-y divide-gray-400 border-2 border-gray-400 mt-8 min-w-[820px]">
              {[1, 2, 3, 4, 5].map((i) => (
                <div className="flex px-2 py-2" key={i}>
                  <h3 className="text-lg text-gray-700 font-normal flex-1">
                    GMFCS Derajat {i}
                  </h3>
                  <ChevronDownIcon className="w-6 h-6 text-gray-400 cursor-pointer" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default index;
