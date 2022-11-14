import './SecondBlock.scss';
import sceletonCar from '../../assets/images/secondSkeleton.png'

function SecondBlock() {
  return (
    <div className="SecondBlock">
      <div className="carParkContainer">
        <div className='type'>
          <div>
            <div/>
            Car Park
          </div>
          <span>Mercedes Benz</span>
          <span>Range Rover</span>
          <span>Jaguar</span>
          <span>BMW</span>
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
        </div>
      </div>
    </div>
  );
}

export default SecondBlock;