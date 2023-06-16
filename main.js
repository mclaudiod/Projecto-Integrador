const ticketForm = document.querySelector("#ticketForm");
const nameTicket = document.querySelector("#name-ticket");
const surnameTicket = document.querySelector("#surname-ticket");
const emailTicket = document.querySelector("#email-ticket");
const quantityTicket = document.querySelector("#quantity-ticket");
const categoryTicket = document.querySelector("#category-ticket");
const totalSpan = document.querySelector("#total-ticket");
const submitTicket = document.querySelector("#submitTicket");
let alphabeticCheck = /^[a-zA-ZÀ-ÿ\s]{3,21}$/;
let emailCheck = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
let total = 0;
let ticket = 200;

window.addEventListener("load", cleanTicketForm);

nameTicket.addEventListener("keyup", function() {
    validateInput(nameTicket, "alphabetic");
});

nameTicket.addEventListener("blur", function() {
    validateInput(nameTicket, "alphabetic");
});

surnameTicket.addEventListener("keyup", function() {
    validateInput(surnameTicket, "alphabetic");
});

surnameTicket.addEventListener("blur", function() {
    validateInput(surnameTicket, "alphabetic");
});

emailTicket.addEventListener("keyup", function() {
    validateInput(emailTicket, "email");
});

emailTicket.addEventListener("blur", function() {
    validateInput(emailTicket, "email");
});

quantityTicket.addEventListener("keyup", function() {
    validateInput(quantityTicket, "number");
});

quantityTicket.addEventListener("change", function() {
    validateInput(quantityTicket, "number");
});

categoryTicket.addEventListener("change", totalToPay);

ticketForm.addEventListener("submit", validateTicketForm);

function totalToPay() {
    switch(categoryTicket.value) {
        case "general":
            total = quantityTicket.value * ticket;
            totalSpan.textContent = total;
            break;
        case "students":
            total = quantityTicket.value * (ticket * 0.2);
            totalSpan.textContent = total;
            break;
        case "trainees":
            total = quantityTicket.value * (ticket * 0.5);
            totalSpan.textContent = total;
            break;
        case "juniors":
            total = quantityTicket.value * (ticket * 0.85);
            totalSpan.textContent = total;
    };
};

function validateInput(input, type) {
    switch(type) {
        case "alphabetic":
            if(alphabeticCheck.test(input.value)) {
                input.classList.add("is-valid");
                input.classList.remove("is-invalid");
            } else {
                input.classList.add("is-invalid");
                input.classList.remove("is-valid");
            };
            break;
        case "email":
            if(emailCheck.test(input.value)) {
                input.classList.add("is-valid");
                input.classList.remove("is-invalid");
            } else {
                input.classList.add("is-invalid");
                input.classList.remove("is-valid");
            };
            break;
        case "number":
            if(input.value > 10) {
                input.value = 10;
                totalToPay();
            } else if(input.value < 0) {
                input.value = 0;
                totalToPay();
            } else {
                totalToPay();
            };
            break;
    };

    if(nameTicket.classList.contains("is-valid") && surnameTicket.classList.contains("is-valid") && emailTicket.classList.contains("is-valid") && !(input.value > 10 || input.value < 1)) {
        submitTicket.disabled = false;
    } else {
        submitTicket.disabled = true;
    }
};

function validateTicketForm() {
    validateInput(nameTicket, "alphabetic");
    validateInput(surnameTicket, "alphabetic");
    validateInput(emailTicket, "email");
    validateInput(quantityTicket, "number");
};

function cleanTicketForm() {
    nameTicket.value = "";
    nameTicket.classList.remove("is-valid");
    nameTicket.classList.remove("is-invalid");
    surnameTicket.value = "";
    surnameTicket.classList.remove("is-valid");
    surnameTicket.classList.remove("is-invalid");
    emailTicket.value = "";
    emailTicket.classList.remove("is-valid");
    emailTicket.classList.remove("is-invalid");
    quantityTicket.value = 1;
    categoryTicket.value = "general";
    totalToPay();
    submitTicket.disabled = true;
};