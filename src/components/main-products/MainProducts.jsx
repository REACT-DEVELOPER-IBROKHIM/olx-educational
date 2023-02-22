import React from 'react'
import useFetchData from '../../hooks/useFetchData'
import { Container } from '../../utils/Components'
import "./MainProducts.scss";
import Product from '../product/Product';

const MainProducts = () => {
  const [data, isLoading] = useFetchData("/products?offset=0&limit=20");
  return (
    <section className='main-products'>
      <h2 className='main-products-title'>Premium mahsulotlar</h2>
      <Container>
        <div className="main-products__wrapper">
          {!isLoading ?
            data.map(product => 
              <Product  key={product.id} product={product}/> 
            )
            :
            <p className='loading'>Loading...</p>
          }
        </div>
      </Container>
    </section>
  )
}

export default MainProducts