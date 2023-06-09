const nameTicket = document.querySelector("#name-ticket");
const surnameTicket = document.querySelector("#surname-ticket");
const emailTicket = document.querySelector("#email-ticket");
const quantityTicket = document.querySelector("#quantity-ticket");
const categoryTicket = document.querySelector("#category-ticket");
const totalSpan = document.querySelector("#total-ticket");
let total = 0;
let ticket = 200;

window.addEventListener("load", cleanTicketForm);
categoryTicket.addEventListener("change", totalToPay);
quantityTicket.addEventListener("change", function(){
    if(quantityTicket.value > 10) {
        quantityTicket.value = 10;
        totalToPay();
    } else if(quantityTicket.value < 1) {
        quantityTicket.value = 1;
        totalToPay();
    } else {
        totalToPay();
    };
});

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

function cleanTicketForm() {
    nameTicket.value = "";
    surnameTicket.value = "";
    emailTicket.value = "";
    quantityTicket.value = 1;
    categoryTicket.value = "general";
};
