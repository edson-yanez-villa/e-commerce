import { productServices } from "../services/product-service.js";

const newProduct = (name, price, image, id) => {
    const card = document.createElement("div");
    const contenido = `
        <img alt="Foto imagen Start Wars" class="producto__imagen" src="${image}" />
        <div class="producto__contenido">
            <h4 class="producto__titulo">${name}</h4>
            <p class="producto__descripcion">${price}</p>
            <a href="producto.html?id=${id}" class="producto__boton">Ver producto</a>
        </div>
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
        const card = newProduct(name, price, image, id);
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
