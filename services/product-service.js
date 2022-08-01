const productList = () =>
    fetch("http://localhost:3000/product").then((response) => response.json());

const crearProducto = (image, section, name, price, description) => {
    return fetch("http://localhost:3000/product", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            image,
            price,
            id: uuid.v4(),
            section,
            description,
        }),
    });
};

export const productServices = {
    productList,
    crearProducto,
};
