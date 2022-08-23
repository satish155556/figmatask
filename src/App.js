import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Tollywood from './Components/Tollywood';
import Bollywood from './Components/Bollywood';
import Hollywood from './Components/Hollywood';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login/>}></Route>
              <Route path='/home' element={<Home/>}></Route>
              <Route path='/tollywood' element={<Tollywood/>}></Route>x
              <Route path='/bollywood' element={<Bollywood/>}></Route>
              <Route path='/hollywood' element={<Hollywood/>}></Route>

            </Routes>
      </BrowserRouter>
     
     
     
     
    </div>
  );
}

export default App;
