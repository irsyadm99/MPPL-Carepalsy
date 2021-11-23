import Button from "./Button";
import { useRouter } from "next/router";
import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import authServices from "../services/auth.services";

function Header() {
  const router = useRouter();
  // const currentUser = authServices.getCurrentUser();
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = authServices.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logout = () => {
    authServices.logout();
    router.reload();
  };

  return (
    <header className="sticky top-0 flex z-50 justify-evenly bg-white py-5 px-6 shadow-sm ">
      {/* Left */}
      <div
        className="flex items-center justify-center cursor-pointer"
        onClick={() => router.push("/")}
      >
        <h1 className="text-xl font-bold text-primary">CEREPALSY</h1>
      </div>

      {/* Middle */}
      <div className="flex space-x-8 items-center">
        <h3 className="text-md text-gray-400 cursor-pointer">Tentang CP</h3>
        <h3 className="text-md text-gray-400 cursor-pointer">Gizi CP</h3>
        <h3 className="text-md text-gray-400 cursor-pointer">
          Rekomendasi Menu
        </h3>
        <h3
          className="text-md text-gray-400 cursor-pointer"
          onClick={() => router.push("forum")}
        >
          Forum
        </h3>
      </div>

      {/* Right */}
      {currentUser ? (
        <div className="flex items-center space-x-3">
          <Avatar className="h-12 w-12" onClick={logout}>
            {currentUser?.user.name[0]}
          </Avatar>
          <h2 className="text-lg">{currentUser?.user.name}</h2>
        </div>
      ) : (
        <div className="flex space-x-2">
          <button
            className="px-4 py-2 text-primary bg-white border-2 border-primary-border font-semibold rounded-lg"
            onClick={() => router.push("login")}
          >
            Masuk
          </button>
          <div className="" onClick={() => router.push("signup")}>
            <Button text="Daftar" />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
