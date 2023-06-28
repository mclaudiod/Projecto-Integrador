const ticketInputs = Array.from(document.querySelectorAll("#ticketForm .val"));
const categoryTicket = document.querySelector("#category-ticket");
const totalSpan = document.querySelector("#total-ticket");
const submitTicket = document.querySelector("#submitTicket");
let alphabeticCheck = /^[a-zA-ZÀ-ÿ\s]{3,21}$/;
let emailCheck = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
let total = 0;
let ticket = 200;

window.addEventListener("load", cleanTicketForm);

ticketInputs.forEach((ticketInput) => {
    ticketInput.addEventListener("input", validateInput);
});

categoryTicket.addEventListener("change", totalToPay);

function totalToPay() {
    switch (categoryTicket.value) {
        case "general":
          total = ticketInputs[3].value * ticket;
          break;
        case "students":
          total = ticketInputs[3].value * (ticket * 0.2);
          break;
        case "trainees":
          total = ticketInputs[3].value * (ticket * 0.5);
          break;
        case "juniors":
          total = ticketInputs[3].value * (ticket * 0.85);
          break;
      };

      totalSpan.textContent = total;
};

function validateInput(event) {
    const input = event.target;
    const value = input.value;

    switch(input.id) {
        case "name-ticket":
        case "surname-ticket":
            input.classList.toggle("is-valid", alphabeticCheck.test(value));
            input.classList.toggle("is-invalid", !alphabeticCheck.test(value));
            break;
        case "email-ticket":
            input.classList.toggle("is-valid", emailCheck.test(value));
            input.classList.toggle("is-invalid", !emailCheck.test(value));
            break;
        case "quantity-ticket":
            input.value = Math.max(0, Math.min(10, value));
            totalToPay();
            break;
    };

    const allInputsValid =
    ticketInputs[0].classList.contains("is-valid") &&
    ticketInputs[1].classList.contains("is-valid") &&
    ticketInputs[2].classList.contains("is-valid") &&
    !(ticketInputs[3].value > 10 || ticketInputs[3].value < 1);

    submitTicket.disabled = !allInputsValid;
};

function cleanTicketForm() {
    ticketInputs[0].value = "";
    ticketInputs[0].classList.remove("is-valid");
    ticketInputs[0].classList.remove("is-invalid");
    ticketInputs[1].value = "";
    ticketInputs[1].classList.remove("is-valid");
    ticketInputs[1].classList.remove("is-invalid");
    ticketInputs[2].value = "";
    ticketInputs[2].classList.remove("is-valid");
    ticketInputs[2].classList.remove("is-invalid");
    ticketInputs[3].value = 1;
    categoryTicket.value = "general";
    totalToPay();
    submitTicket.disabled = true;
};