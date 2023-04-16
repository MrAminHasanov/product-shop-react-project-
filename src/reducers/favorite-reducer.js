const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "listOnOff":
      return state.includes(action.product)
        ? state.filter((favProduct) => favProduct !== action.product)
        : [...state, action.product];
    default:
      return state;
  }
};

export default favoriteReducer;
