// login form

var log = document.getElementById("log")
var login_btn_show = document.getElementById("login_btn")
var login_btn_hide = document.getElementById("login_hide_btn")
login_btn_show.addEventListener("click", btn_show)
login_btn_hide.addEventListener("click", hide)
function btn_show(e) {
    e.preventDefault()
    log.style.display = "flex"
}
function hide(e) {
    e.preventDefault()
    log.style.display = "none"
}


// slide show


// category
let data = [
    {
        name: "Face Mask, Sanitizers & Essentials",
        img: "https://res.sastasundar.com/incom/app_images/1590819261_essential-item-new.jpg"
    },
    {
        name: "Health Drinks & Nutritional Supplements",
        img: "https://res.sastasundar.com/incom/app_images/1573021107_healthsupplemen.png"
    },
    {
        name: "Beauty & Personal Care",
        img: "https://res.sastasundar.com/incom/app_images/1572961552_beautypersonalc.png"
    },
    {
        name: "Health Food, Gourmet & Beverages",
        img: "https://res.sastasundar.com/incom/app_images/1572961603_breakfastfoodbe.png"
    },
    {
        name: "Homecare & Hygiene",
        img: "https://res.sastasundar.com/incom/app_images/1572961646_homecarehygiene.png"
    },
    {
        name: "Ayurvedic & Herbal",
        img: "https://res.sastasundar.com/incom/app_images/1572961684_ayurvedicherbal.png"
    },
    {
        name: "Devices & Orthopaedic",
        img: "https://res.sastasundar.com/incom/app_images/1572961713_devicesorthopae.png"
    },
    {
        name: "Sports",
        img: "https://res.sastasundar.com/incom/app_images/1623222124_sports-icon.png"
    },
    {
        name: "School & Office Stationery",
        img: "https://res.sastasundar.com/incom/app_images/1572961985_healthsupplemen.png"
    },
    {
        name: "Gift Health Box",
        img: "https://res.sastasundar.com/incom/app_images/1572961935_personalisedgif.png"
    },
    {
        name: "Asics",
        img: "	https://res.sastasundar.com/incom/app_images/1618464120_asics-icon.png"
    },
    {
        name: "Shop By Brands",
        img: "https://res.sastasundar.com/incom/app_images/1572961962_shopbybrands.png"
    },
]

let parent = document.getElementById("category")

function showProducts() {

    data.forEach(function (products) {

        let div = document.createElement("div")
        let img = document.createElement("img")
        img.src = products.img
        let products_name = document.createElement("p")
        products_name.textContent = products.name





        div.append(img, products_name)
        parent.append(div)
    })
}

showProducts()





// auto slideshow

var slideIndex = 0;
showSlides();
var slides, dots;

function showSlides() {
    var i;
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 8 seconds
}

