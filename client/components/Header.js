import Button from "./Button";
import { useRouter } from "next/router";
import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import authServices from "../services/auth.services";
import Link from "next/link";
import { createPopper } from "@popperjs/core";

function Header() {
  const router = useRouter();
  // const currentUser = authServices.getCurrentUser();
  const [currentUser, setCurrentUser] = useState(undefined);
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

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
        <Link href="gizi">
          <h3 className="text-md text-gray-400 cursor-pointer">Gizi CP</h3>
        </Link>
        <Link href="menus">
          <h3 className="text-md text-gray-400 cursor-pointer">
            Rekomendasi Menu
          </h3>
        </Link>
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
          <div className="">
            <Avatar
              className="h-12 w-12"
              ref={btnDropdownRef}
              onClick={(e) => {
                e.preventDefault();
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              {currentUser?.user.name[0]}
            </Avatar>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
              }
            >
              <a
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 cursor-pointer"
                }
                onClick={logout}
              >
                Logout
              </a>
            </div>
          </div>
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
