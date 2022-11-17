import './ThirdBlock.scss';
import star from '../../assets/images/star.png'
import premiumPark from '../../assets/images/premiumCarPark.png'

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
                <img src={premiumPark} alt='premiumCarParkImg'/>
                <span>Premium Car Park</span>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
               </div>
            </div>
            <div className='advantageBlock'>
                <img src={premiumPark} alt='premiumCarParkImg'/>
                <span>Premium Car Park</span>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
               </div>
            </div>
            <div className='advantageBlock'>
                <img src={premiumPark} alt='premiumCarParkImg'/>
                <span>Premium Car Park</span>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
               </div>
            </div>
            <div className='advantageBlock'>
                <img src={premiumPark} alt='premiumCarParkImg'/>
                <span>Premium Car Park</span>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
               </div>
            </div>
        </div>

      </div>
    </div>
  );
}

export default ThirdBlock;