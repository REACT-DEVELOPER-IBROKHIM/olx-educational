import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { instance } from '../../api/instance';
import { Link } from 'react-router-dom';
import { Container } from '../../utils/Components';
import { useTranslation } from "react-i18next";
import "./Search.scss";

const Search = () => {
  const {t} = useTranslation();
  const [searchDataResults, setSearchDataResults] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");

  const getProductSuggestions = (e) => {
    setSearchInputValue(e.target.value);
    if(e.target.value.trim().length > 2){
      instance.get(`/products/?title=${e.target.value}&offset=0&limit=10`)
      .then(response => setSearchDataResults(response.data))
      .catch(err => console.log(err));
    }
  }

  const getSearchResults = (e) => {
    e.preventDefault();
    window.location.href = `/search/${searchInputValue}`
  }

  return (
    <section className='search'>
      <Container>
        <div className="search-wrapper">
          <form className='search-form' onSubmit={getSearchResults}>
            <div className='search-input-wrapper'>
              <FiSearch/>
              <input onChange={getProductSuggestions} type="text" placeholder={t("search.placeholder")}/>
              { 
                 searchDataResults.length > 0 && searchInputValue.length >= 3 ? 
                  <div className='search-suggestions'>
                    {
                      searchDataResults.map(searchItem =>
                        <Link to={`/product/${searchItem.id}`} key={searchItem.id} className="transarent-link search-result-item">
                          <p>{searchItem.title}</p>
                        </Link>  
                      )
                    }
                  </div> 
                : 
                  <></>
              }
            </div>
            <button type='submit'>Qidirish</button>
          </form>
        </div>
      </Container>
    </section>
  )
}

export default Search