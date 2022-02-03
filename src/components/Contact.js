import styled from "styled-components";
import { borders} from "./style/Variables";
import { questions } from "../data/data-question";
import { ContactItem } from "./ContactItem";
import { useState } from "react";
import { BsChevronRight } from "react-icons/bs";


export const Contact = () => {
  const [clickedId, setClicked] = useState(0);

  const handleClick = (id) => {
    if (id === clickedId) {
      setClicked(0);
    } else {
      setClicked(id);
    }
  };

  return (
    <Wrapper>
      <h1>Sıkça Sorulan Sorular</h1>
      <ul>
        {questions.map((item) => {
          return (
            <ContactItem
              key={item.id}
              {...item}
              clickedId={clickedId}
              handleClick={handleClick}
            ></ContactItem>
          );
        })}
      </ul>
        <p className="start-title">İzlemeye hazır mısınız? Üyelik oluşturmak veya üyeliğinize erişmek için e-posta adresinizi girin.</p>
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
      
    </Wrapper>
  );
};

const Wrapper = styled.section`
  border-bottom: ${borders.sectionBorder};
  padding: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;

  h1 {
    font-size: 3em;
    padding-bottom: 2rem;
  }

  ul {
    width: 50%;
    font-size: 1.4em;
  }

.start-title{
  font-size: 1.2em;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
 
`;
