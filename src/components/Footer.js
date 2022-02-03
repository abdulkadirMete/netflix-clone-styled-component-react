import React from "react";
import styled from "styled-components";
import { colors } from "./style/Variables";

export const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-cols">
        <ul>
          <li>
            <>FAQ</>
          </li>
          <li>
            <>Investor Relations</>
          </li>
          <li>
            <>Ways To Watch</>
          </li>
          <li>
            <>Corporate Information</>
          </li>
          <li>
            <>Netflix Originals</>
          </li>
        </ul>
        <ul>
          <li>
            <>Help Center</>
          </li>
          <li>
            <>Jobs</>
          </li>
          <li>
            <>Terms Of Use</>
          </li>
          <li>
            <>Contact Us</>
          </li>
        </ul>
        <ul>
          <li>
            <>Account</>
          </li>
          <li>
            <>Redeem Gift Cards</>
          </li>
          <li>
            <>Privacy</>
          </li>
          <li>
            <>Speed Test</>
          </li>
        </ul>
        <ul>
          <li>
            <>Media Center</>
          </li>
          <li>
            <>Buy Gift Cards</>
          </li>
          <li>
            <>Cookie Preferences</>
          </li>
          <li>
            <>Legal Notices</>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  color: ${colors.menuLighter};

  .footer-cols {
    padding: 3rem 0;
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(4, 1fr);
    width: 60%;


    ul{
        list-style: none;

        li{
            margin-bottom: 1rem;
            font-size: .8em;
        }
    }


  }
`;
