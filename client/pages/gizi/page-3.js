import React from "react";
import Header from "../../components/Header";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Footer from "../../components/Footer";
import Link from "next/link";
import Title from "../../components/gizi/Title";

const data = [
  {
    id: 1,
    text: "Makan dengan porsi sedikit namun sesering mungkin",
  },
  {
    id: 2,
    text: "Modifikasi tekstur makanan",
  },
  {
    id: 3,
    text: "Pertimbangan rute makanan",
  },
  {
    id: 4,
    text: "Peralatan makanan khusus",
  },
  {
    id: 5,
    text: "Pilih makanan padat kalori",
  },
];

function page3() {
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
          <div className="rounded-full  border-2  cursor-pointer bg-primary border-primary">
            <h1 className="text-7xl font-bold text-white px-5 py-5">03</h1>
          </div>
          <Link href="/gizi/page-4" replace>
            <div className="rounded-full border-2 cursor-pointer bg-primary-surface border-primary-border">
              <h1 className="text-7xl font-bold px-5 py-5 text-primary">04</h1>
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-center mt-32">
          <h2 className="text-primary text-5xl mb-10 font-bold">
            Strategi Pemberian Makanan
          </h2>
          <div className="rounded-lg divide-solid divide-y divide-gray-400 border-2 border-gray-400 mt-8 min-w-[820px]">
            {data.map((item) => (
              <div className="flex px-2 py-2" key={item.id}>
                <h3 className="text-lg text-gray-700 font-normal flex-1">
                  {item.text}
                </h3>
                <ChevronDownIcon className="w-6 h-6 text-gray-400 cursor-pointer" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page3;
