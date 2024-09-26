import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Kidney() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch data when the component mounts
    axios.get('http://localhost:8080/kidney')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Error fetching data.');
      });
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div>
      <div className='main'>
        {error && <div>{error}</div>}
        <div className='flexBox'>
          {data.map((plant) => (
            <div className='plantContainer' key={plant.plant_id}>
              <div>
                <img src={plant.plant_image} alt={plant.plant_name} className='plantImage' />
              </div>
              <div>
                <h2 className='plantName'>{plant.plant_name}</h2>
                <p id='plantdetails'>{plant.plant_details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Kidney;
