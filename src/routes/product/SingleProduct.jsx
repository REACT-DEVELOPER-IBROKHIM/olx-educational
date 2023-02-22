import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import { Button, Container } from "../../utils/Components";
import "./SingleProduct.scss";

const SingleProduct = () => {
  const { id } = useParams();
  const [data, isLoading] = useFetchData(`/products/${id}`);
  console.log(data);
  return (
    <main>
      <div className="single-product">
        <section className="single-product__wrapper">
          <Container>
            <div className="single-product__item">
              {!isLoading ? (
                <>
                  {data.images?.length > 0 &&
                  data?.images[0].startsWith("https://") ? (
                    <img
                      className="single-product__image"
                      src={data.images[0]}
                      alt=""
                    />
                  ) : (
                    <img
                      className="single-product__image"
                      src="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
                      alt=""
                    />
                  )}
                  <div className="single-product__info">
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                    <strong>${data.price}</strong>
                    <Button
                      type="button"
                      title="Savatga qo'shish"
                      icon={<FiShoppingCart />}
                    />
                  </div>
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </Container>
        </section>
      </div>
    </main>
  );
};

export default SingleProduct;
