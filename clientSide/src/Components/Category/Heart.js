// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Heart() {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     // Fetch data when the component mounts
//     axios.get('http://localhost:8080/heart')
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//         setError('Error fetching data.');
//       });
//   }, []); // Empty dependency array ensures the effect runs only once when the component mounts

//   return (
//     <div>
//       <div className='main'>
//         {error && <div>{error}</div>}
//         <div className='flexBox'>
//           {data.map((plant) => (
//             <div className='plantContainer' key={plant.plant_id}>
//               <div>
//                 <img src={plant.plant_image} alt={plant.plant_name} className='plantImage' />
//               </div>
//               <div>
//                 <h2 className='plantName'>{plant.plant_name}</h2>
//                 <p id='plantdetails'>{plant.plant_details}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Heart;






// Heart.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Heart() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch data when the component mounts
    axios.get('http://localhost:8080/heart')
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
