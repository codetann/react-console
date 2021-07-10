import styled from "styled-components";

const COLOR = {
  BG: "#1A1C28",
  TEXT: "#D2D5DC",
  DARK_TEXT: "#41444D",
  SHOW: "#518EC3",
};

export const Application = styled.div`
  background: ${COLOR.BG};
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 3rem;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${COLOR.TEXT};
`;

export const ShowButton = styled.p`
  color: ${COLOR.SHOW};
  cursor: pointer;
`;

export const Form = styled.form`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  padding: 0 3rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  border: none;
  outline: none;
  background: none;
  font-size: 18px;
  color: ${COLOR.TEXT};
  transition: all 0.2s;

  &::placeholder {
    color: ${COLOR.DARK_TEXT};
  }

  &:hover {
    opacity: 0.7;
  }

  &:focus {
    color: ${COLOR.TEXT};
  }
`;
