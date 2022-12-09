import { getHomeGoodPriceData } from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk(
  "fetchData",
  async (payload) => {
    const res = await getHomeGoodPriceData();
    return res;
  }
); //发送异步请求,并且导出export /getHomeGoodPriceData 是拼接好URL路由的一个函数
//在home文件 index.jsx 内被调用....
//async 和 await 搭配使用，一定请求成功后再执行后面的代码。
//extraReducer 需要保存请求到的数据，并且导出出去供Home使用

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
  },
  extraReducers: {
    [fetchHomeDataAction.fulfilled](state, { payload }) {
      state.goodPriceInfo = payload;
    },
  },
});

export const { changeGoodPriceInfoAction } = homeSlice.actions;

export default homeSlice.reducer;
