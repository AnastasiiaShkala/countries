import { useState } from 'react';
import { data } from './data';
import './App.css';
import Future from './Future';

function App() {
  const [countryPast, setCountryPast] = useState(0);
  const {id, country, image} = data[countryPast];
  


  const previousCountry = () => {
    setCountryPast((countryPast => {
      countryPast--;
      if (countryPast < 0) {
        return data.length-1;
      }
      return countryPast;
    }))
  }
  
  const nextCountry = () => {
    setCountryPast((countryPast => {
      countryPast++;
      if (countryPast > data.length-1){
        countryPast=0;
      }
      return countryPast;
    }))
  }


  return (
    <div>
      <div className='container'>
        <h1>List of countries I visited:</h1>
      </div>
      <div className='container'>
        <img src={image} width='300px' alt='Country'/>
      </div>
      <div className='container'>
        <h2>{id} - {country}</h2>
      </div>
  <div className='container btn'>
    <button onClick={previousCountry}>Previous</button>
    <button onClick={nextCountry}>Next</button>
  </div>
 <div className='container'>
  <Future/>
 </div>
    </div>
  );
}

export default App;
