import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;

    .MuiPaginationItem-page.Mui-selected {
      background-color: #222;
      color: #fff;
    }
    .MuiPaginationItem-page {
      margin: 0 10px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .desc {
    margin-top: 15px;
  }
`;
