import React from 'react'
import { useSidebarContext } from '../../context/sideBarContext'
import {ImCancelCircle} from "react-icons/im"
import "./Sidebar.scss"
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const {isSidebarOpen, closeSidebar}= useSidebarContext();
  //console.log(isSidebarOpen) it shows false bezoc side bar is not opened
  return (
    <nav className={`sidebar ${isSidebarOpen ? 'sidebar-visible' : " "}`}>
      <button type="button" className='navbar-hide-btn' onClick={()=> closeSidebar()
      }>
        <ImCancelCircle size={24} />
      </button>
      <div className='side-content'>
        <ul className='side-nav'>
          <li className='side-item'>
            <Link to="" className='side-link ls-1 fs-13' onClick={()=> closeSidebar()}>
              Side Link Here
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Sidebar