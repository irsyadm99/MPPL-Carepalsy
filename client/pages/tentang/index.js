import React, { useState } from "react";
import Header from "../../components/Header";
import Content from "../../components/tentang/Content";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
function Tentang() {
  const [title, setTitle] = useState("Apa itu Cerebral Palsy");
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center space-y-8 mt-12">
        <h1 className="text-4xl font-extrabold tracking-wider">{title}</h1>
        <img alt="img" src="/contentimg.png" />
        <Content />
        <div className="grid grid-cols-2 max-w-[820px]">
          <div
            onClick={(e) => {
              e.preventDefault();
              setTitle("Apa itu Cerebral Palsy");
            }}
          >
            <Card
              index="01"
              title="Apa itu Cerebral Palsy"
              desc="Penyakit Cerebral palsy atau lumpuh otak adalah penyakit yang menyebabkan gangguan pada gerakan dan koordinasi tubuh."
            />
          </div>
          <div
            onClick={(e) => {
              e.preventDefault();
              setTitle("Faktor Penyebab Cerebral Palsy");
            }}
          >
            <Card
              index="02"
              title="Faktor Penyebab Cerebral Palsy"
              desc="Cerebral palsy adalah salah satu penyebab paling umum dari kecacatan yang terjadi pada anak-anak. Biasanya, adanya kelainan ini pada anak dapat terdeteksi saat anak..."
            />
          </div>
          <div
            onClick={(e) => {
              e.preventDefault();
              setTitle("Gangguan Fisik Cerebral Palsy");
            }}
          >
            <Card
              index="03"
              title="Gangguan Fisik Cerebral Palsy"
              desc="Pada anak atau bayi yang terkena cerebral palsy, akan timbul berbagai gangguan fisik seperti gaya berjalan tidak normal dan juga sejumlah gejala berikut ini..."
            />
          </div>
          <div
            onClick={(e) => {
              e.preventDefault();
              setTitle("Faktor Penyebab Cerebral Palsy");
            }}
          >
            <Card
              index="02"
              title="Faktor Penyebab Cerebral Palsy"
              desc="Cerebral palsy adalah salah satu penyebab paling umum dari kecacatan yang terjadi pada anak-anak. Biasanya, adanya kelainan ini pada anak dapat terdeteksi saat anak..."
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Tentang;
