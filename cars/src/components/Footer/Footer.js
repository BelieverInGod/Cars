import React, { useState } from "react";
import './Header.scss';
import {NavLink} from "react-router-dom";
import searchImg from '../../assets/images/search.png'
import flag from '../../assets/images/Flag_of_Ukraine.svg'
import phoneImg from '../../assets/images/telephone.svg'
import burger from '../../assets/images/Бургер.svg'
import arrowFordropdown from '../../assets/images/forDropdown.svg'

function Footer() {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
      };

  return (
    <div className="Footer">
        <div className='headerInfoContainer'>        
            <div className='logoContainer'>
                <img onClick={handleToggle} src={burger} className='burgerImg'/>
                <div className='logo'>
                </div>
                <div className='logoText'>
                    <div>GROUP</div>
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

                <div className="dropdown_triger" >
                    <img src={flag} className='flag'/>
                    <img src={arrowFordropdown} />
                </div>

            </div>
            <div className='mobileSeachContainer'>
                <img src={searchImg} className='searchImg'/>
                <img src={phoneImg}/>
            </div>
        </div>
    </div>
  );
}

export default Footer;