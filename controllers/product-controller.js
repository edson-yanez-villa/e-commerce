import { productServices } from "../services/product-service.js";

const getProduct = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    if (id === null) {
        window.location.href = "index.html";
    }

    const image = document.querySelector("[product-image]");
    const name = document.querySelector("[product-name]");
    const price = document.querySelector("[product-price]");
    const desciption = document.querySelector("[product-description]");

    try {
        const product = await productServices.detailProduct(id);
        if (product) {
            image.src = product.image;
            name.textContent = product.name;
            price.textContent = product.price;
            desciption.textContent = product.description;
        }
    } catch (error) {
        console.log(error);
    }
};

getProduct();
