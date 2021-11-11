import Image from "next/image";

function signup() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="">
        <h1 className="text-2xl font-bold mb-10">Daftar akun</h1>
        <form action="" className="w-[22.5rem] space-y-3">
          <p className="text-lg">Nama Lengkap</p>
          <input
            type="text"
            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white 
              text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary 
              focus:border-transparent"
            placeholder="Nama lengkap"
          />
          <p className="text-lg">Email</p>
          <input
            type="email"
            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white 
              text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary 
              focus:border-transparent"
            placeholder="Your email"
          />
          <p className="text-lg">Kata Sandi</p>
          <input
            type="password"
            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white 
              text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary 
              focus:border-transparent"
            placeholder="Kata sandi"
          />
          <p className="text-md text-gray-400">*minimal 8 karakter</p>
          <p className="text-lg">Konfirmasi Kata Sandi</p>
          <input
            type="password"
            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white 
              text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary 
              focus:border-transparent"
            placeholder="Kata sandi"
          />
          <p className="text-sm text-center">
            Dengan mengklik daftar, kamu menyetujui{" "}
            <span className="text-primary underline cursor-pointer">
              Persyaratan dan Ketentuan
            </span>{" "}
            website kami
          </p>
          <button className="px-4 py-2 text-white bg-primary font-semibold rounded-lg border-2 border-primary-hover w-full">
            Daftar
          </button>
        </form>
        <p className="text-md font-semibold mt-8 text-center">
          Punya akun?{" "}
          <span className="text-primary underline cursor-pointer">Masuk</span>
        </p>
      </div>
    </div>
  );
}

export default signup;
