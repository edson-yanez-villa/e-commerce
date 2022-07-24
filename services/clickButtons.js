export function clickButton(event){
    const buttonType = event.dataset.tipo;
    if(buttons[buttonType]){
        buttons[buttonType](event);
    }

}

const buttons = {
    goLogin: (event) => goToLogin(event),
    goConsoles: (event) => goToConsoles(event),
};

const goToLogin = (event) => {
    location.href = "login.html";
};

const goToConsoles = (event) => {
    document.getElementById("consolas").scrollIntoView();
};
