import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  width: 264px;
  height: 300px;
  margin: 0 24px;
  position: relative;
`;

export const PContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  width: 100%;
  font-size: 0.9rem;
  font-weight: bold;
  height: 54px;
  position: absolute;
  top: 85%;
`;

export const TitleContainer = styled.div`
  display: flex;
  padding-top: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
`;

export const ImageCotainer = styled.div`
  position: absolute;
`;

export const StarContainer = styled.div`
  position: absolute;
  top: 80%;
  left: 85%;
`;

export const ProductImg = styled.img`
  width: 264px;
  height: 210px;
  border-radius: 10%;
  content: url(${(props) => props.url};);
  cursor: pointer;
`;
export const BlueP = styled.p`
  color: blue;
`;
export const StarImg = styled.img`
  cursor: pointer;
  position: absolute;
`;
