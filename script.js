var num = 0;

function scrollProjects() {
    document.getElementById("projects").scrollIntoView({behavior: "smooth"});
}

function darkMode() {
    if(num % 2 == 0) {
        document.body.style.backgroundColor = "#121212";
        document.querySelector("h1").style.color = "white";
        document.querySelector("h2").style.color = "white";
        document.querySelector("h5").style.color = "white";
        document.getElementById("changeToo").style.color = "white";
        document.getElementById("changeToo2").style.color = "white";
        document.getElementById("changeToo3").style.color = "white";
        document.getElementById("changeToo4").style.backgroundColor = "black";
        document.getElementById("changeToo5").style.backgroundColor = "black";
        document.getElementById("changeToo6").style.backgroundColor = "black";
        document.getElementById("changeToo7").style.backgroundColor = "black";
        document.getElementById("changeToo8").style.backgroundColor = "black";
        document.querySelector("i").classList.toggle("fa-sun");
        document.querySelector("i").classList.toggle("fa-moon");
        document.querySelector("i").style.color = "yellow";
        document.querySelector("nav").classList.toggle("navbar-light");
        document.querySelector("nav").classList.toggle("navbar-dark");
        num++;
    }
    else {
        document.body.style.backgroundColor = "#fffff1";
        document.querySelector("h1").style.color = "black";
        document.querySelector("h2").style.color = "black";
        document.querySelector("h5").style.color = "black";
        document.getElementById("changeToo").style.color = "black";
        document.getElementById("changeToo2").style.color = "black";
        document.getElementById("changeToo3").style.color = "black";
        document.getElementById("changeToo4").style.backgroundColor = "white";
        document.getElementById("changeToo5").style.backgroundColor = "white";
        document.getElementById("changeToo6").style.backgroundColor = "white";
        document.getElementById("changeToo7").style.backgroundColor = "white";
        document.getElementById("changeToo8").style.backgroundColor = "white";
        document.querySelector("i").classList.toggle("fa-sun");
        document.querySelector("i").classList.toggle("fa-moon");
        document.querySelector("i").style.color = "black";
        document.querySelector("nav").classList.toggle("navbar-light");
        document.querySelector("nav").classList.toggle("navbar-dark");
        num++;
    }
}