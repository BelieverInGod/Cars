import './App.css';
import Header from './components/Header/Header';
import FirstBlock from './components/FirstBlock/FirstBlock';
import SecondBlock from './components/SecondBlock/SecondBlock';
import ThirdBlock from './components/ThirdBlock/ThirdBlock';
import FourthBlock from './components/FourthBlock/FourthBlock';
import FifthBlock from './components/FifthBlock/FifthBlock';
import Footer from './components/Footer/Footer'

function App() {
  function reveal() {
    var reveals = document.querySelectorAll(".hidden");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("show");
      } else {
        reveals[i].classList.remove("show");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

  return (
    <div className="App">
      <Header/>
      <section className='hidden fade-left'>
        <FirstBlock/>
      </section>
      <section className='hidden fade-right'>
        <SecondBlock/>
      </section>
      <section className='hidden fade-left'>
        <ThirdBlock/>
      </section>
      <section className='hidden fade-right'>
        <FourthBlock/>
      </section>
      <section className='hidden fade-left'>
        <FifthBlock/>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
