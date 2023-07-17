import {
  ModalContainer,
  ModalBackdrop,
  ModalView,
  ProductImg,
} from "./ModalStyle";
export default function Modal({ url, url2, isOpen, setIsOpen }) {
  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ModalContainer>
      {isOpen ? (
        <ModalBackdrop onClick={clickHandler}>
          <ModalView onClick={(e) => e.stopPropagation()}>
            <ProductImg url={url ? url : url2} onClick={clickHandler} />
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </ModalContainer>
  );
}
