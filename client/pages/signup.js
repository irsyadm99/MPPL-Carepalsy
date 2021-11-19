// import Image from "next/image";
import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { useRouter } from "next/router";

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

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div
        className="relative py-3 pl-4 pr-10 leading-normal text-red-700 bg-red-100 rounded-lg"
        role="alert"
      >
        <p>This is not a valid email.</p>
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

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div
        className="relative py-3 pl-4 pr-10 leading-normal text-red-700 bg-red-100 rounded-lg"
        role="alert"
      >
        <p>Minimal 3 huruf maksimal 20 huruf.</p>
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

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div
        className="relative py-3 pl-4 pr-10 leading-normal text-red-700 bg-red-100 rounded-lg"
        role="alert"
      >
        <p>Password minimal harus 6 huruf dan maksimal 40 huruf.</p>
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

function signup(props) {
  const router = useRouter();
  const form = useRef();
  const checkBtn = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    authServices.register(name, email, password).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
        setName("");
        setEmail("");
        setPassword("");
        router.replace("/");
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
        setSuccessful(false);
      }
    );
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="">
        <h1 className="text-2xl font-bold mb-10">Daftar akun</h1>
        <Form
          onSubmit={handleRegister}
          ref={form}
          className="w-[22.5rem] space-y-3"
        >
          <p className="text-lg">Nama Lengkap</p>
          <Input
            type="text"
            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white 
                  text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary 
                  focus:border-transparent"
            placeholder="Nama lengkap"
            value={name}
            onChange={onChangeName}
            validations={[required, vusername]}
          />
          <p className="text-lg">Email</p>
          <input
            type="email"
            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white 
                  text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary 
                  focus:border-transparent"
            placeholder="Your email"
            value={email}
            onChange={onChangeEmail}
            validations={[required, validEmail]}
          />
          <p className="text-lg">Kata Sandi</p>
          <input
            type="password"
            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white 
                  text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary 
                  focus:border-transparent"
            placeholder="Kata sandi"
            value={password}
            onChange={onChangePassword}
            validations={[required, vpassword]}
          />
          <p className="text-md text-gray-400">*minimal 6 karakter</p>

          <p className="text-sm text-center">
            Dengan mengklik daftar, kamu menyetujui{" "}
            <span className="text-primary underline cursor-pointer">
              Persyaratan dan Ketentuan
            </span>{" "}
            website kami
          </p>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-primary font-semibold rounded-lg border-2 border-primary-hover w-full"
          >
            Daftar
          </button>
          {message && (
            <div
              className={
                successful
                  ? "px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded-lg"
                  : "px-4 py-3 leading-normal text-red-700 bg-red-100 rounded-lg"
              }
              role="alert"
            >
              <p>{message}</p>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>

        <p className="text-md font-semibold mt-8 text-center">
          Punya akun?{" "}
          <span
            className="text-primary underline cursor-pointer"
            onClick={() => router.push("login")}
          >
            Masuk
          </span>
        </p>
      </div>
    </div>
  );
}

export default signup;
