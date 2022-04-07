

const data = document.getElementsByClassName("btn")[0]
const data1 = document.getElementsByClassName("btn")[1]

const data2 = document.querySelector(".big-containe")
const  data3 = document.getElementById("buye")


 data.addEventListener("click",
 (eo) => {

    data2.classList.add("active");



})





data1.addEventListener("click", (eo) => {

    data2.classList.remove("active")
    
})

data3.addEventListener("click",
 (eo) => {

    forex.classList.add("activ");



})