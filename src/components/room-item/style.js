import styled from "styled-components";

export const ItemWrapper = styled.div`
  box-sizing: border-box;
  width: 25%;
  padding: 8px;

  .inner {
    width: 100%;
  }

  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0; // 固定图片的高是宽的 “三分之二”
    border-radius: 3px;
    overflow: hidden;

    img {
      position: absolute; //使得图片的位置齐平
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${(props) => props.verifyColor}; //动态的引入message的text_color
    //结合index的动态引入verifyColor ={itemDate?.verify_info?.text_color || "#39576a"}
  }
  .name {
    font-size: 16px;
    font-weight: 700;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 8px 0;
  }

  .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${(props) => props.theme.text.primaryColor};

    .count {
      margin: 0 2px 0 4px;
    }

    .name {
      font-size: 16px;
      font-weight: 700;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .price {
      margin: 8px 0;
    }

    /* .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${(props) => props.theme.text.primaryColor};

    .count {
      margin: 0 2px 0 4px;
    }

    .MuiRating-decimal {
      margin-right: -2px;
    } */
  }
`;
