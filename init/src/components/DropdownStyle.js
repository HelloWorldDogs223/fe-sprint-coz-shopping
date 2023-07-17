import styled from "styled-components";

export const LiContainer = styled.div`
  z-index: 1;
  box-shadow: 0 7px 7px 0 grey;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 2%;
  background-color: white;
`;

export const Li = styled.li`
  list-style: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  &:hover {
    background-color: skyblue;
    color: blue;
  }
  border: 1px solid grey;
`;
