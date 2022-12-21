import styled from "styled-components";

export const ViewWrapper = styled.div`
  position: relative; //设置相对定位，才能获取item本身的位置/不是body的位置。父组件相对
  padding: 8px 0;
  .scroll {
    overflow: hidden; // 嵌套，也就是滑动的item，自身超出后隐藏。防止箭头符号超出后显示不完全
    .scroll-content {
      display: flex;
      transition: transform 250ms ease;
    }
  }
  .control {
    //按钮统一的格式设置
    position: absolute; //子组件绝对定位
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
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
      right: -5px;
      top: 50%;
      transform: translate(50%, -50%);
    }
  } //垂直方向居中。top:50% transform:translate(0,-50% 上下方向自身高度向上移动50%。)
`;
