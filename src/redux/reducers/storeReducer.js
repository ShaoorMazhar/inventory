const initialState = {
  stores: []
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_STORE":
      return {
        ...state,
        stores: [...state.stores, action.payload]
      };
    default:
      return state;
  }
};
export default storeReducer;
