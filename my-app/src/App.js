import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { apiUrl, apiKey } from './constant/constant'
import './App.css';

function App() {
  const [asteroid, setAsteroid] = useState('');
  const history = useHistory();
  function changeAsteroidId(e) {
    e.preventDefault();
    setAsteroid(e.target.value);
  }
  function submitForm() {
    fetch(`${apiUrl}${asteroid}?api_key=${apiKey}`).then((resp) => {
      return resp.json();
    }).then((response) => {
      history.push('user-info', {
        name: response.name,
        nasa_jpl_url: response.nasa_jpl_url,
        is_potentially_hazardous_asteroid: response.is_potentially_hazardous_asteroid
      })
    }).catch(err => {
      alert('Something went wrong, please try after sometime.');
    })
  }
  function randomAsteroids() {
    fetch(`${apiUrl}browse?api_key=${apiKey}`).then((resp) => {
      return resp.json();
    }).then((response) => {
      console.log(response, 'response');
    }).catch(err => {
      alert('Something went wrong, please try after sometime.');
    })
  }
  return (
    <div className="App">
      <div className='headingStyle'>Enter Asteroid ID - eg please enter this id - 3726710</div>

      <div>
        <input className='inputClassStyle' name='asteroidId' type='text' placeholder='Enter Asteroid ID' value={asteroid} onChange={changeAsteroidId} />
        <button className='submitFormBtn' type='button' onClick={submitForm} disabled={asteroid === '' ? true : false}>Submit</button>
      </div>
      <div className='randomButtonDiv'>
        <button className='submitRandomBtn' type='button' onClick={randomAsteroids}>Random Asteroid</button>
      </div>
    </div>
  );
}

export default App;
