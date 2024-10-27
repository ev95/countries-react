import axios from "axios";

const instance = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const API = {
  getAll(dispatch) {
    instance
      .get("/all")
      .then((res) => dispatch({ type: "GET_ALL", payload: res.data }));
  },
};
