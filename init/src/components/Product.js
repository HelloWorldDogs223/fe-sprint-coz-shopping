import DetailProduct from "./DetailProduct";
import { ProdContainer } from "./ProductStyle";

function Product({
  bookMark,
  setBookMark,
  toastSetMain,
  setMessage,
  products,
  booked,
  ids,
  setIds,
}) {
  return (
    <>
      <ProdContainer>
        {!booked
          ? products.slice(0, 4).map((elem) => {
              return (
                <DetailProduct
                  ids={ids}
                  setIds={setIds}
                  key={elem.id}
                  elem={elem}
                  bookMark={bookMark}
                  setBookMark={setBookMark}
                  toastSetMain={toastSetMain}
                  setMessage={setMessage}
                />
              );
            })
          : bookMark.slice(0, 4).map((elem) => {
              return (
                <DetailProduct
                  ids={ids}
                  setIds={setIds}
                  key={elem.id}
                  elem={elem}
                  bookMark={bookMark}
                  setBookMark={setBookMark}
                  toastSetMain={toastSetMain}
                  setMessage={setMessage}
                />
              );
            })}
      </ProdContainer>
    </>
  );
}

export default Product;
