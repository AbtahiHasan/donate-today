//select all donate btns
let donateBnts = document.querySelectorAll(".donate-buttons .btn");
// select amount input 
let amount = document.getElementById("amount");


donateBnts.forEach(function(button){
    button.onclick = function() {
        document.querySelector(".active").classList.remove("active");
        button.classList.add("active");
        amount.value = button.innerText;
    }
})
