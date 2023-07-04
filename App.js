
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Recipe from './components/Recipe';
import Spotify from './components/Spotify';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='countries' element = {<Spotify/>}/>
        <Route path='/' element = {<Home/>}/>
        <Route path='recipe' element = {<Recipe/>}/>
        <Route path='weather' element = {<Weather/>}/>

      </Routes>
    </div>
  );
}

export default App;
