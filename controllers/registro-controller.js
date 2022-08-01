import { productServices } from "../services/product-service.js";

const formulario = document.querySelector("[product-form]");

formulario.addEventListener("click", (event) => {
    console.log("hola");
    event.preventDefault();
    const image = document.querySelector("[data-url]").value;
    const section = document.querySelector("[data-category]").value;
    const name = document.querySelector("[data-product-name]").value;
    const price = document.querySelector("[data-price]").value + "$";
    const description = document.querySelector("[data-description]").value;
    productServices
        .crearProducto(image, section, name, price, description)
        .then(() => {
            alert("Producto Creado exitosamente");
            document.querySelector("[data-url]").value = "";
            document.querySelector("[data-category]").value = "";
            document.querySelector("[data-product-name]").value = "";
            document.querySelector("[data-price]").value = "";
            document.querySelector("[data-description]").value = "";
        })
        .catch((error) => alert("Ocurrió un error"));
});
