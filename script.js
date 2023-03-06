// Fonctionnalité 1 + Fonctionnalité 1-bis :
let compteur = 0
let eFooter = document.querySelector("footer");
eFooter.addEventListener('click', function(){
    compteur++
    console.log('clic numero ' + compteur)
})
//fonctionnalité 2 
let HamburgerMenu = document.getElementsByClassName("navbar-toggler")[0];
let navbarHeader = document.getElementById("navbarHeader");

HamburgerMenu.addEventListener('click', function(){
    navbarHeader.classList.toggle("collapse")
})

//fonctionnalité 3
let firstCard = document.getElementsByClassName("card")[0]
let editFirstCard = firstCard.getElementsByTagName("button")[1]

editFirstCard.addEventListener('click', function(){
    firstCard.getElementsByClassName("card-text")[0].style.color = 'red';
})

//fonctionnalité 4 
let secondCard = document.getElementsByClassName("card")[1]
let editSecondCard = secondCard.getElementsByTagName("button")[1]

editSecondCard.addEventListener('click', function(){
    if (secondCard.getElementsByClassName("card-text")[0].style.color === 'green'){
        secondCard.getElementsByClassName("card-text")[0].style.color = 'black' ;
        }
    else  {secondCard.getElementsByClassName("card-text")[0].style.color = 'green'}
})

// Fonctionnalité 5 :
let navBar = document.getElementsByTagName("header")[0]
let bootstrap = document.getElementsByTagName("link")[0]

navBar.addEventListener('dblclick', function(){
    if (bootstrap.href === "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css") {
        bootstrap.href = '';
    }
    else {
        bootstrap.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    }
});

