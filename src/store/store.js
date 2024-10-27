const GET_ALL = "GET_ALL";
const GET_REGION = "GET_REGION";
export const initState = {
  countries: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case GET_ALL: {
      return {
        ...state,
        countries: action.payload,
      };
    }
    case GET_REGION: {
      return {
        ...state,
        countries: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

// Action Creators
export const getAllAC = (data) => ({ type: GET_ALL, payload: data });
export const getRegionAC = (data) => ({ type: GET_REGION, payload: data });
