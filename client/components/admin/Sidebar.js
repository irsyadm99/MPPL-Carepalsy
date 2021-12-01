import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import NotificationDropdown from "./NotificationDropdown";
import UserDropdown from "./UserDropdown";
import { Avatar } from "@mui/material";
import authServices from "../../services/auth.services";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = useState("hidden");
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = authServices.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logout = () => {
    authServices.logout();
    window.location.replace("/");
  };

  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link href="/">
            <a
              href="#pablo"
              className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-xl uppercase font-bold p-4 px-0"
            >
              Cerepalsy
            </a>
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a
                      href="#pablo"
                      className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-xl uppercase font-bold p-4 px-0"
                    >
                      Cerepalsy
                    </a>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full mb-12" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xl uppercase font-bold block pt-1 pb-4 no-underline">
              Admin Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link href="/admin/dashboard">
                  <a
                    href="#pablo"
                    className={
                      "text-lg uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/dashboard") !== -1
                        ? "text-primary hover:text-primary-hover"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-tv mr-2 text-lg " +
                        (router.pathname.indexOf("/admin/dashboard") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Dashboard
                  </a>
                </Link>
              </li>
              <li className="items-center">
                <Link href="/admin/user">
                  <a
                    href="#pablo"
                    className={
                      "text-lg uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/user") !== -1
                        ? "text-primary hover:text-primary-hover"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-user mr-2 text-lg " +
                        (router.pathname.indexOf("/admin/user") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    User
                  </a>
                </Link>
              </li>
              <li className="items-center">
                <Link href="/admin/post">
                  <a
                    href="#pablo"
                    className={
                      "text-lg uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/post") !== -1
                        ? "text-primary hover:text-primary-hover"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-feather-alt mr-2 text-lg " +
                        (router.pathname.indexOf("/admin/post") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Post
                  </a>
                </Link>
              </li>
              <li className="items-center">
                <Link href="/admin/comment">
                  <a
                    href="#pablo"
                    className={
                      "text-lg uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/comment") !== -1
                        ? "text-primary hover:text-primary-hover"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-comment mr-2 text-lg " +
                        (router.pathname.indexOf("/admin/comment") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Comment
                  </a>
                </Link>
              </li>
              <li className="items-center">
                <Link href="/admin/faq">
                  <a
                    href="#pablo"
                    className={
                      "text-lg uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/faq") !== -1
                        ? "text-primary hover:text-primary-hover"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-question-circle mr-2 text-lg " +
                        (router.pathname.indexOf("/admin/faq") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    FAQ
                  </a>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full mt-12" />
            <div className="flex flex-col items-center pt-10">
              <Avatar className="h-16 w-16">{currentUser?.user.name[0]}</Avatar>
              <div
                className="mt-5 bg-white border hover:bg-primary border-primary-border rounded-xl cursor-pointer"
                onClick={logout}
              >
                <h1 className="p-3 text-primary hover:text-white font-semibold">
                  Logout
                </h1>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
