


const score = document.querySelector("span")
const button = document.querySelector(".roll")
const h3 = document.querySelector("h3")
const resetButton = document.querySelector(".reset")


button.addEventListener("click", ()=>{
    const abc = Math.floor( Math.random() * 6+ 1)
    score.innerText = abc

    if(abc==6){
        h3.innerText = "You have won The Roll Dice Challenge"
        button.disabled= true
    }

})

resetButton.addEventListener("click" ,()=>{
    button.disabled=false
    score.innerText = 0
    h3.innerText = ""

})



console.log(abc)