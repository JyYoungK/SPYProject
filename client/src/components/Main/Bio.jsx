import React, { useEffect } from "react";
import { Me } from "../../assets";

const Bio = ({ setPage }) => {
  useEffect(() => {
    setPage("Bio");
  }, []);

  return (
    <div className="ml-5">
      <div className="mt-5 flex flex-row overflow-hidden justify-center items-center h-1/2  relative ">
        <img
          className="object-cover"
          src={Me}
          alt=""
          style={{ height: "500px" }}
        />
        <div className="ml-5 hidden lg:flex flex-col  rounded-md shadow-lg  bg-white p-6 w-7/12">
          <h1 className="text-4xl font-bold text-indigo-900">
            Hi, I'm Junyoung
          </h1>
          <p className="pt-3 text-xl text-gray-500 indent-3">
            I am from Toronto, Canada and I have two years of experience as a
            Front End developer. I created this website using React,
            TailwindCSS, and all the datas are being fetched from rapidapi.com
            and api.unsplash.com. The API key I am using is free and it has a
            limit but I am planning to upgrade to a paid plan soon. I hope you
            enjoy it!
          </p>
          <a
            className="bg-indigo-600 text-white text-xl mt-2 px-3 py-2 rounded-md font-semibold w-fit"
            href="https://docs.google.com/document/d/e/2PACX-1vTGUTiJz4ccPZWYCpzok4iGb1vxGJPJCl96YAUsQauYtjcgeHvxV7_T8HBMKJwK5Q/pub"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>
      <div className=" dark:bg-slate-900">
        <div className="container mx-auto py-40 flex flex-col-reverse lg:flex-row items-center gap-20">
          <div className="my-auto flex flex-col gap-3">
            <h1 className="text-indigo-600 font-bold">Skill Set</h1>
            <p className="text-gray-400 md: text-md lg: text-xl">
              I am very comfortable building websites using React and designing
              with Tailwind. I am currently working on expanding my programming
              skills by learning NodeJS and NextJS.
            </p>
            <h2 className="text-gray-400 font-medium">React (JS/TS)</h2>
            <div className="w-full bg-gray-200 h-1.5 rounded-md">
              <div className="w-full bg-indigo-600 h-1.5 rounded-md"></div>
            </div>

            <h2 className="text-gray-400 font-medium">CSS (Tailwind)</h2>
            <div className="w-full bg-gray-200 h-1.5 rounded-md">
              <div className="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
            </div>
            <h2 className="text-gray-400 font-medium">NodeJS, NextJS</h2>
            <div className="w-full bg-gray-200 h-1.5 rounded-md">
              <div className="w-4/6 bg-indigo-600 h-1.5 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
