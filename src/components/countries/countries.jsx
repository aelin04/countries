import { useState, useEffect } from 'react'
import axios from 'axios'
import './countries.css'

export default function Countries() {
    const [countries, setCountries] = useState([])
    const [value, setValue] = useState('')
    const getCountriesData = () => {
        axios.get('https://restcountries.com/v2/all')
        .then(resp => setCountries(resp.data))
    }
    useEffect(()=> {
        getCountriesData()
    }, []) 

    const newArrCountries = countries.filter(count => {
        return count.name.toLowerCase().includes(value.toLowerCase())
    })
    return (
        <div className="">
            <input value={value} onChange={e=> setValue(e.target.value)} type="text"/>
            <div className="main">
            {newArrCountries.map(item => (
                <div key={item.name} className="">
                    <img src={item.flags.svg} width={200} />
                    <h3>{item.name}</h3>
                    <p>{item.capital}</p>
                    <p>{item.alpha2Code}</p>
                </div>
            ))}
            </div>
        </div>
    )
}
