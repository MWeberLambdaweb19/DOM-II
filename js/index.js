// Your code goes here
let mouseOverLink = document.querySelector('.nav');
mouseOverLink.addEventListener('mouseover', (event) => {
    event.target.classList.add('navSize');
});
mouseOverLink.addEventListener('mouseout', (event) => {
    event.target.classList.remove('navSize');
});

let buttonClick = document.querySelectorAll('.btn')[0];
buttonClick.addEventListener('click', () => {
    event.target.innerText = "Thank you!";
})
buttonClick.addEventListener('mouseout', () => {
    event.target.innerText = "Sign Me Up!";
})
let buttonClick1 = document.querySelectorAll('.btn')[1];
buttonClick1.addEventListener('click', () => {
    event.target.innerText = "Thank you!";
})
buttonClick1.addEventListener('mouseout', () => {
    event.target.innerText = "Sign Me Up!";
})
let buttonClick2 = document.querySelectorAll('.btn')[2];
buttonClick2.addEventListener('click', () => {
    event.target.innerText = "Thank you!";
})
buttonClick2.addEventListener('mouseout', () => {
    event.target.innerText = "Sign Me Up!";
})
let keyDownAlert = document.querySelector('body');
keyDownAlert.addEventListener('keydown', (event) =>{
    alert('Please be careful with keypresses!')
    event.preventDefault()
    console.log("No access to developer window through F12!")
})

let copyAlert = document.querySelector('body');
copyAlert.addEventListener('copy', () => {
    alert('Please do not copy our content!')
    event.preventDefault()
    console.log("No copying our content!")
})

let inspectAlert = document.querySelector('body');
inspectAlert.addEventListener('contextmenu', () => {
    alert('Please do not inspect our code!')
    event.preventDefault()
    console.log("I shouldn't be able to see this honestly.")
})

function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
}

function dragging(event) {
  document.getElementById("demo").innerHTML = "What side will you choose?";
}

function allowDrop(event) {
  event.preventDefault();
}

function drop1(event) {
  event.preventDefault();
  let data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
  document.getElementById("demo").innerHTML = "You chose the left side!";
}
function drop2(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("demo").innerHTML = "You chose the right side!";
  }