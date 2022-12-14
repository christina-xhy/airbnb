import styled from "styled-components";

export const ViewWrapper = styled.div`
  position: relative; //设置相对定位，才能获取item本身的位置/不是body的位置
  padding: 8px 0;
  .scroll {
    overflow: auto;
    .scroll-content {
      display: flex;
      transition: transform 250ms ease;
    }
  }
  .control {
    position: absolute;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 25px;
    border-radius: 20%;
    text-align: center;
    border-width: 2px;
    border-style: solid;
    border-color: #fff;
    background: #fff;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.14);
    cursor: pointer;

    &.left {
      left: 0;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &.right {
      right: -15px;
      top: 50%;
      transform: translate(50%, -50%);
    }
  }
`;
