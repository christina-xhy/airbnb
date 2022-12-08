import styled from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.theme.color.primaryColor}; //定义成主题之后对应设置格式

  .logo {
    margin-left: 24px;
    cursor: pointer;
  }
`;
