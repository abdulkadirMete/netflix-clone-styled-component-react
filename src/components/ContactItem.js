import React from "react";

import styled from "styled-components";
import { colors } from "./style/Variables";
import { GrAdd } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";

export const ContactItem = ({
  question,
  answer,
  id,
  clickedId,
  handleClick,
}) => {
  const toggleClick = () => {
    handleClick(id);
  };

  return (
    <Wrapper>
      <div className="question-container">
        <p className="question">{question}</p>
        {id === clickedId ? (
          <AiOutlineClose type="button" onClick={toggleClick} />
        ) : (
          <GrAdd type="button" onClick={toggleClick} />
        )}
      </div>

      <div
        className={
          clickedId === id ? "answer-container" : "answer-container hide"
        }
      >
        <div className="inner">{answer}</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;

  .question-container {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: ${colors.menu};
    margin-bottom: 0.5rem;

    svg {
      font-size: 1.2em;
      transition: all 0.3s linear;

      path {
        stroke: white;
      }
    }
  }

  .answer-container {
    background-color: ${colors.menu};
    margin-top: 1px;
    transform: translateY(-0.4rem);
    max-height: 600px;
    transition: max-height 0.3s ease-out;

    .inner {
      padding: 1rem;
      padding-right: 3rem;
    }
  }

  .answer-container.hide {
    max-height: 0;
    overflow: hidden;
  }
`;
