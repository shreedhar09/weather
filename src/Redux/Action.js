import axios from "axios";
export const getResultByCityAction = CityName => {
  return async dispatch => {
    let Response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=f9507ed6600615bfa74462d8b6348d28`
    );
    console.log(Response);

    dispatch({ type: "Data_Weather", payload: Response.data });
  };
};
