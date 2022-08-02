import { productServices } from "../services/product-service.js";

const newProduct = (name, price, image, id) => {
    const card = document.createElement("div");
    const contenido = `
        <img alt="Foto imagen Start Wars" class="producto__imagen" src="${image}" />
        <div class="producto__contenido">
            <h4 class="producto__titulo">${name}</h4>
            <p class="producto__descripcion">${price}</p>
            <a href="./producto.html?id=${id}" class="producto__boton">Ver producto</a>
        </div>
    `;
    card.innerHTML = contenido;
    card.classList.add("producto");
    return card;
};

const newProductButtons = (name, price, image, id) => {
    const card = document.createElement("div");
    const contenido = `
      <img alt="Foto imagen Start Wars" class="producto__imagen" src="${image}" />
      <div class="producto__contenido">
          <h4 class="producto__titulo">${name}</h4>
          <p class="producto__descripcion">${price}</p>
          <p class="producto__serie">#1111111</p>
      </div>
      <button id="${id}" product-edit class="button__product-edit" data-tipo="buttonEdit"><i class="fa-solid fa-edit" data-tipo="buttonEdit"></i></button>
      <button id="${id}" product-remove class="button__product-remove" data-tipo="buttonRemove"><i class="fa-solid fa-trash" data-tipo="buttonRemove"></i></button>
  `;
    card.innerHTML = contenido;
    card.classList.add("producto");
    return card;
};

const getAllProducts = async () => {
    try {
        const products = await productServices.productList();
        return products;
    } catch (error) {
        console.log(error);
    }
};

const startWarProducts = document.querySelector("[star-war-products]");
const consoleProducts = document.querySelector("[console-products]");
const anythingProducts = document.querySelector("[anything-products]");
const allProducts = document.querySelector("[all-products]");
const products = await getAllProducts();

const renderProducts = (productList) => {
    if (startWarProducts && consoleProducts && anythingProducts) {
        renderProdutcsBySection(productList);
    } else if (allProducts) {
        renderAllProdutcs(productList);
    }
};

const renderProdutcsBySection = (productList) => {
    startWarProducts.innerHTML = "";
    consoleProducts.innerHTML = "";
    anythingProducts.innerHTML = "";
    productList.forEach(({ name, price, image, id, section }) => {
        const card = newProduct(name, price, image, id);
        if (section === "Star Wars") {
            startWarProducts.appendChild(card);
        } else if (section === "consolas") {
            consoleProducts.appendChild(card);
        } else {
            anythingProducts.appendChild(card);
        }
    });
};

const renderAllProdutcs = (productList) => {
    allProducts.innerHTML = "";
    productList.forEach(({ name, price, image, id, section }) => {
        const card = newProductButtons(name, price, image, id);
        allProducts.appendChild(card);
    });
};

export const renderProductsSearch = (word) => {
    const searchProducts = [];
    products.forEach((element) => {
        if (element.name.includes(word) || element.id === word) {
            searchProducts.push(element);
        }
    });
    renderProducts(searchProducts);
};

renderProducts(products);
