import { renderProductsSearch } from "../controllers/productos-controller.js";

export function clickButton(event) {
    const buttonType = event.dataset.tipo;
    if (buttons[buttonType]) {
        buttons[buttonType](event);
    }
}

const buttons = {
    goLogin: (event) => goToLogin(event),
    goConsoles: (event) => goToConsoles(event),
    searchButton: (event) => search(event),
};

const goToLogin = (event) => {
    location.href = "login.html";
};

const goToConsoles = (event) => {
    document.getElementById("consolas").scrollIntoView();
};

const search = (event) => {
    const input = document.querySelector("[data-input-search]");
    const word = input.value;
    renderProductsSearch(word);
    input.value = "";
};
