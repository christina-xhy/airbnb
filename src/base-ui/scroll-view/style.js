import styled from "styled-components";

export const ViewWrapper = styled.div`
  overflow: auto;
  .scroll-content {
    position: relative; //设置相对定位，才能获取item本身的位置/不是body的位置
    display: flex;

    transition: transform 250ms ease;
  }
`;
