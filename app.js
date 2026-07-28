let slides = [
    {
        img: "slider1.jpg",
        title: "First Slide",
        text: "Some representative placeholder content for the first slide."
    },
    {
        img: "slider2.jpg",
        title: "Second Slide",
        text: "Some representative placeholder content for the second slide."
    },
    {
        img: "pexels.jpg",
        title: "Third Slide",
        text: "Some representative placeholder content for the third slide."
    },
    {
        img: "pexels1.jpg",
        title: "Fourth Slide",
        text: "Some representative placeholder content for the fourth slide."
    }
];

let index = 0;

let font1 = document.getElementById("font1");
let font2 = document.getElementById("font2");
let imgchng = document.getElementById("imgchng");
let h1chng = document.getElementById("h1chng");
let pchng = document.getElementById("pchng");

function showSlide() {
    imgchng.src = slides[index].img;
    h1chng.innerHTML = slides[index].title;
    pchng.innerHTML = slides[index].text;
}

// Next Button
function nextSlide() {

    index++;

    if (index >= slides.length) {
        index = 0;
    }

    showSlide();
};

// Previous Button
font2.addEventListener("click", nextSlide);

font1.addEventListener("click", function () {
    index--;

    if (index < 0) {
        index = slides.length - 1;
    }

    showSlide();
});
setInterval(nextSlide, 3000)

showSlide();




//////////form////////////////
let name = document.getElementById("name");
let password = document.getElementById("password");
let email = document.getElementById("email");
let male = document.getElementById("male");
let female = document.getElementById("female");
let select = document.getElementById("select");
let upload = document.getElementById("address");
let detail = document.getElementById("detail");
let submit = document.getElementById("submit");

submit.addEventListener("click", function () {
    if (name.value.trim() === "") {
        document.getElementById("nameerror").innerHTML = "Enter your name";
        return;
    } else {
        document.getElementById("nameerror").innerHTML = "";
    }
    if (password.value.trim() === "") {
        document.getElementById("passerror").innerHTML = "Enter your password";
        return;

    } else if (password.value.length < 8) {
        document.getElementById("passerror").innerHTML = "Enter at least 8 character";
        return;
    }

    else {
        document.getElementById("passerror").innerHTML = "";
    }

})