const decrementBtn = document.getElementById("decrement");
const incrementBtn = document.getElementById("increment");
const countEleement = document.getElementById("count");

let count = 0;

function updateCount() {
    countEleement.textContent=count;
}

decrementBtn.addEventListener("click", ()=>{
    count--;
    updateCount();
})

incrementBtn.addEventListener("click", ()=>{
    count++;
    updateCount();
})