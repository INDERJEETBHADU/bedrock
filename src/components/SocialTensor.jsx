import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/images/svg/logo-nav.svg";
import social_sensor from "../assets/images/webp/social-sensor.webp";
import social_tensor from "../assets/images/webp/social-tensor.webp";
import social_sensor_responsive from "../assets/images/webp/social-sensor-responsive.webp";
import Icons from "../common/Icons";
import Header from "../common/Header";
import { CONTINUE_SLIDER, SLIDER_LIST } from "../common/Helper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard, Virtual } from "swiper/modules";
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/keyboard";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderKeyFrame from "./SliderKeyFrame";

const SocialTensor = () => {
  var settings = {
    infinite: true,
    dots: false,
    arrows: false,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: true,
    slidesToShow: 7,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  const getSlidesPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1920) return 13;
      if (window.innerWidth >= 1280) return 9;
      return 9;
    }
    return 9;
  };

  const getSpaceBetween = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1920) return 24;
      if (window.innerWidth >= 1280) return 24;
      return 0;
    }
    return 0;
  };

  const [slides, setSlides] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());
  const [spaceBetween, setSpaceBetween] = useState(getSpaceBetween());
  const swiperRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);
  const [ishovered, setishoverd] = useState(false);
  const [show, setShow] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const Mouse_Over = (e) => {
    const hoveredSlide = e.target.closest(".slider_text");
    if (hoveredSlide) {
      hoveredSlide.classList.add("hovered_position");
      setishoverd(!ishovered);
    }
  };

  const Mouse_out = (e) => {
    const hoveredSlide = e.target.closest(".slider_text");
    if (hoveredSlide) {
      hoveredSlide.classList.remove("hovered_position");
      setishoverd(false);
    }
  };

  const HANDLE_CLICK = (e) => {
    const centerSlide = e.target.closest(".active_slide");
    if (centerSlide) {
      setIsClicked(!isClicked);
    }
  };

  const HANDLE_SHOW = (e) => {
    const centerSlide = e.target.closest(".active_slide");
    if (centerSlide) {
      setShow(false);
    }
  };

  const HANDLE_HIDE = () => {
    setShow(true);
  };

  const HANDLE_DOCUMENT_CLICK = (e) => {
    const clickedInside =
      e.target.closest(".active_slide") || e.target.closest(".common_box");
    if (!clickedInside) {
      setIsClicked(false);
    }
  };

  useEffect(() => {
    setSlides([...SLIDER_LIST, ...SLIDER_LIST, ...SLIDER_LIST]);
    document.addEventListener("click", HANDLE_DOCUMENT_CLICK);
    return () => {
      document.removeEventListener("click", HANDLE_DOCUMENT_CLICK);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
      setSpaceBetween(getSpaceBetween());
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!swiperRef.current?.swiper) return;

    const updateSlideStyles = () => {
      const slides = swiperInstance.slides;
      const activeIndex = swiperInstance.activeIndex;
      const totalSlides = slides.length;
      const slidesPerView = swiperInstance.params.slidesPerView;

      slides.forEach((slide, index) => {
        const slideElement = slide.querySelector(".slide_content");
        if (!slideElement) return;

        const distance = Math.min(
          Math.abs(index - activeIndex),
          totalSlides - Math.abs(index - activeIndex)
        );
        const maxDistance = Math.floor(slidesPerView / 2);
        const normalizedDistance = distance / maxDistance;
      });
    };

    const swiperInstance = swiperRef.current.swiper;
    if (swiperInstance) {
      swiperInstance.on("slideChange", updateSlideStyles);
      swiperInstance.on("resize", updateSlideStyles);
      updateSlideStyles();
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.off("slideChange", updateSlideStyles);
        swiperInstance.off("resize", updateSlideStyles);
      }
    };
  }, [slides, slidesPerView, spaceBetween]);

  return (
    <div className="position-relative">
      <div className="d-sm-block d-none branding_padding position-absolute z-3">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="slider_height w-100 bg-black d-flex align-items-center justify-content-center overflow-hidden">
        <div className=" d-f lex  flex-column w-100 d-none d-md-block">
          {/* <Slider
            key={windowWidth + "_rtl"}
            {...{ ...settings, rtl: true }}
            className="w-100">
            {CONTINUE_SLIDER.map((obj, index) => (
              <div
                key={index}
                className="d-flex align-items-center justify-content-center">
                <h3
                  className="mb-0 text_lg opacity_20 text-white text-center text-nowrap slider_text fst-italic"
                  onMouseEnter={Mouse_Over}
                  onMouseLeave={Mouse_out}>
                  {obj.text}
                </h3>
              </div>
            ))}
          </Slider>
          <Slider key={windowWidth} {...settings} className="w-100 mt_10">
            {CONTINUE_SLIDER.map((obj, index) => (
              <div
                key={index}
                className="d-flex align-items-center justify-content-center">
                <h3
                  className="mb-0 text_lg opacity_20 text-white text-center text-nowrap slider_text fst-italic"
                  onMouseEnter={Mouse_Over}
                  onMouseLeave={Mouse_out}>
                  {obj.text}
                </h3>
              </div>
            ))}
          </Slider> */}
          <SliderKeyFrame />
        </div>
        <div
          className="d-flex align-items-center justify-content-center h-100 w-100 mx-auto slider_width"
          style={{ perspective: "1000px" }}>
          <Swiper
            ref={swiperRef}
            direction="vertical"
            slidesPerView={getSlidesPerView()}
            centeredSlides={true}
            spaceBetween={spaceBetween}
            mousewheel={true}
            keyboard={{ enabled: true }}
            modules={[Mousewheel, Keyboard, Virtual]}
            loop={true}
            loopAdditionalSlides={SLIDER_LIST.length}
            speed={500}
            className="h-100 w-100 d-md-none">
            {slides.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="d-flex align-items-center justify-content-center">
                {({ isActive }) => (
                  <div
                    className={`slide_content d-flex align-items-center justify-content-center`}>
                    <span
                      onClick={(e) => {
                        HANDLE_CLICK(e);
                        HANDLE_SHOW(e);
                      }}
                      className={`${
                        isActive
                          ? "text_xl cursor_pointer active_slide px-2 px-sm-4 "
                          : "text_xl px-2 px-sm-4 opacity_20"
                      } fst-italic`}>
                      {slide}
                    </span>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="d-none d-xl-block">
            <div
              className={`${
                ishovered && "hovered_position"
              } common_box bg-black common_box_position common_box_position_transform_1 d-flex align-items-end justify-content-between`}>
              <p className="common_text_transform text-white fw-normal fst-italic text_sm lh_16">
                UI UX
              </p>
              <img
                className="social_sensor_img_w"
                src={social_sensor}
                alt="social_sensor"
              />
            </div>
            <div
              className={`${
                ishovered && "hovered_position"
              } common_box bg-black common_box_position social_tensor_transition_2`}>
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
          <div className="d-flex justify-content-center z-3">
            <div
              className={`${
                show ? "card_hidden" : "card_visible"
              } responsive_box_pos`}>
              <div className="d-flex d-xl-none flex-column align-items-end">
                <div
                  onClick={HANDLE_HIDE}
                  className="d-flex justify-content-center cross_icon_box align-items-center">
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
                  <div className="branding_card position-relative justify-content-end d-flex gap_12 w-100">
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
        {/* <div className="position-absolute bottom-0 z-3 flex-column w-100 justify-content-center slider_gradient">
          <Header />
        </div> */}
      </div>
    </div>
  );
};

export default SocialTensor;
