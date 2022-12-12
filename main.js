let img1 = document.querySelector('.st')
let img2 = document.querySelector('.lt')
let img3 = document.querySelector('.kt')
let body = document.querySelector('.bd')
let btn = document.querySelector(".btn")
let item = document.querySelector(".item")
let link1 = document.querySelector("#link1")
let link2 = document.querySelector("#link2")
let user = document.querySelector(".user")
let text = document.querySelector(".header-text")
let link3 = document.querySelector("#link3")
let link4 = document.querySelector("#link4")
let link5 = document.querySelector("#link5")
link1.addEventListener("click",()=>{
 alert(`Hurmatli Xaridor !! 
Bizning manzilimiz - Najot Ta'lim
o'quv markazning Chionzor filialida`)
})
link2.addEventListener("click",()=>{
  alert(`Bog'lanishingiz uchun
Telefon raqamimiz - +998993303377`)
 })
 link3.addEventListener("click",()=>{
  alert(`Siz sevimlilarni ko'rishingiz
uchun saytimizdan narsa xarid qiling !!`)
 })
 link3.addEventListener("click",()=>{
  alert(`Siz sevimlilarni ko'rishingiz
uchun saytimizdan narsa xarid qiling !!`)
 })
 link4.addEventListener("click",()=>{
  alert(`Xaridlar pastda 👇👇 `)
 })
 link5.addEventListener("click",()=>{
  alert(`Saytimizga xush kelibsiz 😎😎`)
 })
  img1.style.backgroundColor = "red"
img2.style.backgroundColor = "red"
img3.style.backgroundColor = "red"


let form = document.querySelector('.form')
let inputs = document.querySelectorAll('.input')
let box = document.querySelector(".box")
let arr = []

  form.addEventListener("submit",(e)=>{
    e.preventDefault()
    form.id = 1
    let obj = {};
    for(let i of inputs){
      obj[i.name] = i.value
      obj.id = Math.round(Math.random()*1000)
      i.value = ""
    }
   
    setTimeout(() => {
      count++
     text.innerHTML = `
      ${count}
     `
     }, 1000);
  
    console.log(obj);
  

    arr.push(obj)
 
    render()
    
  })





function render(){
  box.innerHTML = ""
  for(let i of arr){
    let ul = document.createElement("ul")
    ul.id = i.id

    ul.innerHTML = `
    <div class=" card text-bg-danger" style="width: 18rem; ">
    <img src="./img/mevalar.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${i.familya} mevasi</h5>
      <p class="card-text">${i.manzil} so'm</p>
      <a href="#" class="btn btn-primary">Sotib olish</a>
    </div>
  </div>
    <li><h5>Foydalanuvchi ismi: ${i.ism}</h5></li>
    <li ><h5>Mahsulot nomi: ${i.familya}</h5></li>
    <li><h5>Mahsulot narxi:<mark><del>${i.manzil}</del></mark>  ${i.manzil - 2000}</h5></li>
    <li> <button type = "button" onclick = "deletefunc(${i.id})">Delete</button></li>

    `
    box.append(ul)
     
  }

}

const deletefunc = (id) => {
  console.log(id);
  for(let i = 0; i < arr.length;i++){
  if(id == arr[i].id){
    arr.splice(i,1)
  }
  }
  render()
  }

let count = 0



