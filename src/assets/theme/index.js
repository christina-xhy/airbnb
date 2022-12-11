const theme = {
  color: {
    primaryColor: "#ff385c",
    secondaryColor: "#00848A",
  },
  text: {
    primaryColor: "#484848",
    secondTextColor: "#222222",
  },
  mixin: {
    boxShadow: `
  transition: box-shadow 200ms ease;
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18); 
  }`,
  },
  //混入设置动画，混入设置js代码
};

export default theme;
