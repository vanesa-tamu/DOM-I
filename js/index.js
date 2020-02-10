const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


const codesnippet = document.getElementById('middle-img');
codesnippet.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const circleImg = document.getElementById('cta-img');
circleImg.setAttribute('src', siteContent.cta["img-src"])

const nav = document.querySelectorAll('a'); //returns a nodelist 
console.log(nav)

nav[0].textContent = siteContent["nav"]["nav-item-1"];
nav[1].textContent = siteContent["nav"]["nav-item-2"];
nav[2].textContent = siteContent["nav"]["nav-item-3"];
nav[3].textContent = siteContent["nav"]["nav-item-4"];
nav[4].textContent = siteContent["nav"]["nav-item-5"];
nav[5].textContent = siteContent["nav"]["nav-item-6"];

nav.forEach((green) => {
  green.style.color = "green"
})

const FAQ = document.createElement('a')
FAQ.innerHTML = 'FAQ'

const Login = document.createElement('a')
Login.innerHTML = 'Login'

const navbar = document.querySelector('nav')
navbar.append(FAQ)
navbar.prepend(Login)


const h1Element = document.querySelector(".cta-text h1").innerHTML = "<h1>Dom <br> Is <br> Awesome!</h1>"
h1Element[0].textContent = siteContent ["cta"]["h1"];



const h4Element = document.querySelectorAll('h4');
h4Element[0].textContent = siteContent["main-content"] ["features-h4"];
h4Element[1].textContent = siteContent["main-content"] ["about-h4"];
h4Element[2].textContent = siteContent["main-content"] ["services-h4"];
h4Element[3].textContent = siteContent["main-content"] ["product-h4"];
h4Element[4].textContent = siteContent["main-content"] ["vision-h4"];
h4Element[5].textContent = siteContent["contact"] ["contact-h4"];


const paragraphs = document.querySelectorAll('p');
paragraphs [0].textContent = siteContent["main-content"] ["features-content"];
paragraphs [1].textContent = siteContent["main-content"] ["about-content"];
paragraphs [2].textContent = siteContent["main-content"] ["services-content"];
paragraphs [3].textContent = siteContent["main-content"] ["product-content"];
paragraphs [4].textContent = siteContent["main-content"] ["vision-content"];
paragraphs [5].textContent = siteContent["contact"] ["address"];
paragraphs [6].textContent = siteContent["contact"] ["phone"];
paragraphs [7].textContent = siteContent["contact"] ["email"];
paragraphs [8].textContent = siteContent["footer"] ["copyright"];

const button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"]