import React from "react";
import styled from "styled-components";
import { borders, colors } from "./style/Variables";
import image from "../images/mobile-0819.jpg";
import downloadImage from "../images/boxshot.png";
import { FiDownload } from "react-icons/fi";

const info = "Çevrimdışı izlemek için içerikleri indirin.";
const detail =
  "En sevdiğiniz içerikleri kolayca kaydedin ve her zaman izleyecek bir şeyleriniz olsun.";

export const LocalAnimationCart = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="img-container">
          <img src={image} alt="section" />
          <div className="download">
            <img src={downloadImage} alt="boxshot" />
            <div className="info-group">
              <h3>Stranger Things</h3>
              <span>İndiriliyor...</span>
            </div>
            <FiDownload></FiDownload>
          </div>
        </div>
        <div className="info">
          <h1>{info}</h1>
          <h3>{detail}</h3>
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
    grid-auto-flow: dense;
    column-gap: 2rem;
    margin: auto;

    @media (max-width: 1000px) {
    grid-template-columns: 1fr;
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
    width: 450px;
    overflow: hidden;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    img {
      width: 100%;
    }

    .download {
      width: 300px;
      height: 100px;
      position: absolute;
      border: 3px solid ${colors.menu};
      bottom: 1.5rem;
      background-color: #000;
      border-radius: 0.5rem;
      display: flex;
      padding: 0.5rem;

      img {
        width: 3.5rem;
      }

      svg {
        color: white;
        margin: auto;
        font-size: 1.2em;
      }

      .info-group {
        display: flex;
        justify-content: center;
        margin-left: 0.5rem;
        flex-direction: column;

        h3 {
          color: white;
          font-size: 1em;
        }

        span {
          color: blue;
          font-size: 1em;
        }
      }
    }
  }
`;
