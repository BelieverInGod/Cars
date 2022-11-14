import './App.css';
import Header from './components/Header/Header';
import FirstBlock from './components/FirstBlock/FirstBlock';
import SecondBlock from './components/SecondBlock/SecondBlock';
import ThirdBlock from './components/ThirdBlock/ThirdBlock';
import FourthBlock from './components/FourthBlock/FourthBlock';
import FifthBlock from './components/FifthBlock/FifthBlock';

function App() {
  return (
    <div className="App">
      <Header/>
      <FirstBlock/>
      <SecondBlock/>
      <ThirdBlock/>
      <FourthBlock/>
      <FifthBlock/>
      <Header/>
    </div>
  );
}

export default App;
