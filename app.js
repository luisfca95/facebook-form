const genderAddons = document.getElementById("gender-addon");
const genderRadios = document.querySelectorAll(".gender-selection fieldset input");
const selects = document.querySelectorAll("form select");

for(let i = 1; i <= 31; i++) {
    const option = document.createElement("option");

    selects[0].appendChild(option).textContent = i;
}

for(let i = 2023; i >= 1905; i--) {
    const option = document.createElement("option");

    selects[2].appendChild(option).textContent = i;
}

for(let radio of genderRadios) {
    radio.addEventListener("change", function() {
        genderAddons.classList.add("hide");

        if(radio.value === "P") {
            genderAddons.classList.remove("hide");       
        }
    });
}