import React from "react";
import { useLocation } from "react-router-dom";

const PictureDetails = () => {
  const location = useLocation();
  const { pin } = location.state;
  console.log(pin);
  return <div>PictureDetail</div>;
};

export default PictureDetails;
