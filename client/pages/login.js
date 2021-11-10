import Image from "next/image";

function login() {
  return (
    <div className="flex">
      <section className="max-w-2xl">
        <div className="my-60 mx-80 w-96">
          <h1 className="text-5xl">Masuk</h1>
          <form className="space-y-3 mt-10">
            <p className="text-lg">Email</p>
            <input
              type="email"
              className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white 
              text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 
              focus:border-transparent"
              placeholder="Your email"
            />
            <p className="text-lg">Kata Sandi</p>
            <input
              type="password"
              className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white 
              text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 
              focus:border-transparent"
              placeholder="Your password"
            />
            <p className="text-md text-gray-400">Lupa password?</p>
            <button className="px-4 py-2 text-white bg-primary font-semibold rounded-lg border-2 border-primary-hover w-full">
              Masuk
            </button>
          </form>

          <p>Tidak punya akun?</p>
          <button className="px-4 py-2 text-primary bg-white border-2 border-primary-border font-semibold rounded-lg w-full">
            Buat
          </button>
        </div>
      </section>
      <section className="hidden lg:inline">
        <Image
          src="/loginimg.png"
          layout="fill"
          objectFit="contain"
          objectPosition="right"
        />
      </section>
    </div>
  );
}

export default login;
