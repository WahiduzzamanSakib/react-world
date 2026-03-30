import { useState } from "react";


const Country = ({country, handleVisited , visitedFlags}) => {
    const [visited, setVisited] = useState(false);



    const handleClick = () => {
        // 1. system
        // if (visited) {
        //     setVisited(false)
        // }
        // else {
        //     setVisited(true)
        // }

        // 2. system
        // setVisited(visited ? false: true)

        // 3. system
        setVisited(!visited)
        handleVisited(country)
    }
    return (
        <div className={`country , ${visited ? "visited1" : false} `}>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <h3>Capital: {country.capital.capital}</h3>
            <h4>Population: {country.population.population}</h4>
            <h4>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Smell Country"}</h4>

            <button onClick={handleClick}   className='btn1'>{visited ? "Visited" : "Not Visited"}</button>
            <button onClick={() =>{visitedFlags(country.flags.flags.png)}} className="btn2">Add Visited Flag</button>
        </div>
    );
};

export default Country;