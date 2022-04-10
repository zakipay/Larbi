

const data = document.getElementsByClassName("btn")[2]
const data1 = document.getElementsByClassName("btn")[3]
const data2 = document.querySelector(".big-containe")

const  data3 = document.getElementsByClassName("btn")[4]
const data4 = document.getElementsByClassName("btn")[5]
const data5 = document.querySelector(".big-forex")

const data6 = document.getElementsByClassName("btn")[0]
const data7 = document.querySelector(".big-contacte")
const data8 = document.getElementsByClassName("btn")[1]


const data9 = document.getElementsByClassName("btn")[6]
const data10 = document.querySelector(".big-apropos")
const data11 = document.getElementsByClassName("btn")[7]

const data12 = document.getElementsByClassName("btn")[8]
const data13 = document.querySelector(".big-Politique")
const data14 = document.getElementsByClassName("btn")[9]


 data.addEventListener("click",
 (eo) => {

    data2.classList.add("active");



})





data1.addEventListener("click", (eo) => {

    data2.classList.remove("active")
    
})


data3.addEventListener("click",
 (eo) => {

    data5.classList.add("active");



})


data5.addEventListener("click", (eo) => {

    data5.classList.remove("active");
    
})


data6.addEventListener("click",
 (eo) => {

    data7.classList.add("active");



})


data8.addEventListener("click", (eo) => {

    data7.classList.remove("active");
    
})



data9.addEventListener("click",
 (eo) => {

    data10.classList.add("active");



})


data11.addEventListener("click", (eo) => {

    data10.classList.remove("active");
    
})

data12.addEventListener("click",
 (eo) => {

    data13.classList.add("active");



})


data14.addEventListener("click", (eo) => {

    data13.classList.remove("active");
    
})