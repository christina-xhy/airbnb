import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  color: ${(props) => props.theme.text.primaryColor};
  font-size: 14px;
  font-weight: 600;

  .btns {
    display: flex;
    align-items: center;
    margin-right: 30px;
    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      border-radius: 22px;
      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
  .profile {
    position: relative;
    display: flex;
    width: 77px;
    height: 42px;
    margin-right: 24px;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    cursor: pointer;
    color: ${(props) => props.theme.text.primaryColor};

    ${(props) => props.theme.mixin.boxShadow};
  }

  .panel {
    position: absolute;
    top: 62px;
    right: 0;
    width: 200px;
    border-radius: 15px;
    background-color: #fff;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
    .top,
    .bottom {
      padding: 10px 0;
    }
    .item {
      height: 40px;
      line-height: 40px;
      padding: 0 16px;
      & :hover {
        background-color: #f5f5f5;
      }
    }
    .top {
      border-bottom: 1px solid #eee;
    }
  }
`;
