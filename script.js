import { clickButton } from "./validations/clickButtons.js";
import { validate } from "./validations/validations.js";

const buttons = document.querySelectorAll("button");
const inputs = document.querySelectorAll("input");
const textAreas = document.querySelectorAll("textarea");

buttons.forEach((button) => {
    button.addEventListener("click", (button) => {
        button.preventDefault();
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
