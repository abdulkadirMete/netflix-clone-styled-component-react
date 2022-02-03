import React from "react";
import styled from "styled-components";
import { borders } from "./style/Variables";
import img from "../images/hero.jpg";
import { Header } from "./Header";
import { BsChevronRight } from "react-icons/bs";

export const Hero = () => {
  return (
    <Wrapper>
    
      <div className="hero-top">
        <Header></Header>
        <section className="info">
          <h1>
            Sınırsız film, dizi ve çok <br></br> daha fazlası.
          </h1>
          <h5>İstediğiniz yerde izleyin. İstediğiniz zaman iptal edin</h5>
          <p>
            İzlemeye hazır mısınız? Üyelik oluşturmak veya üyeliğinize erişmek
            için e-posta adresinizi girin.
          </p>
          <div className="form-group">
            <input
              type="text"
              placeholder="E-posta adresi"
              className="textInput"
            />
            <button type="button" className="btn btn-secondary">
              Başlayın
              <BsChevronRight></BsChevronRight>
            </button>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-width: 680px;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  background-position-y: -1rem;
  border-bottom: ${borders.sectionBorder};

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.62);
    box-shadow: inset 120px 100px 250px #000000,
      inset -120px -100px 250px #000000;
    z-index: 1;
  }

  .hero-top {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .info {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      flex-direction: column;
      padding-bottom: 2rem;

      h1,
      h5,
      p {
        text-align: center;
      }

      h1 {
        font-weight: bold;
        font-size: 4em;
        text-align: center;
        line-height: 4rem;
      }

      h5 {
        font-size: 1.4em;
        padding: 1rem;
      }

      p {
        font-size: 1.2em;
        padding: 1rem;
      }
    }
  }
`;
