import {useState} from 'react';
import './App.css';

function App() {
  const [ search, setSearch] = useState('')

  const [ weather, setWeather] = useState({})

  const APIKey="bc900deebe4b7c13448097a515026acd";

  function searching(){
    console.log("button clicked")
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${APIKey}`).then(res=>res.json())
    .then(result => setWeather(result))
  }
  console.log(search)

  return (
      <div className='app'>
        <div className='header'><b>My Own Weather App</b></div>
        <div className='App-header'>
          
      <input type="text" placeholder="Enter your city" onChange={(e)=>setSearch(e.target.value)} />
      <br/>
      <button onClick={searching}>Search</button>
      {typeof weather.main != 'undefined' ?
      <div>
      <h2>{weather.name}</h2>
      <h4>{weather.main.temp}</h4>
      <h4>Max:{weather.main.temp_max}</h4>

      </div>
      :
      ""
  }
      </div>  
      
      </div>
      
      
      
      
  );
}

export default App;
