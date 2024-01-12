import { useState } from 'react';
import { dataFuture } from './dataFuture';
import './App.css';

function Future() {
    const [countryFuture, setCountryFuture] = useState(dataFuture);

    const removeCountry = (id) => {
        let newCountry = countryFuture.filter(country => country.id !==id);
        setCountryFuture(newCountry)
      }

    return (
        <div>
             <div className='container'>
                <h1>List of {countryFuture.length} countries I'm going to visit:</h1>
            </div>

      {countryFuture.map((element => {
        const {id, country, image} = element;

        return (
            <div key={id}>
            <div className='container'>
              <h2>{id} - {country}</h2>
            </div>

            <div className='container'>
              <img src={image} width='300px' alt='country'/>
            </div>

            <div className='container'>
              <button onClick={() => removeCountry(id)}>Remove</button>
            </div>

          </div>
        )
      })

      )}
            <div className='container'> 
              <button className='delete' onClick={() => setCountryFuture([])}>delete all</button>
            </div>
        </div>
    )
}
export default Future;