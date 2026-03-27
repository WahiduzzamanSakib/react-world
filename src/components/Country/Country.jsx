import React from 'react';

const Country = ({country}) => {
    return (
        <div>
       <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <h3>Capital: {country.capital.capital}</h3>
            <h4>Population: {country.population.population}</h4>
        </div>
    );
};

export default Country;