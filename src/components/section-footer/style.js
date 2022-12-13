import styled from "styled-components";

export const FooterWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 15px;
  display: flex;
  .info {
    display: flex;
    cursor: pointer;
    align-items: center;
    font-size: 17px;
    font-weight: 700;
    color: ${(props) => props.color};
    & :hover {
      text-decoration: underline;
    }
    .text {
      margin-right: 6px;
    }
  }
`;
