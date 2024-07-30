import React, { useState, useRef } from "react";
import logo from "../assets/images/svg/logo-nav.svg";
import social_sensor from "../assets/images/webp/social-sensor.webp";
import social_tensor from "../assets/images/webp/social-tensor.webp";
import social_sensor_responsive from "../assets/images/webp/social-sensor-responsive.webp";
import Icons from "../common/Icons";
import Header from "../common/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SLIDER_LIST } from "../common/Helper";

const SocialTensor = () => {
  const settings = {
    centerMode: true,
<<<<<<< HEAD
    slidesToShow: 20,
    centerPadding: "0px",
    // verticalSwiping: true,
=======
>>>>>>> ec102b341a1023d94b7a9b5b504a00c3ef6192f8
    infinite: true,
    initialSlide: Math.floor(SLIDER_LIST.length / 2),
    slidesToShow: 18.5,
    centerPadding: "0px",
    verticalSwiping: true,
    dots: false,
    arrows: false,
    vertical: true,
    swipeToSlide: true,
    speed: 2000,
    pauseOnHover: false,
<<<<<<< HEAD
    initialSlide: Math.floor(SLIDER_LIST.length / 2),
    touchThreshold: 1, // Adjusted value
=======
    touchThreshold: 1,
>>>>>>> ec102b341a1023d94b7a9b5b504a00c3ef6192f8
    touchMovementThreshold: 1,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 17.5,
        }
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 10,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 10,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 14,
          autoplay: true,
        autoplaySpeed: 2000, 
        }
      },
    ]
  };

  const [isHovered, setIsHovered] = useState(false);
  const [show, setShow] = useState(true);
  const sliderRef = useRef(null);


  const HANDLE_WHEEL = (e) => {
    if (e.deltaY > 0) {
      sliderRef.current.slickNext();
    } else {
      sliderRef.current.slickPrev();
    }
  };
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

  const HANDLE_SHOW = (e) => {
    const centerSlide = e.target.closest(".slick-center p");
    if (centerSlide) {
      setShow(false);
    }
  };

  const HANDLE_HIDE = () => {
    setShow(true);
  };

  return (
    <div className="overflow-hidden min-vh-100 bg-black d-flex flex-column position-relative scroll_behave" onWheel={HANDLE_WHEEL}>
      <div className="d-sm-block d-none branding_padding position-absolute z-3">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="d-flex flex-column flex-grow-1 justify-content-center align-items-center">
        <Slider {...settings} ref={sliderRef} className="vertical_slider">
          {SLIDER_LIST.map((item, index) => (
            <div
              className="d-flex align-items-center justify-content-center"
              key={index}
            >
              <p
                className="mb-0 show_box text-center slider_text d-inline-block lh_52 fst-italic"
                onMouseOver={HANDLE_MOUSE_OVER}
                onMouseOut={HANDLE_MOUSE_OUT}
                onClick={HANDLE_SHOW}
                style={{fontSize:index === 0 && '80px' }}
              >
                {item}
              </p>
            </div>
          ))}
        </Slider>
        <div className="d-none d-xl-block">
          <div
            className={`${isHovered && "hovered"
              } common_box common_box_position bg-black common_box_position common_box_position_transform_1 d-flex align-items-end justify-content-between`}
          >
            <p className="common_text_transform  text-white fw-normal fst-italic text_sm lh_16">
              UI UX
            </p>
            <img
              className="social_sensor_img_w"
              src={social_sensor}
              alt="social_sensor"
            />
          </div>
          <div
            className={`${isHovered && "hovered"
              } common_box common_box_position bg-black common_box_position social_tensor_transition_2`}
          >
            <div className="position-relative d-flex justify-content-end">
              <p className="common_text_transform branding_text_pos mb-4 text-white fw-normal fst-italic text_sm lh_16">
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
                  <p className="ui_ux_text_transform mb-0 text-nowrap text-white fw-normal fst-italic text_sm lh_16">
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
                  <p className="branding_text_transform text-nowrap mb-0 text-white fw-normal fst-italic text_sm lh_16">
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