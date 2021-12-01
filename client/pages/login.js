import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import authServices from "../services/auth.services";

const required = (value) => {
  if (!value) {
    return (
      <div
        className="relative py-3 pl-4 pr-10 leading-normal text-red-700 bg-red-100 rounded-lg"
        role="alert"
      >
        <p>This field is required!</p>
        <span className="absolute inset-y-0 right-0 flex items-center mr-4">
          <svg
            className="w-4 h-4 fill-current"
            role="button"
            viewBox="0 0 20 20"
          >
            <path
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
          </svg>
        </span>
      </div>
    );
  }
};

function login(props) {
  const router = useRouter();
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    // setSuccessful(false)

    form.current.validateAll();

    authServices.login(email, password).then(
      (response) => {
        console.log("Anda berhasil login");
        console.log(response);
        if (response.user.isAdmin) {
          router.replace("/admin/dashboard");
        } else {
          router.push("/");
        }
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
      }
    );
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center rounded-lg shadow-lg">
      <div className="rounded-lg shadow-lg">
        <div className="p-12">
          <h1 className="text-2xl font-bold mb-10">Masuk</h1>
          <Form
            onSubmit={handleLogin}
            className="w-[22.5rem] space-y-3"
            ref={form}
          >
            <p className="text-lg">Email</p>
            <Input
              type="email"
              className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white 
              text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary 
              focus:border-transparent"
              placeholder="Your email"
              value={email}
              onChange={onChangeEmail}
              validations={[required]}
            />
            <p className="text-lg">Kata Sandi</p>
            <Input
              type="password"
              className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white 
              text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary 
              focus:border-transparent"
              placeholder="Kata sandi"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
            <p className="text-md text-gray-500">Lupa password?</p>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-primary font-semibold rounded-lg border-2 border-primary-hover w-full"
            >
              Masuk
            </button>
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
          <div className="border-t-2 border-gray-400 mt-6">
            <p className="my-5 text-center">Tidak punya akun?</p>
            <button
              className="px-4 py-2 text-primary bg-white border-2 border-primary-border font-semibold rounded-lg w-full"
              onClick={() => router.push("signup")}
            >
              Buat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
