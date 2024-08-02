import './App.css'
import {Location} from "./components/Location";
import axios from "axios";
import React from "react";
import {Card} from "antd";

export interface LocationStats {
  id: string;
  name: string;
  latitude: number,
  longitude: number,
  peakPopulation: bigint,
  peakYear: bigint
}

const default_locations = [
  {
    id: 'CHE123',
    name: 'Chemung',
    latitude: 45.123,
    longitude: -18.123,
    peakPopulation: 123,
    peakYear: 123
  },
  {
    id: 'TIO234',
    name: 'Tioga',
    latitude: 45.112,
    longitude: -18.453,
    peakPopulation: 200,
    peakYear: 304
  }
]

function App() {
  const [locations, setLocations]: [LocationStats[], (posts: LocationStats[]) => void] = React.useState(default_locations);

  React.useEffect(() => {
    axios
        .get<LocationStats[]>("http://localhost:8080/locations")
        .then(response => {
          setLocations(response.data);
        })
  }, []);

    return (
    <>
      <h1>Locations in History</h1>
      <div className="card">
        {locations.map((location) => (
            <Card>
              <Location key={location.name} {...location} />
            </Card>
        ))}
      </div>
    </>
  )
}

export default App
