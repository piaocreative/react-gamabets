const INCREMENT = "increment";

const initialState = {
  count: 0,
};

export const actionCreators = {
  increment: () => async (dispatch, getState) => {
    dispatch({
      type: INCREMENT,
    });
  },
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    default:
      return state;
  }
};
