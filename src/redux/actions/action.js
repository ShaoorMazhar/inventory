export const addStore = (text) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_STORE",
      payload: text
    });
  } catch (err) {
    console.log(err);
  }
};
export const addProduct = (text) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_PRODUCT",
      payload: text
    });
  } catch (err) {
    console.log(err);
  }
};
export const getCategories = (text) => async (dispatch) => {
  try {
    dispatch({
      type: "get_categories",
      payload: text
    });
  } catch (err) {
    console.log(err);
  }
};
