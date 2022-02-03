import React from "react";
import styled from "styled-components";
import { borders } from "./style/Variables";
import video from "../images/video-tv-0819.m4v";
import image from "../images/tv.png";

const info = "Televizyonunuzda izleyebilirsiniz.";
const detail =
  "Akıllı TV, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray oynatıcılar ve daha fazlasında seyredin.";

export const AnimationCart = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="info">
          <h1>{info}</h1>
          <h3>{detail}</h3>
        </div>
        <div className="img-container">
          <img src={image} alt="section" />
          <video autoPlay muted width={380} height={210}>
            <source src={video} />
          </video>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  border-bottom: ${borders.sectionBorder};

  .container {
    width: 70%;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    margin: auto;

    @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    row-gap: 2rem ;
  }
  }

  .info {
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: white;

    h1 {
      font-size: 3em;
    }

    h3 {
      font-weight: 500;
      font-size: 1.5em;
    }
  }

  .img-container {
    width: 500px;
    overflow: hidden;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    img {
      width: 100%;
    }

    video {
      position: absolute;
      top: 70px;
      z-index: -1;
    }
  }
`;
