export const getResultByCityReducer = (state = null, action) => {
  switch (action.type) {
    case "Data_Weather":
      return action.payload;

    default:
      return state;
  }
};
