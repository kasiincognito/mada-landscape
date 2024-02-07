var ld1 = document.querySelector(".ld1")
var lds = document.querySelector(".lds")
var ld2 = document.querySelector(".ld2")
var ld3 = document.querySelector(".ld3")
var ld4 = document.querySelector(".ld4")
var title = document.querySelector(".title")
var body = document.querySelector("body")
var back = document.querySelector(".back")

ld1.addEventListener("click",function(){
    back.style.display = "block"
    title.style.display = "none"
    lds.style.display = "none"
    body.style.backgroundImage = 'url("baobab2.jpg")'
})
ld2.addEventListener("click",function(){
    back.style.display = "block"
    title.style.display = "none"
    lds.style.display = "none"
    body.style.backgroundImage = 'url("baobab3.jpg")'
})
ld3.addEventListener("click",function(){
    back.style.display = "block"
    title.style.display = "none"
    lds.style.display = "none"
    body.style.backgroundImage = 'url("lac.jpg")'
})
ld4.addEventListener("click",function(){
    back.style.display = "block"
    title.style.display = "none"
    lds.style.display = "none"
    body.style.backgroundImage = 'url("way.jpg")'
})
back.addEventListener("click",function(){
    title.style.display = "block"
    lds.style.display = "block"
    body.style.backgroundImage = 'url("baobab1.jpg")'
})