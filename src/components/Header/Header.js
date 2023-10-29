import React from 'react'
import Navbar from "./Navbar"
import SearchForm from "./SearchForm"
import "./Header.scss"

const Header = () => {
  return (
    <header className='header'>
    <Navbar />
    <div className='header-content flex align-center justify-center flex-column text-center'>
      <SearchForm />
      <h1 className='text-white header-title ls-2'>What cuisines do you particularly enjoy?</h1>
      <p className='text-uppercase text-white my-3 ls-1'>Personalize Your Experience</p>
    
    </div>
    </header>
  )
}

export default Header