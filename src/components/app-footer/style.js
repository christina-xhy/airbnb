import styled from "styled-components";

export const FooterWrapper = styled.div`
  margin-top: 100px;
  border-top: 1px solid #ebebeb;

  .wrapper {
    width: 1080px;
    margin: 0 auto; //居中分布
    box-sizing: border-box;
    padding: 48px 24px;
  }
  .service {
    display: flex; //每个item占一列
    .item {
      flex: 1; //每个item占固定宽度位置
      .name {
        margin-bottom: 16px;
        font-weight: 700;
      }
      .list {
        .item {
          margin-top: 6px;
          color: #767676;
          & :hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
  /* .statement {
    margin-top: 30px;
    border-top: 1px solid #ebebeb;
    padding: 20px;
    color: #767676;
    text-align: center;
  } */
`;
