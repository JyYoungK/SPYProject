import React, { useEffect } from "react";
import { Me } from "../../assets";

const Bio = ({ setPage, currentSeason, currentTheme }) => {
  useEffect(() => {
    setPage("Bio");
  }, []);

  const spring_theme = "text-theme_green ";
  const summer_theme = "text-theme_blue ";
  const autumn_theme = "text-theme_orange ";
  const winter_theme = "text-theme_black ";
  const light_theme = "text-theme_black";
  const dark_theme = "text-theme_white";

  return (
    <div className="mx-auto">
      <div className="h-1/2 mt-5 w-full flex justify-center items-center sm:flex-row flex-col relative animate-slidedown ">
        <img
          className="object-cover"
          src={Me}
          alt=""
          style={{ height: "500px" }}
        />
        <div className="lg:flex flex-col rounded-md shadow-lg  bg-white p-6 md:w-7/12 w-11/12 md:ml-5 mt-5">
          <h1
            className={`text-4xl font-bold  ${
              currentSeason === 1
                ? spring_theme
                : currentSeason === 2
                ? summer_theme
                : currentSeason === 3
                ? autumn_theme
                : winter_theme
            }`}
          >
            Hi, I'm Junyoung (Johnny)
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
            <h1
              className={`${
                currentSeason === 1
                  ? "text-green-400"
                  : currentSeason === 2
                  ? "text-yellow-200"
                  : currentSeason === 3
                  ? "text-orange-400"
                  : "text-indigo-600"
              } font-bold`}
            >
              Skill Set
            </h1>
            <p
              className={`${
                currentTheme === 1 ? dark_theme : light_theme
              } md: text-md lg: text-xl font-semibold`}
            >
              I am very comfortable building websites using React and designing
              with Tailwind. I am currently working on expanding my programming
              skills by learning NodeJS and NextJS.
            </p>
            <h2
              className={`${
                currentTheme === 1 ? dark_theme : light_theme
              } font-medium`}
            >
              React (JS/TS)
            </h2>
            <div className="w-full bg-gray-200 h-1.5 rounded-md">
              <div
                className={`w-full ${
                  currentSeason === 1
                    ? "bg-green-400"
                    : currentSeason === 2
                    ? "bg-yellow-200"
                    : currentSeason === 3
                    ? "bg-orange-400"
                    : "bg-indigo-600"
                } h-1.5 rounded-md`}
              ></div>
            </div>

            <h2
              className={`${
                currentTheme === 1 ? dark_theme : light_theme
              } font-medium`}
            >
              CSS (Tailwind)
            </h2>
            <div className="w-full bg-gray-200 h-1.5 rounded-md">
              <div
                className={`w-5/6 ${
                  currentSeason === 1
                    ? "bg-green-400"
                    : currentSeason === 2
                    ? "bg-yellow-200"
                    : currentSeason === 3
                    ? "bg-orange-400"
                    : "bg-indigo-600"
                } h-1.5 rounded-md`}
              ></div>{" "}
            </div>
            <h2
              className={`${
                currentTheme === 1 ? dark_theme : light_theme
              } font-medium`}
            >
              NodeJS, NextJS
            </h2>
            <div className="w-full bg-gray-200 h-1.5 rounded-md">
              <div
                className={`w-4/6 ${
                  currentSeason === 1
                    ? "bg-green-400"
                    : currentSeason === 2
                    ? "bg-yellow-200"
                    : currentSeason === 3
                    ? "bg-orange-400"
                    : "bg-indigo-600"
                } h-1.5 rounded-md`}
              ></div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
