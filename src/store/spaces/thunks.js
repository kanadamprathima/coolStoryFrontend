import axios from "axios";
import { fetchSpaces, setSpaceDetails } from "./slice";
import { apiUrl } from "../../config/constants";
//Feature1
export const getSpaces = () => async (dispatch, getState) => {
  try {
    const res = await axios.get("http://localhost:4000/spaces");
    //   console.log(" space response", res.data);
    dispatch(fetchSpaces(res.data));
  } catch (e) {
    console.log(e.message);
  }
};
//Feature2
export const fetchSpaceById = (id) => async (dispatch, getstate) => {
  try {
    const response = await axios.get(`http://localhost:4000/spaces/${id}`);
    console.log("spacedetails thunks", response.data);
    dispatch(setSpaceDetails(response.data));
  } catch (e) {
    console.log(e.message);
  }
};
