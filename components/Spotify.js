import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';



export default function Spotify() {


    const [data, setData] = useState([])
    const [search, setSearch] = useState('')

    function apidata() {
        fetch("https://restcountries.com/v3.1/all")
            .then(response => {
                return response.json();
            }).then(data => {
                console.log(data)
                setData(data)
            })
    }

    useEffect(() => {
        apidata()
    },[search])


    let filterdata = data.filter((val) => {
        return val.name.common.toLowerCase().includes(search.toLowerCase())
    })

    return (
      <div>
          
         <div className='mb-3 mt-3'>
           <TextField id="outlined-basic" label="Countries" variant="outlined" onChange={(e)=> setSearch(e.target.value)} />
         </div>

        <div className='main'>
            {
                filterdata.map((val) => {
                    return (
                        <div>
                            <div className="card" >
                                <img src={val.flags.png} className="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h1 className="card-title">{val.name.common}</h1>
                                    <h4 className="card-text">Capital : {val.capital}</h4>
                                    <h4 className="card-text">Population : {val.population}</h4>
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
