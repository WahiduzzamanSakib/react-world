import { use, useState } from "react";
import Country from "../Country/Country";

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries

    const [visitedCountry, setVisitedCountry] = useState([])

    const [visitedFlag, setVisitedFlags] = useState([])


    const handleVisited = (country) => {
        setVisitedCountry([...visitedCountry, country])
    }
    const visitedFlags = (flag) => {
        const newFlag = [...visitedFlag, flag];
        setVisitedFlags(newFlag)
    }

    return (
        <div>
            <h1 style={{ textAlign: "center", padding: "10px" }}>In the Countries: {countries.length}</h1>
            <h2 style={{ textAlign: "center" }}>Total Visited: {visitedCountry.length}</h2>
            <h3 style={{ textAlign: "center" }}>Visited Flags: {visitedFlag.length} </h3>
            {
                visitedCountry.map(country => <ol style={{ display: "flex", justifyContent: "center" }}> <li s>{country.name.common}</li></ol>)
            }
            <div style={{width: "50px", marginRight: "10px", display:"flex", gap:"10px"}}>
                {
                    visitedFlag.map(flag =><img src={flag}></img>)
                }
            </div>
            <div className="countries">
                {
                    countries.map(country => <Country 
                        visitedFlags={visitedFlags} 
                        key={country.cca3.cca3} 
                        handleVisited={handleVisited} 
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;