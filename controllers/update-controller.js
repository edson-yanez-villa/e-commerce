import { productServices } from "../services/product-service.js";

const image = document.querySelector("[data-url]");
const section = document.querySelector("[data-category]");
const name = document.querySelector("[data-product-name]");
const price = document.querySelector("[data-price]");
const description = document.querySelector("[data-description]");

const renderProduct = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  if (id === null) {
    window.location.href = "index.html";
  }

  try {
    const product = await productServices.detailProduct(id);
    image.value = product.image;
    section.value = product.section;
    name.value = product.name;
    price.value = product.price;
    description.value = product.description;
  } catch (error) {
    console.log(error);
  }
};

const updateProducto = (id) => {};

renderProduct();
