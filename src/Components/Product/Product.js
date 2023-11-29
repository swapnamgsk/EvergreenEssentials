import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getAllPlantData} from '../../Redux/PlantReducer/Action';
import { Link } from 'react-router-dom';
import './Product.css';

export const Product = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [plantsPerPage] = useState(9);

  const { data } = useSelector((state) => state.dataReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPlantData());
  }, []);

  const indexOfLastPlant = currentPage * plantsPerPage;
  const indexOfFirstPlant = indexOfLastPlant - plantsPerPage;
  const currentPlants = data
    .filter((item) => item.plant_name.toLowerCase().includes(search.toLowerCase()))
    .slice(indexOfFirstPlant, indexOfLastPlant);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / plantsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className='inputPart'>
        <p className='product'>Medicinal Plants</p>
        <input className='input' placeholder='name' onChange={(e) => setSearch(e.target.value)} />
        <button className='search'></button>
      </div>

      <div className='flexBox'>
        {currentPlants.map((plant) => (
          <div className='plantContainer' key={plant.plant_id}>
            <Link to={`/plants/${plant.plant_id}`}>
              <div>
                <img src={plant.plant_image} alt={plant.plant_name} className='plantImage' />
              </div>
              <div>
                <h2 className='plantName'>{plant.plant_name}</h2>
                <p id='plantdetails'>{plant.plant_details}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className='pagination'>
        {pageNumbers.map((number) => (
          <span key={number} onClick={() => handlePageClick(number)} className='page-number'>
            {number}
          </span>
        ))}
      </div>
    </div>
  );
};
