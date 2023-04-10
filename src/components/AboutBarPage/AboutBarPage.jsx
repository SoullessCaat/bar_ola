import React, { useState } from "react";
import "./AboutBarPage.css";
import photoOne from "../../photo/photo-1.png";
import photoTwo from "../../photo/photo-2.png";
import photoTree from "../../photo/photo-3.png";
import photoFour from "../../photo/photo-4.png";
import photoFive from "../../photo/photo-5.png";
import photoSix from "../../photo/photo-6.png";
import photoSeven from "../../photo/photo-7.png";
import photoEight from "../../photo/photo-8.png";
import photoNine from "../../photo/photo-9.png";
import photoArrowLeft from "../../logo/photoArrowLeft.svg";
import photoArrowRight from "../../logo/photoArrowRight.svg";

const AboutBarPage = () => {
  const [generalPhoto, setGeneralPhoto] = useState(photoOne);
  const photos = [
    photoOne,
    photoTwo,
    photoTree,
    photoFour,
    photoFive,
    photoSix,
    photoSeven,
    photoEight,
    photoNine,
  ];
  const [generaMobilelPhoto, setGeneraMobilelPhoto] = useState(0);
  const changePhoto = (e) => {
    const hide = document.querySelector(".hide");
    const element = e.target;
    hide.classList.remove("hide");
    element.classList.add("hide");
    setGeneralPhoto(e.target.src);
  };

  const changePhotoMobile = (e, direction) => {
    if (direction === "left") {
      if (generaMobilelPhoto === photos.length - 1) {
        return setGeneraMobilelPhoto(8);
      }
      setGeneraMobilelPhoto(generaMobilelPhoto - 1);
    }
    if (direction === "right") {
      if (generaMobilelPhoto === photos.length - 1) {
        return setGeneraMobilelPhoto(0);
      }
      setGeneraMobilelPhoto(generaMobilelPhoto + 1);
    }
  };

  const renderPhotoGallery = () => {
    return (
      <div className="wrapper-gallery-mobile">
        <div
          className="gallery-arrow-left"
          onClick={(e) => changePhotoMobile(e, "left")}
        >
          <img src={photoArrowLeft} alt="" width={30} height={30} />
        </div>
        <img
          className="mobile-gallery"
          src={photos[generaMobilelPhoto]}
          width={282}
          height={292}
          alt=""
          onClick={(e) => changePhoto(e)}
        ></img>
        <div
          className="gallery-arrow-right"
          onClick={(e) => changePhotoMobile(e, "right")}
        >
          <img src={photoArrowRight} alt="" width={30} height={30} />
        </div>
      </div>
    );
  };

  return (
    <div className="about-wrapper" id="about-ola">
      <div className="about-about">
        <div className="about-about-big-gallery">
          <div>
            <img
              src={generalPhoto}
              width={425}
              height={536}
              alt=""
              onClick={(e) => changePhoto(e)}
            ></img>
          </div>
          <div className="about-about-mini-gallery">
            <img
              src={photoFour}
              width={136}
              height={146}
              alt=""
              onClick={(e) => changePhoto(e)}
            ></img>
            <img
              src={photoFive}
              width={136}
              height={146}
              alt=""
              onClick={(e) => changePhoto(e)}
            ></img>
            <img
              src={photoSix}
              width={136}
              height={146}
              alt=""
              onClick={(e) => changePhoto(e)}
            ></img>
          </div>
        </div>
        <div className="about-about-description">
          <div className="pages-number">01</div>
          <div className="pages-description">о баре</div>
          <div className="page-descriptions-text">
            Ola bar буквально обладает душой и личностью. И личность эта находит
            истину не только в вине, но и в смешанных напитках, музыке,
            литературе и живом общении!
          </div>
          <div className="page-descriptions-text">
            Раз в неделю бар превращается в импровизированный культурный центр,
            а в остальные дни остаётся уютным домом миксологии и царством
            коктейлей!
          </div>
          <div className="about-photo-mobil">{renderPhotoGallery()}</div>
          <div className="about-about-description-gallery">
            <img
              src={photoOne}
              width={136}
              height={146}
              alt=""
              onClick={(e) => changePhoto(e)}
              className="hide"
            ></img>
            <img
              src={photoTwo}
              width={136}
              height={146}
              alt=""
              onClick={(e) => changePhoto(e)}
            ></img>
            <img
              src={photoTree}
              width={136}
              height={146}
              alt=""
              onClick={(e) => changePhoto(e)}
            ></img>
            <img
              src={photoSeven}
              width={136}
              height={146}
              alt=""
              onClick={(e) => changePhoto(e)}
            ></img>
            <img
              src={photoNine}
              width={136}
              height={146}
              alt=""
              onClick={(e) => changePhoto(e)}
            ></img>
            <img
              src={photoEight}
              width={136}
              height={146}
              alt=""
              onClick={(e) => changePhoto(e)}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBarPage;
