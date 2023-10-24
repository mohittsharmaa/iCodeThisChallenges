// Add JavaScript code here

const closebutton = document.querySelector(".close_btn")
const form = document.querySelector(".bottom_div")


closebutton.addEventListener("click", () => {
    if (closebutton.innerText === "+") {
        closebutton.innerText = "-"
    }
    else {

        closebutton.innerText = "+"
    }
    form.classList.toggle("collapse")
})
