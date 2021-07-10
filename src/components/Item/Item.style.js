import styled from "styled-components";
import { COLOR } from "../../theme";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 4rem;
`;

export const CrossButton = styled.button`
  width: 1.6rem;
  height: 1.6rem;
  border: 2px solid ${COLOR.SHOW};
  background: none;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 1rem;
`;

export const Icon = styled.button`
  font-size: 18px;
  color: ${COLOR.SHOW};
  margin-right: 1rem;
  width: 1.6rem;
  height: 1.6rem;
  background: none;
  cursor: pointer;
  border: none;
`;

export const Text = styled.p`
  color: ${(props) => (props.crossed ? COLOR.DARK_TEXT : COLOR.TEXT)};
  font-size: 18px;
  text-decoration: ${(props) => (props.crossed ? "line-through" : "none")};
`;
