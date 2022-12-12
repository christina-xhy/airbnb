import styled from "styled-components";

export const TabsWrapper = styled.div`
  display: flex;
  .item {
    box-sizing: border-box;
    padding: 10px 14px;
    margin-right: 16px;
    border-radius: 10px;
    font-size: 17px;
    text-align: center;
    border: 0.5px solid white;
    white-space: nowrap;
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow}
  }
  & :last-child {
  }
  .active {
    color: #fff;
    background-color: pink;
    /* background-color: ${(props) => props.theme.color.secondaryColor}; */
  }
`;
