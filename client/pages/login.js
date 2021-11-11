import Image from "next/image";

function login() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="">
        <h1 className="text-2xl font-bold mb-10">Masuk</h1>
        <form action="" className="w-[22.5rem] space-y-3">
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
          <p className="text-md text-gray-500">Lupa password?</p>
          <button className="px-4 py-2 text-white bg-primary font-semibold rounded-lg border-2 border-primary-hover w-full">
            Masuk
          </button>
        </form>
        <div className="border-t-2 border-gray-400 mt-6">
          <p className="my-5 text-center">Tidak punya akun?</p>
          <button className="px-4 py-2 text-primary bg-white border-2 border-primary-border font-semibold rounded-lg w-full">
            Buat
          </button>
        </div>
      </div>
    </div>
  );
}

export default login;
