import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from '../../utils/Components';
import { FiHeart } from "react-icons/fi";
import {BsFillSuitHeartFill} from "react-icons/bs";
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const dispatch = useDispatch();
  const dataInStore = useSelector(data => data);
  console.log(dataInStore)

  const removeFromWishlist = (id) => {
    dispatch({id, type: "REMOVE_FROM_WISHLIST"})
  }
  return (
    <section>
      <Container>
      <div className="products">
        {
            dataInStore.like.likedProducts.map(product => 
              <article className='product-item' key={product?.id}>
              <Link to={`/product/${product?.id}`}>
                <img src={product.images.at(0)} alt="" />
              </Link>
                <div>
                  <h1>{product.title}</h1>
                  <p>{product.description}</p>
                  <strong>${product.price}</strong>
                </div>
                {dataInStore.like.likedProducts.find(p => p?.id === product?.id) ? <BsFillSuitHeartFill onClick={() => removeFromWishlist(product.id)} style={{color: "red"}}/> : <FiHeart/>}
              </article>  
            )
        }
        </div>
        </Container>
    </section>
  )
}

export default Wishlist