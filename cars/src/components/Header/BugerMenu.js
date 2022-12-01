import './Header.scss';
import {NavLink} from "react-router-dom";

function BurgerMenu({isActive}) {

  return (
    <div className={isActive ? "none" : 'BurgerMenu'}>
        <div>

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

export default BurgerMenu;