import React from "react";
// import { useNavigate } from "react-router-dom";

const PictureCard = ({ pin, openModal, setOpenPin }) => {
  //   const navigate = useNavigate();

  return (
    <div
      className="mt-6 inline-flex p-2 animate-slideup"
      onClick={() => {
        openModal();
        setOpenPin(pin);
      }}
    >
      <div className="flex items-center box-border cursor-pointer w-60">
        <img
          className="flex w-full rounded-2xl object-cover"
          src={pin.urls?.regular}
          alt="pin"
        />
      </div>
    </div>
  );
};

export default PictureCard;
