import React from "react";
import logo from "../assets/images/svg/logo-nav.svg";
import social_sensor from "../assets/images/webp/social-sensor.webp";
import social_tensor from "../assets/images/webp/social-tensor.webp";
import social_sensor_responsive from "../assets/images/webp/social-sensor-responsive.webp";
import Icons from "../common/Icons";
import { useState } from "react";
import Header from "../common/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { items } from "../common/Helper";

const SocialTensor = () => {
  var settings = {
    centerMode: true,
    slidesToShow: 12,
    centerPadding: "0px",
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 0,
    infinite: true,
    dots: false,
    arrows: false,
    slidesToScroll: 1,
    vertical: true,
    speed: 2000,
    pauseOnHover: false,
  };
  const [isHovered, setIsHovered] = useState(false);
  const HANDLE_MOUSE_OVER = (e) => {
    const centerSlide = e.target.closest(".slick-center p");
    if (centerSlide) {
      setIsHovered(true);
    }
  };
  const HANDLE_MOUSE_OUT = (e) => {
    const centerSlide = e.target.closest(".slick-center p");
    if (centerSlide) {
      setIsHovered(false);
    }
  };
  const [show, setShow] = useState(true);
  function HANDLE_SHOW(e) {
    const centerSlide = e.target.closest(".slick-center p");
    if (centerSlide) {
      setShow(false);
    }
  }
  function HANDLE_HIDE() {
    setShow(true);
  }

  // slick-slider
  return (
    <div className="overflow-hidden branding_padding vh-100 bg-black d-flex flex-column position-relative ">
      <div className="d-sm-block d-none">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="d-flex flex-column flex-grow-1 justify-content-center align-items-center">
        <Slider {...settings} className="vertical_slider">
          {items.map((item, index) => (
            <div
              className="d-flex align-items-center justify-content-center"
              key={index}
            >
              <p
                className="mb-0 show_box text-center slider_text d-inline-block font_gilroy_semibold_italic lh_52 fst-italic"
                onMouseOver={HANDLE_MOUSE_OVER}
                onMouseOut={HANDLE_MOUSE_OUT}
                onClick={HANDLE_SHOW}
              >
                {item}
              </p>
            </div>
          ))}
        </Slider>
        <div className=" d-none d-xl-block">
          <div
            className={`${isHovered ? "hovered" : ""
              } common_box common_box_position bg-black common_box_position common_box_position_transform_1 d-flex align-items-end justify-content-between`}
          >
            <p className="common_text_transform  text-white font_gilroy_semibold_italic fw-normal fst-italic text_12 lh_16 ">
              UI UX
            </p>

            <img
              className="social_sensor_img_w"
              src={social_sensor}
              alt="social_sensor"
            />
          </div>
          <div
            className={`${isHovered ? "hovered" : ""
              } common_box common_box_position bg-black common_box_position social_tensor_transition_2`}
          >
            <div className="position-relative d-flex justify-content-end">
              <p className="common_text_transform branding_text_pos mb-4 text-white font_gilroy_semibold_italic fw-normal fst-italic text_12 lh_16 ">
                Branding
              </p>

              <img
                className="social_tensor_img_w"
                src={social_tensor}
                alt="social_tensor"
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="responsive_box_pos">
            <div
              className={`${show ? "d-none" : "d-block"
                } d-flex d-xl-none mt_153 flex-column align-items-end`}
            >
              <div
                onClick={HANDLE_HIDE}
                className="d-flex justify-content-center cross_icon_box align-items-center"
              >
                <Icons icon="Cross_Icon" className="cursor_pointer" />
              </div>
              <div className="responsive_box grey">
                <div className="position-relative justify-content-end d-flex gap_12 w-100">
                  <p className="ui_ux_text_transform mb-0 text-nowrap text-white font_gilroy_semibold_italic fw-normal fst-italic text_12 lh_16 ">
                    UI UX
                  </p>
                  <div>
                    <img
                      className="social_sensor_img_w"
                      src={social_sensor_responsive}
                      alt="sensor"
                    />
                  </div>
                </div>
                <div className="mt_20 position-relative justify-content-end d-flex gap_12 w-100">
                  <p className="branding_text_transform text-nowrap mb-0 text-white font_gilroy_semibold_italic fw-normal fst-italic text_12 lh_16 ">
                    Branding
                  </p>

                  <div>
                    <img
                      className="social_sensor_img_w"
                      src={social_tensor}
                      alt="tensor"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute bottom-0 z-3 flex-column w-100 justify-content-center slider_gradient">
        <Header />
      </div>
    </div>
  );
};

export default SocialTensor;