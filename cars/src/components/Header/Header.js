import './Header.scss';
import {NavLink} from "react-router-dom";
import searchImg from '../../assets/images/search.png'
import flag from '../../assets/images/Flag_of_Ukraine.png'
import phoneImg from '../../assets/images/phoneImg.png'


function Header() {

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
                        <img src={flag}/>
                    </option>
                </select>
                <img src={flag}/>

            </div>
            <div className='mobileSeachContainer'>
                <img src={searchImg} className='searchImg'/>
                <img src={phoneImg}/>
            </div>
        </div>
    </div>
  );
}

export default Header;