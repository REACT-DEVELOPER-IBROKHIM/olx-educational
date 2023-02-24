import React from "react";
import { Link } from 'react-router-dom';
import { FiHeart } from "react-icons/fi";
import {BsFillSuitHeartFill} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { shortenProductDescription } from '../../helpers/product-content';

const Product = ({product}) => {
  const dispatch = useDispatch();
  const addToWishlist = () => {
    dispatch({ product, type: "ADD_TO_WISHLIST" })
  }

  const removeFromWishlist = () => {
    dispatch({id: product.id, type: "REMOVE_FROM_WISHLIST"})
  }

  const dataInStore = useSelector(data => data);
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
        {dataInStore.like.likedProducts.find(p => p?.id === product?.id) ? <BsFillSuitHeartFill onClick={removeFromWishlist} style={{color: "red"}}/> : <FiHeart  onClick={addToWishlist}/>}
      </div>
    </article>
  );
};

export default Product;
