import axios from "axios";
import { getAllAC, getRegionAC } from "../store/store";

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
};
