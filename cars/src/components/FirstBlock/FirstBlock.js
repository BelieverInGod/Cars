import './FirstBlock.scss';
import carImg from '../../assets/images/car.png';
import Swiper from './Swiper'

function FirstBlock() {
  return (
    <div className="FirstBlock">
        <div className='rentInfoContainer'>
            <div className='findRentContainer'>
                <div className='title'>
                    <div className='titleImg'></div>
                    <div className='titleText'>
                        Search a Car<br/>
                        <span>Find the best one for your dates!</span>
                    </div>
                </div>
                <div className='inputsContainer'>
                        <select>
                            <option>Rent date start</option>
                        </select>
                        <select>
                            <option>Rent date end</option>
                        </select>
                        <select>
                            <option>Pick-up spot</option>
                        </select>
                        <select>
                            <option>Return spot</option>
                        </select>

                        <button>Find a car!</button>
                    </div>
            </div>
            <div className='bestAvilableContainer'>
                <span>Best</span> Available Offers
                <div>
                    <div className='newImage'/>
                    <div>
                        Range Rover Sport 2019<br/>
                        <span>$45/Hour</span>
                    </div>
                </div>
                <button>Check the car</button>
            </div>
            <div className='carImage'>
                <Swiper/>
            </div>
        </div>
    </div>
  );
}

export default FirstBlock;