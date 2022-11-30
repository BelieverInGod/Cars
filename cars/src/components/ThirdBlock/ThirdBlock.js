import './ThirdBlock.scss';
import star from '../../assets/images/star.png'
import washImg from '../../assets/images/car-wash.png'
import driversImg from '../../assets/images/drivers.png'
import headphonesImg from '../../assets/images/headphones.png'
import guardsImg from '../../assets/images/guards.png'



function ThirdBlock() {
  return (
    <div className="ThirdBlock">
      <div>

        <div className='titleAdvantagesContainer'>
          <img src={star} alt='star'/>
          Our Advantages
        </div>

        <div className='advantagesBocksContaineer'>
        <div className='advantageBlock'>
                <img src={washImg} alt='premiumCarParkImg'/>
                <div className='advantageTxt'>
                  <span>Premium Car Park</span>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  </div>
                </div>
            </div>
            <div className='advantageBlock'>
                <img src={driversImg} alt='premiumCarParkImg'/>
                <div className='advantageTxt'>
                  <span>Premium Car Park</span>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  </div>
                </div>
            </div>
            <div className='advantageBlock'>
                <img src={guardsImg} alt='premiumCarParkImg'/>
                <div className='advantageTxt'>
                  <span>Premium Car Park</span>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  </div>
                </div>
            </div>
            <div className='advantageBlock'>
                <img src={headphonesImg} alt='premiumCarParkImg'/>
                <div className='advantageTxt'>
                  <span>Premium Car Park</span>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}

export default ThirdBlock;