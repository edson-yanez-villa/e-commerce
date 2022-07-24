import { clickButton } from "./services/clickButtons.js";
import { validate } from "./services/validations.js";

const buttons = document.querySelectorAll("button");
const inputs = document.querySelectorAll("input");
const textAreas = document.querySelectorAll("textarea");

buttons.forEach((button) => {
    button.addEventListener("click", (button) => {
        clickButton(button.target);
    });
});

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        validate(input.target);
    });
});

textAreas.forEach((input) => {
    input.addEventListener("blur", (input) => {
        validate(input.target);
    });
});
