import TNRequest from "..";

export function getEntireRoomList(offset = 0, size = 20) {
  return TNRequest.get({
    url: "entire/list",
    params: {
      offset,
      size,
    },
  });
}
