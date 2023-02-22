import useFetchData from '../../hooks/useFetchData';
import "./CategoryList.scss"
import { Link } from 'react-router-dom';
import {Container} from "../../utils/Components";

const CategoryList = () => {
  const [data, isLoading] = useFetchData("/categories");
  return (
    <section className='category-list'>
      <h2 className='category-list-title'>Bosh Toifalar</h2>
      <Container>
        <div className="category-list__wrapper">
          {!isLoading ?
            data.map(({id, image, name}) => 
              <Link className='category-item' key={id}>
                <div className='category-item__wrapper'>
                  <img src={image} alt="" />
                  <h3>{name}</h3>
                </div>
              </Link>  
            ): <p>Loading...</p>
          }
        </div>
      </Container>
    </section>
  )
}

export default CategoryList