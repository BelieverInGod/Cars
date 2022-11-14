import './Header.scss';

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
                <div>Cars</div>
                <div>About Us</div>
                <div>How to book?</div>
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