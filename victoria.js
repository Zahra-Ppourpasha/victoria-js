const cleare=document.querySelector(".cleare-local")
// responsive menu
let btnMenu=document.querySelector(".victoria-menu")
let header=document.querySelector("header")
// theme
let themeSite=document.querySelectorAll(".theme-site")
let siteContent=document.querySelector(".site-content")
let flag=true
// modal code
const disCode=document.querySelector(".dis-code")
const codeBox=document.querySelector(".discount-code-modal")
const closeModal=document.querySelector(".close-modal")
let sum=""
// ---slide
const slideBtn=document.querySelectorAll(".slide-btn")
const slideBox=document.querySelector(".img-slide-box")
let count=0
const imgSld=document.querySelector(".img-slide")
let slideImgarr=["slide4.jfif","slide5.jfif","slide6.jfif"]
// scroll
const collTittle=document.querySelector(".coll-title")
const collImg=document.querySelectorAll(".collection-img")
// time
const productTitle=document.querySelectorAll(".product-title-box")
const vicProduct=document.querySelectorAll(".vic-product")
const min=document.querySelector(".min")
const sec=document.querySelector(".sec")
const realPrice=document.querySelectorAll(".real-price")
const price=document.querySelectorAll(".price-active")
const disPrice=document.querySelectorAll(".dis-price")
secText=20
// object card-product
const cardprImg=document.querySelector(".cover-card img")
const cardTitle=document.querySelector(".card-body h2")
const cardBody=document.querySelectorAll("ol")
const btnCard=document.querySelectorAll(".btn-card")
const btnBasket=document.querySelector(".add-basket")
const closeProduct=document.querySelector(".close-product-box")
const pdinfoBox=document.querySelector(".card-product-box")
const basketAddtext=document.querySelector(".card-body p")
const productImgsrc=document.querySelectorAll(".perfum-img-src img")
let srcImg=""
let srcCover=""
let myBasket=JSON.parse(localStorage.getItem("name"))||[]
let perfumeName=[]

// accordion
const accItem=document.querySelectorAll(".acc-header")
const accBody=document.querySelectorAll(".acc-body")



siteContent.classList.add(localStorage.getItem("theme") || "light")

// code rnd
if(disCode.textContent=localStorage.getItem("Code")){
    disCode.textContent=localStorage.getItem("Code")
}
else{
   for(let i=0;i<2;i++){
        let rndcap=Math.floor(Math.random()*26+65)
        let cap=String.fromCharCode(rndcap)
        sum+=cap
        let rnd=Math.floor(Math.random()*26+97)
        let little=String.fromCharCode(rnd)
        sum+=little
        let num=Math.floor(Math.random()*10)
        sum+=num
}
localStorage.setItem("Code",sum) 
disCode.textContent=sum
}
setTimeout(() => {
    codeBox.classList.replace("d-none","d-flex")
}, 3000);
closeModal.addEventListener("click",function(){
    codeBox.classList.replace("d-flex","d-none")
})
// responsive
btnMenu.addEventListener("click",function(){
    header.classList.toggle("rismenu")
})
// theme
for (const element of themeSite) {
    element.addEventListener("click",changeTheme)
}

function changeTheme(){
    if(flag){
        siteContent.classList.remove("dark") 
        siteContent.classList.add("light")
        localStorage.setItem("theme","light")
        flag=false
    }
    else{
        siteContent.classList.remove("light") 
        siteContent.classList.add("dark")
        localStorage.setItem("theme","dark")
        flag=true  
    }

}
// slide
function autoplaySlide(){
    slideTime=setInterval(nextSlide,2000)
}
autoplaySlide()
slideBox.addEventListener("mouseenter",stopSlide)
slideBox.addEventListener("mouseleave",autoplaySlide)
function stopSlide(){
    
    clearInterval(slideTime)
}
slideBtn[0].addEventListener("click",prevSlide)
function prevSlide(){
     count--
    if(count==-1){
        count=2
        
    }
    imgSld.setAttribute("src",`images/${slideImgarr[count]}`) 
}
slideBtn[1].addEventListener("click",nextSlide)
function nextSlide(){
    count++
    if(count==3){
        count=0
    }
    imgSld.setAttribute("src",`images/${slideImgarr[count]}`) 
}
// scroll
window.addEventListener("scroll",function(){
    if(scrollY>400 && scrollY<500){
        productTitle[0].classList.add("animationtitle")
        
    }
    else if(scrollY>560 && scrollY<1000){
        vicProduct[0].classList.add("animationtitle")
        
    }
    else if(scrollY>1000 && scrollY<1100){
        productTitle[1].classList.add("animationtitle")
    }
    else if(scrollY>1200 && scrollY<1700){
        vicProduct[1].classList.add("animationtitle")
        
    }
    else if(scrollY>1750 && scrollY<1800){
        collTittle.classList.add("animationtitle")
        
    }
    else if(scrollY>1900 && scrollY<2000){
        collImg[0].classList.add("animationtitle")
        
    }
    else if(scrollY>2400){
        collImg[1].classList.add("animationtitle")
        
    }
})

