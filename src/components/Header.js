import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../images/logo-2.svg";
import { colors } from "./style/Variables";

export const Header = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <Logo></Logo>
        <div className="btn-group">
          <select name="language" className="select-lang">
            <option className="option" value="turkish">Türkçe</option>
            <option className="option" value="english">English</option>
          </select>
          <button type="button" className="btn">Oturum Aç</button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: 90%;
    padding-top: 2rem;
    svg{
      width: 165px;
      height: 40px;
    }

    .btn-group{
      display: flex;
      align-items: center;

      select{
        margin-right: 1.5rem;
        padding: 0.5rem 0.75rem;
        background-color: transparent;
        color: white;
        border: 1px solid white;

        .option{
          color: white;
          background-color:${colors.menuLighter};
        }
      }

    }

  }

`;
