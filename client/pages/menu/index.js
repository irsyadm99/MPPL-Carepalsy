import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Card from "../../components/menu/Card";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

function index() {
  const [title, setTitle] = useState("Roti Bakar");

  return (
    <div>
      <Header />
      <div className="flex flex-col">
        <div className="flex flex-col items-center mt-24">
          <h1 className="text-5xl font-bold mb-6">Menu Makan Pagi</h1>
          <div className="mb-10 flex flex-col items-center">
            <p className="text-lg text-gray-600">
              Berikut merupakan beberapa menu makanan
            </p>
            <p className="text-lg text-gray-600">
              yang bisa ayah bunda persiapkan untuk
            </p>
            <p className="text-lg text-gray-600">sarapan si kecil</p>
          </div>
          <div className="flex items-center space-x-8 border-b-2 border-gray-300 pb-12">
            <div
              className=""
              onClick={(e) => {
                e.preventDefault();
                setTitle("Roti Bakar");
              }}
            >
              <Card title="Roti Bakar" />
            </div>
            <div
              className=""
              onClick={(e) => {
                e.preventDefault();
                setTitle("Pancake");
              }}
            >
              <Card title="Pancake" />
            </div>
            <div
              className=""
              onClick={(e) => {
                e.preventDefault();
                setTitle("Nasi Kuning");
              }}
            >
              <Card title="Nasi Kuning" />
            </div>
          </div>
        </div>
        <section className="flex flex-col items-center mt-24">
          <h1 className="text-5xl font-bold mb-10 text-primary">{title}</h1>
          <img src="/menuImg.png" alt="img" className="" />
          <div className="my-10 max-w-[822px] mx-auto">
            <p className="text-gray-600 text-justify text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
              cras scelerisque id imperdiet ac. Semper mattis nisl fusce purus
              eget nullam lectus velit ante. Sit nunc enim amet libero. Posuere
              fames auctor id id ut mi sed consequat. Magna vitae eget sapien
              venenatis orci malesuada.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default index;
