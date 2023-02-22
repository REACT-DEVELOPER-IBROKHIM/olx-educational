import Home from './home/Home';
import Auth from './auth/Auth';
import { Routes, Route } from "react-router-dom"
import Header from '../components/header/Header';
import Messages from './messages/Messages';
import SingleProduct from './product/SingleProduct';
import Search from './search/Search';
import Login from './auth/subroutes/Login';
import Create from './auth/subroutes/Create';
import Wishlist from './wishlist/Wishlist';

const AllRoutes = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="auth" element={<Auth/>}>
            <Route path="login" element={<Login/>}/>
            <Route path="create" element={<Create/>}/>
        </Route>
        <Route path="/messages" element={<Messages/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/product/:id" element={<SingleProduct/>}/>
        <Route path="/search/:productTitle" element={<Search/>}/>
      </Routes>
    </>
   
  )
}

export default AllRoutes