function plusSlides(position) {
    slideIndex += position;
    if (slideIndex > slides.length) { slideIndex = 1 }
    else if (slideIndex < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// top products


let top_data = [
    {
        name: "Oxy 99 Breathe Pure Oxygen",
        img: "https://res.sastasundar.com/incom/images/product/thumb/Oxy-99-Breathe-Pure-Oxygen-1556869062-10059975-1.jpg",
        price: 786
    },
    {
        name: "Pulse Oximeter (Zebronics) ZEBFPO500",
        img: "https://res.sastasundar.com/incom/images/product/thumb/Pulse-Oximeter-Zebronics-ZEBFPO500-1596267341-10074617-1.jpg",
        price: 1800
    },
    {
        name: "Baidyanath Giloy Satwa",
        img: "https://res.sastasundar.com/incom/images/product/thumb/Baidyanath-Giloy-Satwa-1602923931-10031376-1.jpg",
        price: 156
    },
    {
        name: "Lakme Enrich Satin Lipstick Shade (R356)",
        img: "https://res.sastasundar.com/incom/images/product/thumb/Lakme-Enrich-Satin-Lipstick-43-gm-1568099383-10030958-1.jpg",
        price: 350
    },
    {
        name: "Lakme 9 To 5 Flawless Matte Complexion Compac...",
        img: "https://res.sastasundar.com/incom/images/product/thumb/Lakme-9-To-5-Flawless-Matte-Complexion-Compact-Apricot-Matte-1575706007-10029642-1.jpg",
        price: 455
    },
    {
        name: "Goodcare Good Heart",
        img: "https://res.sastasundar.com/incom/images/product/thumb/Goodcare-Good-Heart-1596194435-10031377-1.jpg",
        price: 199
    },
    {
        name: "Flamingo Lumbar Sacro Belt",
        img: "https://res.sastasundar.com/incom/images/product/thumb/Flamingo-Lumbar-Sacro-Belt-1569407978-10005227-1.jpg",
        price: 527
    },
    {
        name: "Flamingo Shoulder Support",
        img: "https://res.sastasundar.com/incom/images/product/thumb/Shoulder-Support-Flamingo-1521541614-10005173.jpg",
        price: 257
    }

]

let top_parent = document.getElementById("pro")

function top_showProducts() {

    top_data.forEach(function (products) {

        let div = document.createElement("div")
        let div_img = document.createElement("div")
        div_img.setAttribute("class", "pro_img")
        let img = document.createElement("img")
        img.src = products.img

        let products_name = document.createElement("p")
        products_name.textContent = products.name

        let div_det = document.createElement("div")
        div_det.setAttribute("class", "pro_det")
        let products_price = document.createElement("p")
        products_price.textContent = products.price
        let add_to_cart = document.createElement("button")
        add_to_cart.textContent = "Add"
        add_to_cart.onclick = function () {
            add_cart(products)
        }


        div_img.append(img)
        div_det.append(products_price,add_to_cart)

        div.append(div_img,products_name,div_det)
        top_parent.append(div)

    })
}

top_showProducts()

if (localStorage.getItem("cart")===null) {
    localStorage.setItem("cart",JSON.stringify([]))
}

function add_cart(products) {
    let products_carts = JSON.parse(localStorage.getItem("cart"))
    products_carts.push(products)
    localStorage.setItem("cart",JSON.stringify(products_carts))
}


// feature
let feature_data = [
    {
        name: "Medimix Natural Glycerine Soap (Buy 4 Get 1 F...",
        img: "https://res.sastasundar.com/incom/images/product/thumb/Medimix-Natural-Glycerine-Soap-Buy-4-Get-1-Free-1607513923-10020685-1.jpg",
        price: 71
    },
    {
        name: "Gillette Mach 3 Cartridges (Save Rs. 21)",
        img: "https://res.sastasundar.com/incom/images/product/thumb/Gillette-Mach-3-Cartridges-Save-Rs-21-1630662481-10009688-1.jpg",
        price: 180
    },
    {
        name: "Dabur Glucoplus C Orange Powder Refill (Free ...",
        img: "https://res.sastasundar.com/incom/images/product/thumb/Dabur-Glucoplus-C-Orange-Refill-Powder-Free-50-gm-1592828775-10041450-1.jpg",
        price: 234
    },
    {
        name: "Fiama Men Refreshing Pulse Gel Bar (Buy 3 Get...",
        img: "https://res.sastasundar.com/incom/images/product/thumb/Fiama-Men-Refreshing-Pulse-Gel-Bar-Buy-3-Get-1-Free-1560510376-10018051-1.jpg",
        price: 83
    },
    {
        name: "Nivea Creme Soft Soap (Save Rs 8)",
        img: "https://res.sastasundar.com/incom/images/product/thumb/Nivea-Creme-Soft-Soap-Save-Rs-8-1604657852-10020356-1.jpg",
        price: 95
    },
    {
        name: "Shahnaz Husain Shalife Plus Skin Nourishing P...",
        img: "https://res.sastasundar.com/incom/images/product/thumb/SHAHNAZ-SHALIFE-PLUS-SKIN-NOURISHING-PROGRAM-1432217291-10019307.jpg",
        price: 299
    },
    {
        name: "Lotus Herbals Teatreewash Tea Tree & Cinnamon...",
        img: "https://res.sastasundar.com/incom/images/product/thumb/LOTUS-TEATREEWASH-1440741688-10008791.jpg",
        price: 156
    },
    {
        name: "Garnier Pure Active Neem Face Wash",
        img: "https://res.sastasundar.com/incom/images/product/thumb/Garnier-Pure-Active-Neem-Face-Wash-1591861468-10006858-1.jpg",
        price: 234
    }

]

let feature_parent = document.getElementById("feature")

function feature_showProducts() {

    feature_data.forEach(function (products) {

        let div = document.createElement("div")
        let div_img = document.createElement("div")
        div_img.setAttribute("class", "pro_img")
        let img = document.createElement("img")
        img.src = products.img

        let products_name = document.createElement("p")
        products_name.textContent = products.name

        let div_det = document.createElement("div")
        div_det.setAttribute("class", "pro_det")
        let products_price = document.createElement("p")
        products_price.textContent = products.price
        let add_to_cart = document.createElement("button")
        add_to_cart.textContent = "Add"
        add_to_cart.onclick = function () {
            add_feature_cart(products)
        }


        div_img.append(img)
        div_det.append(products_price,add_to_cart)

        div.append(div_img,products_name,div_det)
        feature_parent.append(div)

    })
}

feature_showProducts()

if (localStorage.getItem("cart")===null) {
    localStorage.setItem("cart",JSON.stringify([]))
}

function add_feature_cart(products) {
    let products_carts = JSON.parse(localStorage.getItem("cart"))
    products_carts.push(products)
    localStorage.setItem("cart",JSON.stringify(products_carts))
}





// sliding for div for products
var left = 0;
var right = 4;
function show() {

    for (let i = left; i <= right; i++) {
        // document.getElementById("c" + i).style.display = "block"
        document.querySelectorAll("#pro>div")[i].style.display = "block"
    }
}
function moveleft() {
    if (left > 0) {

        left--
        for (let i = left; i <= right; i++) {
            document.querySelectorAll("#pro>div")[right].style.display = "none"
            document.querySelectorAll("#pro>div")[left].style.display = "block"
        }
        right--
    }
    else {
        return
    }
}
function moveright() {
    if (right < (document.querySelectorAll("#pro>div").length) - 1) {

        right++
        for (let i = left; i <= right; i++) {
            // document.getElementById("c" + left).style.display = "none"
            document.querySelectorAll("#pro>div")[left].style.display = "none"
            // document.getElementById("c" + right).style.display = "block"
            document.querySelectorAll("#pro>div")[right].style.display = "block"
        }
        left++
    }
    else {
        return
    }
}


// sliding for div for products
var left2 = 0;
var right2 = 4;
function show1() {

    for (let i = left2; i <= right2; i++) {
        // document.getElementById("c" + i).style.display = "block"
        document.querySelectorAll("#feature>div")[i].style.display = "block"
    }
}
function moveleft1() {
    if (left2 > 0) {

        left2--
        for (let i = left2; i <= right2; i++) {
            document.querySelectorAll("#feature>div")[right2].style.display = "none"
            document.querySelectorAll("#feature>div")[left2].style.display = "block"
        }
        right2--
    }
    else {
        return
    }
}
function moveright1() {
    if (right2 < (document.querySelectorAll("#feature>div").length) - 1) {

        right2++
        for (let i = left2; i <= right2; i++) {
            // document.getElementById("c" + left2).style.display = "none"
            document.querySelectorAll("#feature>div")[left2].style.display = "none"
            // document.getElementById("c" + right2).style.display = "block"
            document.querySelectorAll("#feature>div")[right2].style.display = "block"
        }
        left2++
    }
    else {
        return
    }
}

