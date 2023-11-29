import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Heart() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/heart')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Error fetching data.');
      });
  }, []); 
  return (
    <div>
      <div className='main'>
        {error && <div>{error}</div>}
        <div className='flexBox'>
          {data.map((plant) => (
            <Link to={`/nextPage/${plant.plant_id}`} key={plant.plant_id}>
              <div className='plantContainer'>
                <div>
                  <img src={plant.plant_image} alt={plant.plant_name} className='plantImage' />
                </div>
                <div>
                  <h2 className='plantName'>{plant.plant_name}</h2>
                  <p id='plantdetails'>{plant.plant_details}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Heart;
