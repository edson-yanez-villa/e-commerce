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

const removeProduct = (id) => {
    return fetch(`http://localhost:3000/product/${id}`, {
        method: "DELETE",
    });
};

const detailProduct = (id) => {
    return fetch(`http://localhost:3000/product/${id}`).then((respuesta) =>
        respuesta.json()
    );
};

const updateProduct = (image, section, name, price, description, id) => {
    return fetch(`http://localhost:3000/product/perfil/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            image,
            price,
            section,
            description,
        }),
    })
        .then((respuesta) => respuesta)
        .catch((err) => console.log(err));
};

export const productServices = {
    productList,
    crearProducto,
    removeProduct,
    detailProduct,
    updateProduct,
};
