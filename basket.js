myBasket=JSON.parse(localStorage.getItem("name"))
let code=localStorage.getItem("Code")
const productName=document.querySelector(".perfume-name")
const section=document.querySelector(".basket-box")
const allBasket=document.querySelector(".all-baskets")
let basketpriceAll=document.querySelector(".product-countprice")
let disBtn=document.querySelector(".discount-btn")
let prc=0
let originalPrices=[]
// tax modallll
let taxBox=document.querySelector(".tax-modal")
let totalText=document.querySelector(".total-price")
let taxtPrice=document.querySelector(".tax-price-final")
let closetax=document.querySelector(".close-tax")
let taxBtn=document.querySelector(".tax-btn")
let totalPricetext=document.querySelector(".total-price-text")
let taxText=document.querySelector(".tax-text")
// dis code modal
const closeCodemodal=document.querySelector(".close-dis-box")
let disBox=document.querySelector(".dis-modal")
let myCode=document.querySelector(".dis-code")
let continuBtn=document.querySelector(".continu-btn")
let wrongCode=document.querySelector(".wrong-code")
let numCode=localStorage.getItem("repeatCode")
const finalPaybox=document.querySelector(".pay-modal")
// dis 
const discountBox=document.querySelector(".discount-box")
const totalTaxPrice=document.querySelector(".total-tax-price ")
const totalPricePay=document.querySelector(".total-price-pay")
// without dis
const noDis=document.querySelector(".without-discount")
const finalPricenodis=document.querySelector(".finalprice-nodis")
const nodisBtn=document.querySelector(".payno-dis-btn")
// clear basket
const clearBasket=document.querySelector(".clear-basket-btn")
if(numCode==null){
    numCode=true
}
else{
    numCode=JSON.parse(numCode)
}
const backBtn=document.querySelector(".back-basket-btn")
const payBtn=document.querySelector(".pay-btn")

if(productName!==null){
    function createProductbasket(title,price){
    let div=document.createElement("div")
    div.classList.add("basket-pd") 
    let h2=document.createElement("h2")
    h2.textContent=title 
    let span=document.createElement("span")
    span.textContent=price
    span.classList.add("span-price")
    let priceText=document.createElement("span")
    priceText.textContent="قیمت:"
    let productCount=document.createElement("span")
    productCount.textContent="تعداد:"
    let input=document.createElement("input")
    input.classList.add("product-input")
    input.setAttribute("type","number")
    input.setAttribute("min","1")
    input.setAttribute("value","1")
    div.appendChild(h2)
    div.appendChild(priceText)
    div.appendChild(span)
    div.appendChild(productCount)
    div.appendChild(input)
    priceText.classList.add("price-basket")
    productCount.classList.add("price-basket")
    div.appendChild(productName)
    section.appendChild(div)
    }
}

myBasket.forEach((element,index) => {
    if(index%2===0){
        createProductbasket(element,myBasket[index+1])
        
    }
});
let spanPrice=document.querySelectorAll(".span-price")
let productInput=document.querySelectorAll(".product-input")


 for(let i=0;i<spanPrice.length;i++){
        originalPrices.push(Number(spanPrice[i].textContent));
    //    console.log(originalPrices);
       sum=0
        for (const element of originalPrices) {
            sum+=element
        }
        basketpriceAll.textContent = sum;
}


for(let i=0;i<productInput.length;i++){
    productInput[i].addEventListener("input",()=>{
    spanPrice[i].textContent=
    originalPrices[i]*Number(productInput[i].value);
        let total = 0;
     for(let m=0;m<spanPrice.length;m++){
         total+=Number(spanPrice[m].textContent); 
    }
     basketpriceAll.textContent = total;
     
    })
}  
if(disBtn!==null){
    disBtn.addEventListener("click",()=>{
    taxBox.classList.add("modal-dis-see")
    let perfumPrice=basketpriceAll.textContent
    totalText.textContent=perfumPrice
    let tax=(perfumPrice*9)/100
    let taxfainalPrice=Number(tax)+Number(perfumPrice)
    taxtPrice.textContent=taxfainalPrice
    closetax.addEventListener("click",()=>{
        taxBox.classList.remove("modal-dis-see")
    })
    taxBtn.addEventListener("click",disModal)
})
}
function disModal(){
    taxBox.classList.remove("modal-dis-see")
    disBox.classList.replace("d-none","d-flex")
    continuBtn.addEventListener("click",checkCode) 
    closeCodemodal.addEventListener("click",()=>{
        disBox.classList.replace("d-flex","d-none")
    })    
}

function checkCode(){
        if(basketpriceAll.textContent>=1000000){
        if(myCode.value!==code && myCode.value!==""){
            wrongCode.textContent="کد تخفیف نا معتبر است"      
        }
        else if(myCode.value==code && numCode==false){
            wrongCode.textContent="کد قبلا استفاده شده است"
        }
        else if(myCode.value==""){
            wrongCode.textContent="کد تخفیف را وارد کنید"
        }
        else{
            disCodeUse()          
        }
        }
        else{
            wrongCode.textContent="سبد خرید شما کمتر از یک ملیون است"
            continuBtn.textContent="باشه,ادامه خرید"
            backBtn.classList.replace("d-none","d-flex")
            backBtn.addEventListener("click",()=>{
                disBox.classList.replace("d-flex","d-none")
            })
            continuBtn.addEventListener("click",()=>{
                disBox.classList.replace("d-flex","d-none")
                setTimeout(() => {
                 noDis.classList.replace("d-none","d-flex")
                 }, 1000);
                finalPricenodis.textContent=taxtPrice.textContent
                    nodisBtn.addEventListener("click",payBox)
            })
                
        }
}
function disCodeUse(){
    numCode=false 
    localStorage.setItem("repeatCode",JSON.stringify(numCode)) 
    disBox.classList.replace("d-flex","d-none")
    setTimeout(() => {
        discountBox.classList.replace("d-none","d-flex")
    }, 1000);
    console.log(taxtPrice.textContent);
    totalTaxPrice.textContent=taxtPrice.textContent
    let totalpriceNum=totalTaxPrice.textContent
    let disPrice=totalpriceNum*20/100
    let perfumeFinalprice=Number(totalpriceNum)-Number(disPrice)
    totalPricePay.textContent=perfumeFinalprice
    payBtn.addEventListener("click",payBox)
}
function payBox(){
    finalPaybox.classList.replace("d-none","d-flex")
    disBox.classList.replace("d-flex","d-none")
    taxBox.classList.replace("d-flex","d-none")
}
clearBasket.addEventListener("click",()=>{
    localStorage.removeItem("name")
    location.reload()
})