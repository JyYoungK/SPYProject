import React, { useState } from "react";
import { Error, Loader, PictureCard, PictureSearchBar } from "../components";
import { useGetRandomPhotosQuery } from "../redux/services/unsplashCore";
import dummyPictureJSON from "../assets/dummyPictureData.json"; //Read data from local json file
import { AiFillDatabase, AiFillInstagram } from "react-icons/ai";
import { BsCameraFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
const DisplayPictures = () => {
  const { data, isFetching, error } = useGetRandomPhotosQuery();
  const [openModal, setOpenModal] = useState(false);
  const [openPin, setOpenPin] = useState();
  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  let pins;
  if (data) {
    pins = data;
  } else {
    pins = dummyPictureJSON.results;
  }

  if (isFetching) return <Loader title={`Searching Pictures...`} />;

  if (error) return <Error />;
  console.log(pins);
  return (
    <div className="ml-5 flex flex-col ">
      <PictureSearchBar className="fixed bottom-0 left-0 w-full" />

      {openModal && (
        <div className="relative w-full flex flex-row bg-white ">
          <div className="mb-8  w-full items-center ">
            <a href={openPin?.links.html} target="_blank">
              <img
                alt="picture"
                src={
                  openPin
                    ? openPin?.urls.full
                    : "https://t3.ftcdn.net/jpg/03/34/83/22/360_F_334832255_IMxvzYRygjd20VlSaIAFZrQWjozQH6BQ.jpg"
                }
                className="ml-60 mt-3 w-6/12 h-full object-cover border-2 shadow-xl items-center shadow-black"
              />
            </a>
          </div>
          <div className=" w-8/12 flex flex-col">
            <div className="inset-0 flex items-center">
              <div className="flex flex-row w-full bg-orange-200 pb-3">
                <img
                  alt="profile"
                  src={
                    openPin?.user.profile_image.large
                      ? openPin?.user.profile_image.large
                          .replace("{w}", "200")
                          .replace("{h}", "200")
                      : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  }
                  className="ml-5 mt-2 sm:w-24 w-14 sm:h-24 h-14 rounded-full object-cover border-2 shadow-xl shadow-black"
                />
                <div className="flex flex-col ml-5 mt-7">
                  <a href={openPin?.user.links.html} target="_blank">
                    <p className="font-bold sm:text-lg text-md text-black">
                      {openPin?.user.name ? openPin?.user.name : "Unknown"}
                    </p>
                  </a>

                  <p className="font-bold sm:text-lg text-md text-gray-500">
                    {openPin?.user.username
                      ? openPin?.user.username
                      : "Unknown"}
                  </p>
                  {openPin?.user?.for_hire ? (
                    openPin?.user?.for_hire ? (
                      <p className="font-bold sm:text-lg text-md text-blue-400">
                        "Hire me!
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
              </div>
            </div>
            <div className="bg-orange-100 h-full ">
              <div className="ml-5 mt-8 flex flex-row w-full ">
                <div className="flex flex-col mx-4">
                  <div className="text-gray-600 sm:text-base md:text-xl">
                    Views
                  </div>
                  <div className="sm:text-base md:text-xl">
                    {openPin?.views}
                  </div>
                </div>
                <div className="flex flex-col mx-4">
                  <div className="text-gray-600 sm:text-base md:text-xl">
                    Likes
                  </div>
                  <div className="sm:text-base md:text-xl">
                    {openPin?.likes}
                  </div>
                </div>
                <div className="flex flex-col mx-4">
                  <div className="text-gray-600 sm:text-base md:text-xl">
                    Downloads
                  </div>
                  <div className="sm:text-base md:text-xl">
                    {openPin?.downloads}
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <div className="ml-9 mt-8 flex flex-row text-black sm:text-base md:text-xl">
                  <IoLocationSharp className="mr-2" />
                  {openPin?.location.name ? openPin?.location.name : "Unknown"}
                </div>
                <div className="ml-9 mt-4 flex flex-row text-black sm:text-base md:text-xl">
                  <AiFillDatabase className="mr-2" />
                  {openPin?.user.updated_at
                    ? openPin?.user.updated_at
                    : "Unknown"}
                </div>
                <div className="ml-9 mt-4 flex flex-row text-black sm:text-base md:text-xl">
                  <BsCameraFill className="mr-2" />
                  {openPin?.exif?.name
                    ? openPin?.exif?.name + " " + openPin?.exif?.aperture
                    : "Unknown"}
                </div>
                <div className="ml-9 mt-4 flex flex-row text-black sm:text-base md:text-xl">
                  <AiFillInstagram className="mr-2" />
                  {openPin?.user.instagram_username
                    ? openPin?.user.instagram_username
                    : "Unknown"}
                </div>
              </div>
            </div>
          </div>
          {/* <button onClick={toggleModal}>Toggle Modal</button> */}
        </div>
      )}

      {data ? (
        <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10"></h2>
      ) : (
        <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
          Sorry, API request call has reached the max amount. Displaying Car
          pictures instead.
        </h2>
      )}

      <div className="flex w-full h-full justify-center">
        <div className="h-full 3xl:max-w-7xl 3xl:columns-5 md:max-w-4xl md:columns-3 sm:max-w-xl sm:columns-2  ">
          {pins.map((pin, i) => (
            <PictureCard
              key={i}
              pin={pin}
              openModal={toggleModal}
              setOpenPin={setOpenPin}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayPictures;
