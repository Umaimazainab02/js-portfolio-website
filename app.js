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
let address = document.getElementById("address");
let detail = document.getElementById("detail");
let submit = document.getElementById("submit");
let check = document.getElementById("check");
let file = document.getElementById("file");


submit.addEventListener("click", function () {
    if (name.value.trim() === "") {
        document.getElementById("nameerror").innerHTML = "Enter your name";
    } else {
        document.getElementById("nameerror").innerHTML = "";
    }
    if (password.value.trim() === "") {
        document.getElementById("passerror").innerHTML = "Enter your password";

    } else if (password.value.length < 8) {
        document.getElementById("passerror").innerHTML = "Enter at least 8 character";
    }

    else {
        document.getElementById("passerror").innerHTML = "";
    }


    if (!email.value.includes("@")) {
        document.getElementById("emailerror").innerHTML = "Email must contain @";
    }
    else {
        document.getElementById("emailerror").innerHTML = "";
    }
    if (select.value === "") {
        document.getElementById("selecterror").innerHTML = "please select a city";
    }
    else {
        document.getElementById("selecterror").innerHTML = "";
    }

    if (detail.value.trim() === "") {
        document.getElementById("detailerror").innerHTML = "Write a paragraph";
    }
    else {
        document.getElementById("detailerror").innerHTML = ""
    }
    if (address.value.trim() === "") {
        document.getElementById("addresserror").innerHTML = "Enter an address";
    }
    else {
        document.getElementById("addresserror").innerHTML = ""
    }

    if (!check.checked) {
        document.getElementById("checkerror").innerHTML = "Please accept the terms and conditions";
    } else {
        document.getElementById("checkerror").innerHTML = ""
    }

    if (file.files.length === 0) {
        document.getElementById("fileerror").innerHTML = "Please upload an image";
    }
    else {
        document.getElementById("fileerror").innerHTML = "";
    }


    if (
    name.value.trim() !== "" &&
    password.value.length >= 8 &&
    email.value.includes("@") &&
    select.value !== "" &&
    detail.value.trim() !== "" &&
    address.value.trim() !== "" &&
    check.checked &&
    file.files.length !== 0
) {
    document.getElementById("submiterror").innerHTML="Submit Successfully!";
}
})

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
});