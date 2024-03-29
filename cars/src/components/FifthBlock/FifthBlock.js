import './FifthBlock.scss';
import contactUs from '../../assets/images/visitUs.svg'
import OurGoogleMap from './GoogleMap'


function FifthBlock() {
  return (
    <div className="FifthBlock">
      <div className='allInfoFifth' >

        <div className='titleContactUsContainer'>
          <img src={contactUs} alt='star'/>
          Visit & Contact Us
        </div>
        <div className=' fifthInfoContainer'>

          <div className="mapInfo">
            <div className='mapAdress'>
              <div>We are located by the adress:<span>Viena, Austria, Rovnogo Chela St. 23/45</span></div>
              <div>Feel free to call or whatsup us:<span>+38 095 555-23-23</span></div>
            </div>
            <OurGoogleMap></OurGoogleMap>
          </div>

          <div className='sendMessageContainer'>
                  <div className='title'>
                      <div className='titleText'>
                          Send us a message!<br/>
                          <span>We will reply within 24 hours!</span>
                      </div>
                  </div>
                  <div className='inputsContainer'>
                    <input type='text' placeholder='Your name' />
                    <input type='text' placeholder='Your email' />
                    <input type='text' placeholder='Your message' className='yourText' />

                    <button>Send</button>
                  </div>
          </div>

          <div className="mobileInfoPlus">
            <div>We are located by the adress:<span>Viena, Austria, Rovnogo Chela St. 23/45</span></div>
            <div>Feel free to call or whatsup us:<span>+38 095 555-23-23</span></div>
          </div>

        </div>   
      </div>
    </div>
  );
}

export default FifthBlock;