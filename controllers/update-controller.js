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

const actualizarProducto = (id) => {
    productServices
        .updateProduct(
            image.value,
            section.value,
            name.value,
            price.value,
            description.value,
            id
        )
        .then(() => alert("Producto actualizado"))
        .catch((error) => alert(`ocurrio un error ${error}`));
};

const button = document.querySelector("[product-update]");
button.addEventListener("click", (event) => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    if (id === null) {
        window.location.href = "index.html";
    }
    actualizarProducto(id);
    image.value = "";
    section.value = "";
    name.value = "";
    price.value = "";
    description.value = "";
    window.location.href = "index.html";
});

renderProduct();
