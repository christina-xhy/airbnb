import styled from "styled-components";
import coverImag from "@/assets/img/cover_01.jpeg"; //js代码需要引入图片

export const BannerWrapper = styled.div`
  height: 529px;
  background: url(${coverImag}) center/cover; //设置居中和图片大小
  /* background: url(${require("@/assets/img/cover_01.jpeg")}) center/cover; */
  //需要require进行包裹，是一个js代码 则需要加上$. */
  // 如果是最早期webpack 5点几以上， 因为返回了一个对象，使用加上.default寻找到路径
`;
