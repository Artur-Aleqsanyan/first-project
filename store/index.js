import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/usersLogin";
import getPostsReducer from "./reducers/posts"
export const store = configureStore({
  reducer: {
    userLogin: userReducer,
    posts: getPostsReducer
  }
});
