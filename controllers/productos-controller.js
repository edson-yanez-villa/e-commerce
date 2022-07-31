import { productServices } from "../services/product-service.js";

const newProduct = (name, price, image, id) => {
  const card = document.createElement("div");
  const contenido = `
        <img alt="Foto imagen Start Wars" class="producto__imagen" src="${image}" />
        <div class="producto__contenido">
            <h4 class="producto__titulo">${name}</h4>
            <p class="producto__descripcion">${price}</p>
            <a href="producto.html" class="producto__boton">Ver producto</a>
        </div>
    `;
  card.innerHTML = contenido;
  card.classList.add("producto");
  return card;
};

const productos = document.querySelector("[data-products]");

const render = async () => {
  try {
    const productList = await productServices.productList();
    console.log(productos);
    productList.forEach((producto) => {
      productos.appendChild(
        newProduct(producto.name, producto.price, producto.image, producto.id)
      );
    });
  } catch (error) {
    console.log(error);
  }
};


render()