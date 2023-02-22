import React from "react";
import { Link } from 'react-router-dom';
import { FiHeart } from "react-icons/fi";
import { shortenProductDescription } from '../../helpers/product-content';

const Product = ({product}) => {
  return (
    <article className="product">
      <div className="product-top">
        <Link className="transarent-link" to={`/product/${product.id}`}>
          {product.images.length > 0 && product.images[0].startsWith("https://") ?
            <img className="product-image" src={product.images[0]} alt="" />
            :
            <img className="product-image" src="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg" alt="" />
          }
          <h3>{product.title}</h3>
        </Link>
      </div>
      <div className="product-bottom">
        <div>
          <p>{shortenProductDescription("word", 5, product.description)}</p>
          <strong>${product.price}</strong>
        </div>
        <FiHeart />
      </div>
    </article>
  );
};

export default Product;
