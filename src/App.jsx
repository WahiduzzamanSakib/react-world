import Countries from "./components/Countries/countries"
import './App.css'
import { Suspense } from "react"

const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")
  .then((res) => res.json())

function App() {
  
  return (
    <>
<Suspense fallback={<h3>Loading....</h3> }>
  <Countries countriesPromise={countriesPromise}></Countries>
</Suspense>
    </>
  )
}

export default App
