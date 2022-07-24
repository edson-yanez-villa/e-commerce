import { clickButton } from "./services/clickButtons.js";

const buttons = document.querySelectorAll("button")

buttons.forEach(button => {
    button.addEventListener("click", (button) => {
        clickButton(button.target);
    });
});
