import styled from "styled-components";

export const TabsWrapper = styled.div`
  .item {
    box-sizing: border-box;
    flex-basis: 120px;
    flex-shrink: 0;
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
    margin-right: 0;
  }
  .active {
    color: #fff;
    background-color: pink;
    /* background-color: ${(props) => props.theme.color.secondaryColor}; */
  }
`;
