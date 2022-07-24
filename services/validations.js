export function validate(input) {
    const inputType = input.dataset.tipo;
    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML =
            "";
    } else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML =
            showErrorMessage(inputType, input);
    }
}

const typeErrors = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];

const errorMessage = {
    name: {
        valueMissing: "El campo Nombre no puede estar vacio",
    },
    email: {
        valueMissing: "Este campo no puede estar vacio",
        typeMismatch: "El correo no es valido.",
    },
    password: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch:
            "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
    },
    message: {
        valueMissing:
            "El campo mensaje debe contener almenos 10 a 120 caracteres.",
    },
};

function showErrorMessage(inputType, input) {
    let message = "";
    typeErrors.forEach((error) => {
        if (input.validity[error]) {
            message = errorMessage[inputType][error];
        }
    });
    return message;
}
