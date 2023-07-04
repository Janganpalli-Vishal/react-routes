import React from 'react'
import { NavLink } from 'react-router-dom'

import country from '../components/images/country.jpg'
import recipe from '../components/images/recipe.jpg'
import weather from '../components/images/weather.webp'

export default function () {
  return (
    <div className='homee '>

      <div className="card " style={{ width: '18rem' }}>
        <img src={country} className="imagee" style={{ height: '11rem', borderRadius:'10px' }} alt="..." />
        <div className="card-body">
          <h5 className="card-title">Country Api</h5>
          <p className="card-text">I have displayed some data of different countries by using Country Api so you can ckeck it by clicking the button below.</p>
          <NavLink className="btn btn-secondary" to= "/countries" > Countries</NavLink>
        </div>
      </div>
      <div className="card " style={{ width: '18rem' }}>
        <img src={weather} className="imagee" style={{ height: '11rem', borderRadius:'10px' }} alt="..." />
        <div className="card-body">
          <h5 className="card-title">Weather Api</h5>
          <p className="card-text">I have made a website that will show you the weather report of that place. Enter any city name to get the report.</p>
          <NavLink className="btn btn-secondary" to= "/weather" >Weather</NavLink>
        </div>
      </div>
      <div className="card " style={{ width: '18rem' }}>
        <img src={recipe} className="imagee" style={{ height: '11rem', borderRadius:'10px' }} alt="..." />
        <div className="card-body">
          <h5 className="card-title">Recipe Api</h5>
          <p className="card-text">I have displayed different types of meals and meal types by using the Recipe Api. Click the below button to check.</p>
          <NavLink className="btn btn-secondary" to= "/recipe" > Recipe</NavLink>
        </div>
      </div>

    </div>
  )
}
