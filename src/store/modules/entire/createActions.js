import { getEntireRoomList } from "@/services/modules/entire";
import * as actionTypes from "./constants";

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage,
});

export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList,
});

export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount,
});

//发送网络请求
export const fetchRoomListAction = (page = 0) => {
  return async (dispatch, getState) => {
    //重新更新current页面的数据
    dispatch(changeCurrentPageAction(page));
    //1.根据页码获取最新数据
    const res = await getEntireRoomList(page * 20);
    //2. 获取到最新的数据，保存到redux的store中
    const roomList = res.list;
    const totalCount = res.totalCount;
    dispatch(changeRoomListAction(roomList));
    dispatch(changeTotalCountAction(totalCount));
  };
};
