const GET_ALL = "GET_ALL";

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
    default: {
      return state;
    }
  }
};
