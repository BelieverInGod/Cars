import './SecondBlock.scss';
import sceletonCar from '../../assets/images/secondSkeleton.png'
import {NavLink} from "react-router-dom";

function SecondBlock() {
  return (
    <div className="SecondBlock">
      <div className="carParkContainer">
        <div className='type'>
          <div>
            <div/>
            Car Park
            </div>
            <div className='typeCar'>
              <NavLink
                className={({isActive}) => isActive ? 'active-link' : ''}
                to={`/1`}
                >Mercedes Benz
                </NavLink>
                <NavLink
                className={({isActive}) => isActive ? 'active-link' : ''}
                to={`/2`}
                >Range Rover
                </NavLink>
                <NavLink
                className={({isActive}) => isActive ? 'active-link' : ''}
                to={`/3`}
                >Jaguar
                </NavLink>
                <NavLink
                className={({isActive}) => isActive ? 'active-link' : ''}
                to={`/:id/1`}
                >BMW
                </NavLink>
            </div>
        </div>
        <div className='typesInfoBlockContainer'>
          <div className='typesInfoBlock'>
            <img src={sceletonCar} alt='2'/>
            <span>Jaguar F-Type Cabrio</span>
            <div>Amazing car to drive and enjoy views of the beautiful
                  ebat togo rot bratislava.
                  Feel free to gazovat pizda and enjoy the wind !
               </div>
          </div>
          <div className='typesInfoBlock'>
            <img src={sceletonCar} alt='2'/>
            <span>Jaguar F-Type Cabrio</span>
            <div>Amazing car to drive and enjoy views of the beautiful
                  ebat togo rot bratislava.
                  Feel free to gazovat pizda and enjoy the wind !
               </div>
          </div>
          <div className='typesInfoBlock'>
            <img src={sceletonCar} alt='2'/>
            <span>Jaguar F-Type Cabrio</span>
            <div>Amazing car to drive and enjoy views of the beautiful
                  ebat togo rot bratislava.
                  Feel free to gazovat pizda and enjoy the wind !
               </div>
          </div>
          <div className='typesInfoBlock'>
            <img src={sceletonCar} alt='2'/>
            <span>Jaguar F-Type Cabrio</span>
            <div>Amazing car to drive and enjoy views of the beautiful
                  ebat togo rot bratislava.
                  Feel free to gazovat pizda and enjoy the wind !
               </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondBlock;