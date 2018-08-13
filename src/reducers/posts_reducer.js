import { FETCH_POSTS, FETCH_POST } from "../actions/index";


const INITAL_STATE = { all: [], post: null };

export default function(state = INITAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, all: action.payload.data };
    case FETCH_POST:
      return { ...state, post: action.payload.data };
    default:
      return state;
  }
}