// time
function discountTime(){
    if(flag){
        disTime=setInterval(() => {
            secText--
            sec.textContent=secText
            if(secText<1 && min.textContent==1){
                min.textContent="00"
                secText=60
            }
            if(secText<1 && min.textContent==0){
                sec.textContent="00"
                changePice()
            }
            
        }, 1000);
    }
}
discountTime()
function changePice(){
    realPrice.forEach(element => {
        element.textContent="قیمت"
    });
    for(let i=0; i<4;i++){
        price[i].classList.replace("text-secondary","text-light")
        price[i].classList.replace("text-decoration-line-through","text-decoration-none")
        disPrice[i].textContent=""
    }
    
    clearInterval(disTime)
    
    
}
// card---------object
const productAboutone={
    productName:"victoria dream",
    pdImg:"images/pd5.jfif",
    text1:"برند victoria",
    text2:"حجم100میلی لیتر",
    text3:"ماندگاهی بالا",
    pricepd:"400000"
}
const productAbouttwo={
    productName:"victoria rose عطر زنانه",
    pdImg:"images/pd1.jpg",
    text1:"برند victoria",
    text2:"حجم100میلی لیتر",
    text3:"ماندگاهی بالا",
    pricepd:"2000000"
}
const productAboutth={
    productName:"victoria moon عطر ",
    pdImg:"images/pd2.jfif",
    text1:"برند victoria",
    text2:"حجم100میلی لیتر",
    text3:"ماندگاهی بالا",
    pricepd:"300000"
}
const productAboutf={
    productName:"pure grace عطر زنانه",
    pdImg:"images/pd3.jfif",
    text1:"برند victoria",
    text2:"حجم100میلی لیتر",
    text3:"ماندگاهی بالا",
    pricepd:"1000000"
}


    btnCard[3].addEventListener("click",function(){
    pdinfoBox.classList.remove("pdinfoClose")
    cardprImg.setAttribute("src",productAboutone.pdImg)
    srcImg=cardprImg.getAttribute("src")
    srcCover=productImgsrc[3].getAttribute("src")
    cardprImg.setAttribute("width","300")
    cardprImg.setAttribute("height","300")
    cardTitle.textContent=productAboutone.productName;
    cardBody[0].textContent=productAboutone.text1
    cardBody[1].textContent=productAboutone.text2
    cardBody[2].textContent=productAboutone.text3
    cardBody[3].textContent=productAboutone.pricepd
    btnBasket.classList.add("showbasket")
    closeProduct.classList.add("closepd")
    basketAddtext.textContent=""
})
    btnCard[0].addEventListener("click",function(){
    pdinfoBox.classList.remove("pdinfoClose")
    cardprImg.setAttribute("src",productAbouttwo.pdImg)
    srcImg=cardprImg.getAttribute("src")
    srcCover=productImgsrc[0].getAttribute("src")
    cardprImg.setAttribute("width","300")
    cardprImg.setAttribute("height","300")
    cardTitle.textContent=productAbouttwo.productName;
    cardBody[0].textContent=productAbouttwo.text1
    cardBody[1].textContent=productAbouttwo.text2
    cardBody[2].textContent=productAbouttwo.text3
    cardBody[3].textContent=productAbouttwo.pricepd
    btnBasket.classList.add("showbasket")
    closeProduct.classList.add("closepd")
    basketAddtext.textContent=""
})
    btnCard[1].addEventListener("click",function(){
    pdinfoBox.classList.remove("pdinfoClose")
    cardprImg.setAttribute("src",productAboutth.pdImg)
    srcImg=cardprImg.getAttribute("src") 
    srcCover=productImgsrc[1].getAttribute("src")
    cardprImg.setAttribute("width","300")
    cardprImg.setAttribute("height","300")
    cardTitle.textContent=productAboutth.productName;
    cardBody[0].textContent=productAboutth.text1
    cardBody[1].textContent=productAboutth.text2
    cardBody[2].textContent=productAboutth.text3
    cardBody[3].textContent=productAboutth.pricepd
    btnBasket.classList.add("showbasket")
    closeProduct.classList.add("closepd")

    basketAddtext.textContent=""
})
    btnCard[2].addEventListener("click",function(){
    pdinfoBox.classList.remove("pdinfoClose")
    cardprImg.setAttribute("src",productAboutf.pdImg)
    srcImg=cardprImg.getAttribute("src")
    srcCover=productImgsrc[2].getAttribute("src")
    cardprImg.setAttribute("width","300")
    cardprImg.setAttribute("height","300")
    cardTitle.textContent=productAboutf.productName;
    cardBody[0].textContent=productAboutf.text1
    cardBody[1].textContent=productAboutf.text2
    cardBody[2].textContent=productAboutf.text3
    cardBody[3].textContent=productAboutf.pricepd
    btnBasket.classList.add("showbasket")
    closeProduct.classList.add("closepd")
    basketAddtext.textContent=""

})

closeProduct.addEventListener("click",()=>{
    pdinfoBox.classList.add("pdinfoClose")
})
btnBasket.addEventListener("click",()=>{
    let duplicate=true
    for(let i=0; i<myBasket.length; i++){
        if(myBasket[i]==cardTitle.textContent){
            duplicate=false   
        }
    }  
    if(duplicate==false){
        basketAddtext.classList.replace("text-success","text-danger")
         basketAddtext.textContent="این محصول قبلا به سبد خرید شما اضافه شده است"
    }
    else{
        myBasket.push(cardTitle.textContent,cardBody[3].textContent)
        localStorage.setItem("name",JSON.stringify(myBasket))
         basketAddtext.classList.replace("text-danger","text-success")
         basketAddtext.textContent="این محصول به سبد خرید شما اضافه شد"
    }
})

cleare.addEventListener("click",function(){
    localStorage.clear()
    location.reload()
})
for (let i=0;i<accBody.length;i++){
    accItem[i].addEventListener("click",function(){
        perfumeInfo()
        accBody[i].classList.toggle("addacc-body")
    })
} 
    

function perfumeInfo(){
    for(let i=0; i<accItem.length;i++){
        accBody[i].classList.remove("addacc-body")
        
    }
}
