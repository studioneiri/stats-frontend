import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Location} from "./components/ Location";

const locations = [
  {
    key: 'CHE123',
    name: 'Chemung',
    latitude: 45.123,
    longitude: -18.123,
    peakPopulation: 123,
    peakYear: 123
  },
  {
    key: 'TIO234',
    name: 'Tioga',
    latitude: 45.112,
    longitude: -18.453,
    peakPopulation: 200,
    peakYear: 304
  },
]

function App() {
    return (
    <>
      <h2>Historical Locations</h2>
      <div className="card">
        {locations.map((location) => (
            <Location key={location.name} {...location} />
        ))}
      </div>
    </>
  )
}

export default App
