import './FirstBlock.scss';
import Swiper from './Swiper'
import calendar from '../../assets/images/calendar.svg'
import locationSvg from '../../assets/images/location.svg'
import arrowFordropdown from '../../assets/images/forDropdown.svg'


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
                        <div className='info'>
                            <div>
                                <img src={calendar} className={'calendar'} />
                                <span>Rent date start</span>
                            </div>
                            <img src={arrowFordropdown} className={'arrowFordropdown'} />
                        </div>
                        <div className='info'>
                            <div>
                                <img src={calendar} className={'calendar'} />
                                <span>Rent date end</span>
                            </div>
                            <img src={arrowFordropdown} className={'arrowFordropdown'} />
                        </div>
                        <div className='info'>
                            <div>
                                <img src={locationSvg} className={'locationSvg'} />
                                <span>Pick-up spot</span>
                            </div>
                            <img src={arrowFordropdown} className={'arrowFordropdown'} />
                        </div>
                        <div className='info'>
                            <div>
                                <img src={locationSvg} className={'locationSvg'} />
                                <span>Return spot</span>
                            </div>
                            <img src={arrowFordropdown} className={'arrowFordropdown'} />
                        </div>

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
                <button>Check the car</button>
            </div>
        </div>
    </div>
  );
}

export default FirstBlock;