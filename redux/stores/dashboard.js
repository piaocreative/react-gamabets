import appsApi from "../../api/api";

const REQUEST_DASHBOARD_GAME_PROVIDER = "REQUEST_DASHBOARD_GAME_PROVIDER";
const RESPONSE_DASHBOARD_GAME_PROVIDER = "RESPONSE_DASHBOARD_GAME_PROVIDER";

const initialState = {
  gameProviders: {},
  loadingGameProviders: false,
};

export const actionCreators = {
  getGameProviders: () => async (dispatch, getState) => {
    dispatch({
      type: REQUEST_DASHBOARD_GAME_PROVIDER,
    });
    const res = await appsApi.dashboardGamesList();
    if (res && res.status === 1) {
      dispatch({
        type: RESPONSE_DASHBOARD_GAME_PROVIDER,
        payload: res.result,
      });
    } else {
      dispatch({
        type: RESPONSE_DASHBOARD_GAME_PROVIDER,
        payload: {},
      });
    }
  },
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DASHBOARD_GAME_PROVIDER: {
      return {
        ...state,
        loadingGameProviders: true,
      };
    }
    case RESPONSE_DASHBOARD_GAME_PROVIDER: {
      return {
        ...state,
        loadingGameProviders: false,
        gameProviders: action.payload,
      };
    }
    default:
      return state;
  }
};
