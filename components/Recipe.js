import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';

export default function Recipe() {


  const YOUR_APP_ID = 'b35dee7d'
  const YOUR_APP_KEY = 'f837b36b91b511f0fb9d5446c9fec517'


  const [foodData, setFoodData] = useState([])
  const [search, setSearch] = useState('')
  const [diet, setDiet] = useState('balanced')
  const [meal, setMeal] = useState('breakfast')

  function apidata() {
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=20&calories=591-722&diet=${diet}&mealType=${meal}`)
      .then(response => {
        return response.json();
      }).then(data => {
        console.log(data.hits)
        setFoodData(data.hits)
      })
  }

  useEffect(() => {
    apidata()
  }, [search, diet, meal])

  function dietType(val) {
    console.log(val)
    setDiet(val)
  }

  function mealType(val) {
    console.log(val)
    setMeal(val)
  }

  return (
    <div>

      <div className='drop'>
          <div className='subdrop'>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth className='drop'>
              
              <InputLabel id="demo-simple-select-label">DIET</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={diet}
                  label="Age"
                  onChange={(e) => dietType(e.target.value)}
                >
                  <MenuItem value={'balanced'}>Balanced</MenuItem>
                  <MenuItem value={'high-fiber'}>High-Fiber</MenuItem>
                </Select>

              </FormControl>
            </Box>
          </div>

      
          <div className='subdrop' >
              <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth className='drop'>
              <InputLabel id="demo-simple-select-label">MEAL</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={meal}
                label="Age"
                onChange={(e) => mealType(e.target.value)}
              >
                <MenuItem value={'breakfast'}>Breakfast</MenuItem>
                <MenuItem value={'lunch'}>Lunch</MenuItem>
               className='subdrop' 
                <MenuItem value={'dinner'}>Dinner</MenuItem>
              </Select>
              </FormControl>
              </Box>
            </div>
            <div>
               <TextField id="outlined-basic" label="Search Food Item" variant="outlined" onClick={(e) => setSearch(e.target.value)} />
            </div>
      </div>
      


      

      <div className='main'>
        {
          foodData.map(val => {
            return (

              <div>
                <div class="card" style={{width: '20rem'}}>
                  <img src={val.recipe.image} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h3 class="card-title">{val.recipe.label}</h3>
                    <p class="card-text">{val.recipe.source}</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  </div> 
                </div>
               
              </div>

            )
          })
        }
      </div>

    </div>
  )
}
