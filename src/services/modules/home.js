import TNRequest from "..";

export function getHomeGoodPriceData() {
  return TNRequest.get({
    url: "/home/goodprice",
  });
}
