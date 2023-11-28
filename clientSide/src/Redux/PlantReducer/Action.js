import {
    GET_ALL_PLANTDATA_REQUEST,
    GET_ALL_PLANTDATA_SUCCESS,
    GET_ALL_PLANTDATA_FAILURE,


    GET_ALL_HEARTPLANTDATA_REQUEST,
    GET_ALL_HEARTPLANTDATA_SUCCESS,
    GET_ALL_HEARTPLANTDATA_FAILURE,


} from "./ActionType"

import axios from "axios";

export const getAllPlantDataRequest =()=>({
    type : GET_ALL_PLANTDATA_REQUEST    
});

export const getAllPlantDataSuccess = (response) =>({
    type :GET_ALL_PLANTDATA_SUCCESS,
    payload:response.data
});

export const getAllPlantDataFailure = (error) =>({
    type : GET_ALL_PLANTDATA_FAILURE,
    payload :error.messsage
})


export const getAllPlantData=()=>
{
    return (dispatch)=>{
        dispatch(getAllPlantDataRequest())
        axios.get('http://localhost:8080/plants')
        .then ((response)=>{
            dispatch(getAllPlantDataSuccess(response))
        })
        .catch((error)=>{
            dispatch(getAllPlantDataFailure(error))
        })
    }

}
