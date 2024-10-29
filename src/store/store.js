const GET_ALL = "GET_ALL";
const GET_REGION = "GET_REGION";
const GET_COUNTRY = "GET_COUNTRY";
const GET_BORDER_COUNTRIES = "GET_BORDER_COUNTRIES";
const SET_SEARCH_TEXT = "SET_SEARCH_TEXT";
const SET_SEARCH_RESULT = "SET_SEARCH_RESULT";
const ERROR_MESSAGE = "ERROR_MESSAGE";

export const initState = {
  countries: [],
  country: [],
  border_countries: [],
  searchText: "",
  searchResult: [],
  errorMessage: "",
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
    case GET_COUNTRY: {
      return {
        ...state,
        country: action.payload,
      };
    }
    case GET_BORDER_COUNTRIES: {
      return {
        ...state,
        border_countries: action.payload,
      };
    }
    case SET_SEARCH_TEXT: {
      return {
        ...state,
        searchText: action.payload,
      };
    }
    case SET_SEARCH_RESULT: {
      return {
        ...state,
        searchResult: action.payload,
      };
    }
    case ERROR_MESSAGE: {
      return {
        ...state,
        errorMessage: action.payload,
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
export const getCountryAC = (data) => ({ type: GET_COUNTRY, payload: data });
export const getBorderCountriesAC = (data) => ({
  type: GET_BORDER_COUNTRIES,
  payload: data,
});
export const setSearchTextAC = (data) => ({
  type: SET_SEARCH_TEXT,
  payload: data,
});
export const setSearchResultAC = (data) => ({
  type: SET_SEARCH_RESULT,
  payload: data,
});
export const errorMessageAC = (data) => ({
  type: ERROR_MESSAGE,
  payload: data,
});
