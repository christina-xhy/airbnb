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
export function getHomeHotRecommendData() {
  return TNRequest.get({
    url: "/home/hotrecommenddest",
  });
}

export function getHomeLongforDate() {
  return TNRequest.get({
    url: "/home/longfor",
  });
}
