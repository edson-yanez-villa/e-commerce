import { productServices } from "../services/product-service.js";

export const deleteProduct = (id) => {
  productServices
    .removeProduct(id)
    .then(() => alert("Producto Eliminado"))
    .catch((error) => alert("Ocurrio un error al eliminar el Producto"));
};
