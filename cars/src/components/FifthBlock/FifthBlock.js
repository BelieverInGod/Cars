import './FifthBlock.scss';
import contactUs from '../../assets/images/contactUs.png'

function FifthBlock() {
  return (
    <div className="FifthBlock">
        <div className='titleContactUsContainer'>
          <img src={contactUs} alt='star'/>
          Visit & Contact Us
        </div>

        <div className='sendMessageContainer'>
                <div className='title'>
                    <div className='titleImg'></div>
                    <div className='titleText'>
                        Send us a message!<br/>
                        <span>We will reply within 24 hours!</span>
                    </div>
                </div>
                <div className='inputsContainer'>
                        <input type='text' placeholder='Your name' />
                        <input type='text' placeholder='Your email' />
                        <input type='text' placeholder='Your message' className='yourText' />

                        <button>search</button>
                    </div>
            </div>

    </div>
  );
}

export default FifthBlock;