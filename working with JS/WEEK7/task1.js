const button = document.getElementById("btn");
const buttons = document.getElementById("btns");
const buttonx = document.getElementById("btnx");


const one =document.getElementById("one");
const two =document.getElementById("two");
const three =document.getElementById("three");

// one.style.display = "block"
// onebtn.classlist.add("active");



button.onclick = () => {
    two.style.display = "none"
    three.style.display = "none";
    one.style.display = "block";


    // one.classList.add("active");
    // one.classList.add("active");
    // one.classList.add("active");

};

buttons.onclick = () => {
    one.style.display = "none";
    two.style.display = "block";
};

buttonx.onclick = () => {
    two.style.display = "none";
     three.style.display = "block";
};