const productList = () =>
  fetch("http://localhost:3000/product").then((response) => response.json());

export const productServices = {
  productList,
};
