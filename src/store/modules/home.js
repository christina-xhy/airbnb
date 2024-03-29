import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeHotRecommendData,
  getHomeLongforDate,
  getHomePlusDate,
} from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//发送异步请求,并且导出export /getHomeGoodPriceData 是拼接好URL路由的一个函数
//在home文件 index.jsx 内被调用....
//async 和 await 搭配使用，一定请求成功后再执行后面的代码。
//extraReducer 需要保存请求到的数据，并且导出出去供Home使用
export const fetchHomeDataAction = createAsyncThunk(
  "fetchData",
  (payload, { dispatch }) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res));
    });
    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreAction(res));
    });
    getHomeDiscountData().then((res) => {
      dispatch(changeDiscountInfoAction(res));
    });

    getHomeHotRecommendData().then((res) => {
      dispatch(changeHotRecommendAction(res));
    });

    getHomeLongforDate().then((res) => {
      dispatch(changeLongforInfoAction(res));
    });

    getHomePlusDate().then((res) => {
      dispatch(changePlusInfoAction(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longforInfo: {},
    plusInfo: {},
  },

  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload;
    },
    changeHotRecommendAction(state, { payload }) {
      state.recommendInfo = payload;
    },
    changeLongforInfoAction(state, { payload }) {
      state.longforInfo = payload;
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload;
    },
  },

  extraReducers: {
    // [fetchHomeDataAction.fulfilled](state, { payload }) {
    //   state.goodPriceInfo = payload;
    // },
  },
});

export const {
  changeGoodPriceInfoAction,
  changeHighScoreAction,
  changeDiscountInfoAction,
  changeHotRecommendAction,
  changeLongforInfoAction,
  changePlusInfoAction,
} = homeSlice.actions;

export default homeSlice.reducer;
