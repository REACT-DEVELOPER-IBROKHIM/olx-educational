import React from 'react'
import { Link } from 'react-router-dom';

const Container = ({children}) => {
  return (
    <div className="container">
      {children}
    </div>
  )
}

const MainLink = ({link, title, icon}) => {
  return (
    <Link className='main-link' to={link}>
        {icon}
        {title}
    </Link>
  )
}

const Button = ({type, title, icon}) => {
  return (
    <button className='main-button' type={type}>
        {icon}
        {title}
    </button>
  )
}


export { Container, MainLink, Button }