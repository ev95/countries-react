import axios from "axios";
import {
  getAllAC,
  getRegionAC,
  getCountryAC,
  getBorderCountriesAC,
  setSearchResultAC,
  errorMessageAC,
} from "../store/store";

const instance = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const API = {
  getAll(dispatch) {
    instance.get("/all").then((res) => dispatch(getAllAC(res.data)));
  },
  getARegion(dispatch, region) {
    instance
      .get(`/region/${region}`)
      .then((res) => dispatch(getRegionAC(res.data)));
  },
  getCountry(dispatch, name) {
    instance
      .get(`/name/${name}`)
      .then((res) => dispatch(getCountryAC(res.data)));
  },
  getBorderCountries(dispatch, country_codes) {
    instance
      .get(`/alpha?codes=${country_codes}`)
      .then((res) => dispatch(getBorderCountriesAC(res.data)));
  },
  searchCountries(dispatch, name) {
    instance
      .get(`/name/${name}`)
      .then((res) => {
        dispatch(setSearchResultAC(res.data));
        dispatch(errorMessageAC(""));
      })
      .catch((res) => {
        if (res.status === 404) {
          dispatch(errorMessageAC("Country not found"));
          dispatch(setSearchResultAC([]));
        }
      });
  },
};
// https://restcountries.com/v3.1/alpha?codes=AZE,GEO,IRN
