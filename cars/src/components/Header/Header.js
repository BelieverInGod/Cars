import './Header.scss';
import {NavLink} from "react-router-dom";
// import React, {useState, useEffect} from 'react'

function Header() {

    // const addActiveClass = e => {
    //     const foo = document.querySelectorAll(".tab");
        
    //     for (let i = 0; i < foo.length; i++) {
    //       foo[i].classList.remove("active");
    //     }
    
    //     e.currentTarget.classList.add("active");
    //   };

  return (
    <div className="Header">
        <div className='headerInfoContainer'>        
            <div className='logoContainer'>
                <div className='logo'>
                </div>
                <div className='logoText'>
                    <div>Group</div>
                    <span>Car Rental</span>
                </div>
            </div>
            <div className='phoneContainer'>
            <div className='phoneImg'>
                </div>
                <div className='phoneText'>
                    <div>+38 097-777-23-22</div>
                </div>
            </div>
            <div className='navigationContainer'>
                <NavLink
                className={({isActive}) => isActive ? 'active-link' : ''}
                to={`/1`}
                >Cars
                </NavLink>
                <NavLink
                className={({isActive}) => isActive ? 'active-link' : ''}
                to={`/2`}
                >About Us
                </NavLink>
                <NavLink
                className={({isActive}) => isActive ? 'active-link' : ''}
                to={`/3`}
                >How to book?
                </NavLink>
            </div>
            <div className='languageContainer'>
                <select>
                    <option>USD $</option>
                    <option>UAH ₴</option>
                </select>
                <select>
                    <option>
                    </option>
                </select>
            </div>
        </div>
    </div>
  );
}

export default Header;