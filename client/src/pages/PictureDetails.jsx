import React from "react";
import { AiFillDatabase, AiFillInstagram } from "react-icons/ai";
import { BsCameraFill } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";

const PictureDetails = ({ toggleModal, openPin }) => {
  return (
    <div className="relative h-100 w-full flex flex-row bg-white ">
      <div className="mb-8 w-full items-center ">
        <a href={openPin?.links.html} target="_blank">
          <img
            alt="picture"
            src={
              openPin
                ? openPin?.urls?.full
                : "https://t3.ftcdn.net/jpg/03/34/83/22/360_F_334832255_IMxvzYRygjd20VlSaIAFZrQWjozQH6BQ.jpg"
            }
            className="mx-auto mt-3 w-6/12 h-full object-cover border-2 shadow-xl items-center shadow-black"
          />
        </a>
      </div>
      <div className=" w-8/12 flex flex-col">
        <div className="inset-0 flex items-center">
          <div className="flex flex-row w-full bg-orange-200 pb-3">
            <img
              alt="profile"
              src={
                openPin?.user?.profile_image?.large
                  ? openPin?.user.profile_image.large
                      .replace("{w}", "200")
                      .replace("{h}", "200")
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              }
              className="ml-5 mt-3 md:w-32 w-16 md:h-32 h-14 rounded-full object-cover border-2 shadow-xl shadow-black"
            />
            <div className="flex flex-col ml-5 mt-7">
              <a href={openPin?.user.links.html} target="_blank">
                <p className="font-bold sm:text-lg text-md text-black">
                  {openPin?.user?.name ? openPin?.user.name : "Unknown"}
                </p>
              </a>

              <p className="font-bold sm:text-lg text-md text-gray-500">
                {openPin?.user?.username ? openPin?.user.username : "Unknown"}
              </p>
              {openPin?.user?.for_hire ? (
                openPin?.user?.for_hire ? (
                  <p className="font-bold sm:text-lg text-md text-blue-400">
                    Hire me!
                  </p>
                ) : (
                  <p className="font-bold sm:text-lg text-md text-green-400">
                    Hobbiest
                  </p>
                )
              ) : (
                <p className="font-bold sm:text-lg text-md text-green-400">
                  Hobbiest
                </p>
              )}
            </div>
            <div className="absolute top-2 right-2">
              <button onClick={toggleModal}>
                <GrClose />
              </button>
            </div>
          </div>
        </div>
        <div className="bg-orange-100 h-full flex flex-col ">
          <div className="ml-5 mt-4 flex flex-row w-full text-gray-600 sm:text-base md:text-lg">
            <div className="flex flex-col mx-5">
              <div>Views</div>
              <div className="sm:text-base md:text-xl">
                {openPin?.views
                  ? parseInt(openPin?.views).toLocaleString()
                  : "?"}
              </div>
            </div>
            <div className="flex flex-col mx-5">
              <div>Likes</div>
              <div className="sm:text-base md:text-xl">
                {openPin?.likes
                  ? parseInt(openPin?.likes).toLocaleString()
                  : "?"}
              </div>
            </div>
            <div className="flex flex-col mx-5">
              <div>Downloads</div>
              <div className="sm:text-base md:text-xl">
                {openPin?.downloads
                  ? parseInt(openPin?.downloads).toLocaleString()
                  : "?"}
              </div>
            </div>
          </div>
          <div className="h-full mt-3 mb-2 flex flex-col justify-evenly text-black md:text-lg ">
            <div className="ml-9 flex flex-row">
              <IoLocationSharp className="mr-2 mt-1" />
              {openPin?.location?.name
                ? openPin?.location.name.length > 12
                  ? openPin?.location.name.split(",")[0]
                  : openPin?.location.name
                : "Unknown"}
            </div>
            <div className="ml-9 flex flex-row">
              <AiFillDatabase className="mr-2 mt-1" />
              <div className="mr-11">
                {openPin?.user?.updated_at
                  ? openPin?.user.updated_at.slice(0, 10)
                  : "Unknown"}
              </div>
            </div>

            <div className="ml-9 flex flex-row ">
              <BsCameraFill className="mr-2 mt-1" />
              {openPin?.exif?.name ? openPin?.exif?.name : "Unknown"}
            </div>
            <div className="ml-9 flex flex-row ">
              <AiFillInstagram className="mr-2 mt-1" />
              {openPin?.user?.instagram_username
                ? openPin?.user?.instagram_username
                : "Unknown"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PictureDetails;
