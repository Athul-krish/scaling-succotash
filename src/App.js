import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
import Sooth from './components/Sooth';
//import First from './components/First';

function App() {
  return (
    <div className="App">
      {/* <First/> */}
      {/* <Second/> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<First/>}/>
        <Route path='/s' element={<Third/>}/>
        <Route path='/t' element={<Sooth/>}/>

      </Routes>
      

    </div>
  );
}

export default App;
