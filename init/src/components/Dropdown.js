import { LiContainer, Li } from "./DropdownStyle";
import { LinkStyle } from "./HeaderStyle";

function Dropdown() {
  return (
    <LiContainer>
      <Li>이용혁님 안녕하세요!</Li>
      <LinkStyle to="/products/list">
        <Li>상품리스트 페이지</Li>
      </LinkStyle>
      <LinkStyle to="/bookmark">
        <Li>북마크 페이지</Li>
      </LinkStyle>
    </LiContainer>
  );
}

export default Dropdown;
