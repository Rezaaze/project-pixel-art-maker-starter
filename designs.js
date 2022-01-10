// Select the HTML elements and storing them in variables

const color = document.getElementById("colorPicker");
const sendBtn = document.getElementById("send-btn");

// preventing submit btn from trying to send the form and using makegrid function instead
sendBtn.addEventListener("click", e => {
    e.preventDefault();
    makeGrid(heightPick,widthPick);
    
})

const table = document.getElementById("pixelCanvas");

table.addEventListener('click', e => {
    e.target.style.backgroundColor = colorPick;
})

let colorPick = "black"; 
color.addEventListener("change", e => colorPick= e.target.value);




// Select size input

const height = document.getElementById("inputHeight");
let heightPick;
height.addEventListener("change", e => heightPick = e.target.value)
const width = document.getElementById("inputWidth");
let widthPick;
width.addEventListener("change", e => widthPick = e.target.value)

// When size is submitted by the user, call makeGrid()

function makeGrid(heightPick,widthPick) {
    table.innerHTML = "";
// Your code goes here!
    for(let i = 1;i <= heightPick;i++){
        let row = document.createElement("tr")
        
        for (let j = 1 ;j <= widthPick;j++){
            let col = document.createElement("td");
            row.appendChild(col);
    }
        table.appendChild(row);
}   
    

}
