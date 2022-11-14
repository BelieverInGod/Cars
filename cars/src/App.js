import './App.css';
import Header from './components/Header/Header';
import FirstBlock from './components/FirstBlock/FirstBlock';
import SecondBlock from './components/SecondBlock/SecondBlock';
import ThirdBlock from './components/ThirdBlock/ThirdBlock';
import FourthBlock from './components/FourthBlock/FourthBlock';
import FifthBlock from './components/FifthBlock/FifthBlock';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <FirstBlock/>
      <SecondBlock/>
      <ThirdBlock/>
      <FourthBlock/>
      <FifthBlock/>
      <Footer/>
    </div>
  );
}

export default App;
