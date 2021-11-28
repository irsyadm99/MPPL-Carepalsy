import React from "react";
import AdminNavbar from "../components/admin/AdminNavbar";
import FooterAdmin from "../components/admin/FooterAdmin";
import Sidebar from "../components/admin/Sidebar";

export default function Admin({ children }) {
  return (
    <>
      <Sidebar />
      <div className="px-4 md:px-10 flex flex-col items-center w-full bg-gray-500">
        {children}
      </div>
      <FooterAdmin />
    </>
  );
}
