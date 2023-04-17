/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "../style/header.css"

const Header = () => {
  return (
      <header>

        <a href="#"> logo </a>

        <nav>
            <ul>
                <li><a href="#">01. About </a></li>
                <li><a href="#">02. Experience </a></li>
                <li><a href="#">03. Work </a></li>
                <li><a href="#">04. Contact </a></li>
                <li> <button> light </button> </li>
            </ul>
        </nav>

        

      </header>
    
  )
}

export default Header