import { getData } from "../../utility/Datahandler";
import { getCategories, setError } from "./actions";

export const fetchCategories = () => {
  return (dispatch) => {
    getData("/categories")
      .then((response) => {
        dispatch(getCategories(response));
        dispatch(setError(''))
      })
      .catch((error) => {
        console.log(`Some thing went wrong ${error}`);
        dispatch(setError(error))
      });
  };
};

