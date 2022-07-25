export function validate(input) {
    const inputType = input.dataset.tipo;
    if (inputType) {
        if (input.validity.valid) {
            input.parentElement.classList.remove("input-container--invalid");
            input.parentElement.querySelector(
                ".input-message-error"
            ).innerHTML = "";
        } else {
            input.parentElement.classList.add("input-container--invalid");
            input.parentElement.querySelector(
                ".input-message-error"
            ).innerHTML = showErrorMessage(inputType, input);
        }
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
        valueMissing: "El campo email no puede estar vacio",
        typeMismatch: "El correo no es valido.",
    },
    password: {
        valueMissing: "El campo password no puede estar vacio",
        patternMismatch:
            "Debe contener una letra minúscula, mayúscula, un número.",
    },
    message: {
        valueMissing:
            "El campo mensaje debe contener almenos 10 a 120 caracteres.",
    },
    category: {
        valueMissing: "El campo Categoria no puede estar vacio",
        patternMismatch:
            "El campo categoria debe contener maximo 10 caracteres.",
    },
    productName: {
        valueMissing: "El campo Nombre no puede estar vacio",
        patternMismatch: "El campo Nombre debe contener maximo 20 caracteres.",
    },
    precio: {
        valueMissing: "El campo Precio no puede estar vacio",
        patternMismatch: "El campo Precio solo debe contener números",
    },
    descripcion: {
        patternMismatch:
            "El campo Descripcción debe contener maximo 150 caracteres",
    },
};

function showErrorMessage(inputType, input) {
    let message = "El campo no puede estar vacio";
    console.log(inputType);
    typeErrors.forEach((error) => {
        if (input.validity[error] && errorMessage[inputType]) {
            message = errorMessage[inputType][error];
        }
    });
    return message;
}
