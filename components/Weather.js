import React, { useEffect, useState } from 'react'
// import './App.css'

export default function Weather () {

    
    const [data, setData] = useState('')
    const [search, setSearch] = useState({}) 

    function apiData(){
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=6ad9e08630d726e2fb808cf410c68562&units=metric`)
                .then(response =>{
                    return response.json();
                }).then(data =>{
                    console.log(data)
                    setData(data);
                    setSearch("")          
                })        
            }

    const handleSearch = ()=>{
        apiData(search)
    }

    useEffect(()=>{
      apiData()
    },[])


  return (
    
        <div className='box row'>
          <div className="input col-12 col-sm-12 col-md-12 col-lg-12">

                <div class="input-group mb-3 ">
                    <input type="text" class="form-control" placeholder="Enter a Cityname"  onChange={(e)=> setSearch(e.target.value)}/>
                </div>
                    <button className='btn btn-primary' onClick={handleSearch}>SEARCH</button>
          </div>
           
          <div className='text col-12 col-sm-12 col-md-12 col-lg-12'>
                <h3><span>Name : </span>{data.name}</h3>
                <h3><span>Temp : </span>{data?.main?.temp }°C</h3>
                <h3><span>Country : </span> {data?.sys?.country}</h3>
                <h3><span>Degree : </span> {data.wind?.deg}</h3>
          </div>
  </div>

  )
}

