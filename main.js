const buyBtns = document.querySelectorAll(".buy");

buyBtns.forEach(buyBtn => {
    buyBtn.addEventListener("click", function(e) {
        e.preventDefault();
    });
});