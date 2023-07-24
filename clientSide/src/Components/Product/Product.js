import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getAllPlantData} from '../../Redux/PlantReducer/Action'
import './Product.css'

export const Product=()=>{
    const [search,setSearch] = useState("");
    const {data} = useSelector((state)=>state.dataReducer)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getAllPlantData())
    },[])
    console.log(data)
    return(
        <div>
            <div className='inputPart'>
                <input className='input' placeholder='name' onChange={(e)=>{setSearch(e.target.value)}}/>
                <button className='search'></button>
            </div>


            <div className='flexBox'>
                {
                    data.filter((item)=>{
                        if(item.plant_name.toLowerCase().includes(search.toLowerCase())){
                            return item;
                        }
                    }).map((plant)=>(
                            <div className='plantContainer'>
                                <div>
                                    <img  src ={plant.plant_image} alt = {plant.plant_name} className='plantImage'/>
                                </div>
                                <div className='plantData'>
                                    <h2>{plant.plant_name}</h2>
                                    <p>{plant.plant_details}</p>
                                 </div>
                            </div>
                    ))
                }
            </div>
        </div>
    )
}
