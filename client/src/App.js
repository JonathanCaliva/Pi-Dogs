
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LandingPage from './componentes/LandingPage/landingPage';
import Home from './componentes/Home/home';
import CreateDog from './componentes/createDog/createDog';
import Detail from './componentes/Detail/detail';
import Favorite from './componentes/Favorite/favorite';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPage/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/post' element={<CreateDog/>} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path='favorite' element={<Favorite/>}/> 
      </Routes>
    </div>
    </Router> 
  );
}

export default App;
