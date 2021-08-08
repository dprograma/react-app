import { CREATE_POSTS } from "../actions/types";

 const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_POSTS:
      return { data: action.payload };
    default:
      return state;
  }
}

export default rootReducer