import TNRequest from "..";

export function getHomeGoodPriceData() {
  return TNRequest.get({
    url: "/home/goodprice",
  });
}

export function getHomeHighScoreData() {
  return TNRequest.get({
    url: "/home/highscore",
  });
}

export function getHomeDiscountData() {
  return TNRequest.get({
    url: "/home/discount",
  });
}
