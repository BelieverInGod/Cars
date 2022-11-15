import './FourthBlock.scss';
import howWeWork from '../../assets/images/HowWeWork.png'
import carImg from '../../assets/images/mersedes.png'
import weels from '../../assets/images/weels.png'
import tap from '../../assets/images/tap.png'
import draw from '../../assets/images/draw.png'



function FourthBlock() {
  return (
    <div className="FourthBlock">
        <div className='FourthBlockAllContainer'>
          <div className='fourthDecorationInfo'>
              <div className='titleHowWeWorkContainer'>
                <div className='title'>
                  <img src={howWeWork} alt='HowHeWork'/>
                  How We Work
                </div>
                <div className='info'>
                  Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Donec et odio pellentesque diam volutpat commodo sed egestas egestas. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant.
                  Nulla posuere sollicitudin aliquam ultrices sagittis.
                  Scelerisque viverra mauris in aliquam sem fringilla ut. Eget est lorem ipsum dolor sit amet. Ullamcorper sit amet risus nullam eget. 
                </div>
              </div>        
              <div className='fourthDecoration'>
                <img src={carImg} alt='star'/>
              </div>
            </div>
            
            <div className='absoluteBox'>
              <div>
                <img src={draw} alt='2'/>
                <span>Jaguar F-Type Cabrio</span>
                <div>Amazing car to drive and enjoy views of the beautiful
                      ebat togo rot bratislava.
                      Feel free to gazovat pizda and enjoy the wind !
                </div>

              </div>
              <div>
                <img src={tap} alt='2'/>
                <span>Jaguar F-Type Cabrio</span>
                <div>Amazing car to drive and enjoy views of the beautiful
                      ebat togo rot bratislava.
                      Feel free to gazovat pizda and enjoy the wind !
                </div>
              </div>
              <div> 
                <img src={weels} alt='2'/>
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

export default FourthBlock;