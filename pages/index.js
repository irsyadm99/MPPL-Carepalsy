import Head from "next/head";
import Banner from "../components/Banner";
import Button from "../components/Button";
import Card from "../components/Card";
import Header from "../components/Header";
import { MoonIcon, SunIcon, CloudIcon } from "@heroicons/react/solid";
import HomeMenuCard from "../components/HomeMenuCard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Carepalsy</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      <main className="flex flex-col">
        <div className="flex flex-col items-center mt-24 space-y-1">
          <h1 className="text-5xl font-bold mb-6">Tentang Cerebral Palsy</h1>
          <p className="text-md text-gray-600">
            Sebelum kita masuk ke edukasi pola makan, mari kita
          </p>
          <p className="text-md text-gray-600">kenali kembali cerebral palsy</p>
        </div>

        {/* Cards */}
        <section className="">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 mt-16">
            <Card
              index="01"
              title="Apa itu Cerebral Palsy"
              desc="Penyakit Cerebral palsy atau lumpuh otak adalah penyakit yang menyebabkan gangguan pada gerakan dan koordinasi tubuh. Penyakit ini disebabkan oleh gangguan..."
            />

            <Card
              className=""
              index="02"
              title="Faktor Penyebab Cerebral Palsy"
              desc="Cerebral palsy adalah salah satu penyebab paling umum dari kecacatan yang terjadi pada anak-anak. Biasanya, adanya kelainan ini pada anak dapat terdeteksi saat anak..."
            />
            <Card
              className=""
              index="03"
              title="Gangguan Fisik Cerebral Palsy"
              desc="Pada anak atau bayi yang terkena cerebral palsy, akan timbul berbagai gangguan fisik seperti gaya berjalan tidak normal dan juga sejumlah gejala berikut ini..."
            />
            <Card
              index="04"
              title="Jenis Cerebral Palsy"
              desc="Cerebral palsy sendiri terbagi menjadi beberapa jenis, ada tiga jenis cerebral palsy (CP) adalah spastic (paling umum), dyskinetik, dan ataksik..."
            />
          </div>
        </section>

        <section className="mt-24 flex h-[300px] sm:h-[400px] lg:h-[720px] bg-primary-surface items-center justify-evenly">
          <div className="w-[505px] h-[382px] leading-7 mt-[114px]">
            <div className="mb-5">
              <h1 className="text-6xl text-primary font-bold mb-3">
                Gizi Cerebral Palsy
              </h1>
            </div>
            <p className="text-md mb-5 text-gray-600">
              Kami menyediakan informasi mengenai kebutuhan gizi yang perlu
              dipenuhi oleh anak penyandang cerebral palsy
            </p>
            <Button text="Lanjut" />
          </div>
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1595183241165-f6ba98b7d4eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
              alt="img"
              className="w-[612px] h-[547px] border-2 border-primary-border object-cover rounded-lg"
            />
          </div>
        </section>

        <section className="bg-white">
          <div className="pt-24 pl-24 flex items-center justify-evenly">
            <img
              src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1935&q=80"
              alt="img"
              className="border-2 border-primary-border object-cover rounded-lg w-[612px] h-[547px] -ml-32"
            />

            <div className="w-[520px] h-[382px] leading-7 ">
              <div className="mb-5">
                <h1 className="text-6xl text-primary font-bold mb-3 ">
                  Rekomendasi Menu
                </h1>
              </div>
              <p className="text-md mb-5 text-gray-600">
                Kami sudah menyiapkan rekomendasi menu makanan yang dapat ayah
                dan bunda buat dirumah untuk dicoba
              </p>
              <HomeMenuCard Icon={SunIcon} title="Menu Sarapan" />
              <HomeMenuCard Icon={CloudIcon} title="Menu Makan Siang" />
              <HomeMenuCard Icon={MoonIcon} title="Menu Makan Malam" />
            </div>
          </div>
        </section>

        <section className="mt-24 border-t-2 border-[#7575]">
          <div className="flex flex-col items-center justify-center py-24">
            <h1 className="text-5xl text-primary font-bold mb-6">FAQ</h1>
            <p className="text-lg text-gray-600 mb-1">
              Dalam FAQ kita dapat meilhat jawaban dari
            </p>
            <p className="text-lg text-gray-600 mb-6">
              pertanyaan yang biasanya ditanyakan oleh orang lain
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
