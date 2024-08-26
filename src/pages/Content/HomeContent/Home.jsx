import React from "react";
import { Carousel } from "antd";
import { Outlet } from "react-router-dom";
import banner_momo from "../../../assets/img/banner_momo.jpg"
export default function Home() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div className="home_content">
      <Carousel afterChange={onChange}>
        <div>
          <img  src={banner_momo} alt="" />
        </div>
        <div>
          <img src={banner_momo} alt="" />
        </div>
        <div>
          <img src={banner_momo} alt="" />
        </div>
      </Carousel>
      <Outlet/>
    </div>
  );
}
