import { useEffect, useState } from "react";
import Modal from "./Modal";
import {
  Container,
  PContainer,
  TitleContainer,
  ImageCotainer,
  StarContainer,
  ProductImg,
  BlueP,
  StarImg,
} from "./DetailProductStyle";

function DetailProduct({
  elem,
  bookMark,
  setBookMark,
  stars,
  toastSetMain,
  toastSetProduct,
  toastSet,
  setMessage,
  ids,
  setIds,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [star, setStar] = useState(false);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  const bookMarkClickHandler = () => {
    if (star === false) {
      setStar(true);
      setBookMark([...bookMark, elem]);
      setMessage("북마크에 추가되었습니다.");
      if (toastSetMain) {
        toastSetMain();
      } else if (toastSetProduct) {
        toastSetProduct();
      } else {
        toastSet();
      }
      // 아이디 기억
      setIds([...ids, elem.id]);
    } else {
      setStar(false);
      if (toastSetMain) {
        toastSetMain();
      } else if (toastSetProduct) {
        toastSetProduct();
      } else {
        toastSet();
      }
      setMessage("북마크에서 삭제되었습니다.");
      const filtered = bookMark.filter((original) => {
        return original !== elem;
      });
      setBookMark(filtered);
      setIds(
        ids.filter((x) => {
          return x !== elem.id;
        })
      );
    }
  };

  useEffect(() => {
    if (stars || ids.includes(elem.id)) {
      setStar(true);
    }
    switch (elem.type) {
      case "Brand":
        setFirst(elem.brand_name);
        setSecond("관심고객 수 " + elem.follower);
        break;
      case "Product":
        setFirst(elem.title);
        setSecond(elem.discountPercentage + "%");
        setThird(elem.price + "원");
        break;
      case "Exhibiton":
        setFirst(elem.title);
        setSecond(elem.subtitle);
        break;
      default:
        setFirst("#" + elem.title);
        break;
    }
  }, []);

  return (
    <Container>
      {isOpen ? (
        <Modal
          url={elem.image_url}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          url2={elem.brand_image_url}
        />
      ) : null}
      <ImageCotainer>
        <ProductImg
          onClick={clickHandler}
          url={elem.image_url ? elem.image_url : elem.brand_image_url}
        />
        <StarContainer>
          {star && (
            <StarImg
              src="/bookmark.png"
              alt="bookmark"
              onClick={bookMarkClickHandler}
            />
          )}
          {!star && (
            <StarImg
              src="/bookmarkYellow.png"
              alt="bookmark"
              onClick={bookMarkClickHandler}
            />
          )}
        </StarContainer>
      </ImageCotainer>

      <PContainer>
        <TitleContainer>{first ? <p>{first}</p> : null}</TitleContainer>
        {second ? <p>{second}</p> : null}
        {third ? (
          elem.discountPercentage ? (
            <BlueP>{third}</BlueP>
          ) : (
            <p>{third}</p>
          )
        ) : null}
      </PContainer>
    </Container>
  );
}

export default DetailProduct;
