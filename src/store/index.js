import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./modules/home";
import entireReducer from "./modules/entire";

const store = configureStore({
  //configureStore支持以下两种方式
  reducer: {
    home: homeReducer, //createSlice 方式创建reducer
    entire: entireReducer, // original 方式创建reducer
  },
});

export default store;
