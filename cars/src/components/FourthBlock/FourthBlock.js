import './FourthBlock.scss';
import howWeWork from '../../assets/images/HowWeWork.png'
import carImg from '../../assets/images/mersedes.png'
import weels from '../../assets/images/weels.png'
import tap from '../../assets/images/Group.png'
import draw from '../../assets/images/request.png'
import arrow from '../../assets/images/arrow.png'


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
                <img src={draw} alt='1'/>
                <div>
                  <span>Make a request</span>
                  <div>Do it on Whatsapp or via the best way which is most comofrtable for you!
                  </div>
                </div>
              </div>
              <img src={arrow} alt='arrow' className='arrow'/>
              <div>
                <img src={tap} alt='2'/>
                <div>
                  <span>Make a request</span>
                  <div>Do it on Whatsapp or via the best way which is most comofrtable for you!
                  </div>
                </div>
              </div>
              <img src={arrow} alt='arrow' className='arrow'/>
              <div> 
                <img src={weels} alt='3'/>
                <div>
                  <span>Make a request</span>
                  <div>Do it on Whatsapp or via the best way which is most comofrtable for you!
                  </div>
                </div>
              </div>
            </div>
        </div>  
    </div>
  );
}

export default FourthBlock;