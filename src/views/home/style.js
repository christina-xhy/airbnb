import styled from "styled-components";

export const HomeWrapper = styled.div`
  > .content {
    //直接子元素设置样式 >
    width: 1032px;
    margin: 0 auto;
  }
  .good-price {
    margin-top: 30px;
  }

  .room-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px; //高和宽同时设置布局
  }
`;
