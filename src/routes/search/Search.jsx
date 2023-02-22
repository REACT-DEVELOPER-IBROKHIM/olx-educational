import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import SearchCom from "../../components/search/Search"
import useFetchData from '../../hooks/useFetchData';
import { Container } from '../../utils/Components';
import { v4 as uuidv4 } from 'uuid';
import "./Search.scss";
import { instance } from '../../api/instance';

const Search = () => {
  const [lowerSelect, setLowerSelect] = useState("");
  const [upperSelect, setUpperSelect] = useState("");
  const [filterData, setFilterData] = useState([]);
  const { productTitle } = useParams();
  var [data, isLoading]= useFetchData(`/products/?title=${productTitle}`);

  const prices = [1, 10, 100, 1000, 10000, 100000];

  console.log(upperSelect, lowerSelect)

  useEffect(() => {

    if(lowerSelect > upperSelect && upperSelect > 1){
        setUpperSelect(lowerSelect)
        setLowerSelect(upperSelect)
    }

    instance.get(`/products/?title=${productTitle}&price_min=${lowerSelect}&price_max=${upperSelect}`)
      .then(response => setFilterData(response.data))
      .catch(err => console.log(err))
  }, [lowerSelect, upperSelect, productTitle])

  if(filterData.length > 0){
    data = filterData
  }

  return (
    <main className='main-search-result'>
      <SearchCom/> 
      <Container>
        <div className="search__filters">
          <select value={lowerSelect} onChange={(e) => setLowerSelect(e.target.value)}>
            {
              prices.map(price => 
                <option key={uuidv4()} value={price}>{price}</option>  
              )
            }
          </select>
          <select value={upperSelect} onChange={(e) => setUpperSelect(e.target.value)}>
            {
              prices.map(price => 
                <option key={uuidv4()} value={price}>{price}</option>  
              )
            }
          </select>
        </div>
        <div className="products">
        {!isLoading ?
            data.map(product => 
              <article className='product-item' key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img src={product.images.at(0)} alt="" />
              </Link>
                <div>
                  <h1>{product.title}</h1>
                  <p>{product.description}</p>
                  <strong>${product.price}</strong>
                </div>
              </article>  
            )
        : <h2>Loading...</h2> }
        </div>
      </Container>
    </main>
  )
}

export default Search