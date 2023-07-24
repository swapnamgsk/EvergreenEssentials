// reducers.js
const initialState = {
    data: [],
    isLoading: false,
    error: null,
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_ALL_PLANTDATA_REQUEST':
        return { ...state, isLoading: true, error: null };
      case 'GET_ALL_PLANTDATA_SUCCESS':
        return { ...state, isLoading: false, data: action.payload, error: null };
      case 'GET_ALL_PLANTDATA_FAILURE':
        return { ...state, isLoading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default dataReducer;
  