let form=document.getElementById("form")
form.addEventListener("submit",(e)=>{
e.preventDefault()
let inputValue=document.getElementById("inputValue").value
let randomNum=Math.floor(Math.random()*10)+1;
if(inputValue==randomNum){
    alert(`Congrats! You guussed the correct Number...random number was ${randomNum}`)
}else if(inputValue>randomNum){
    alert(`Wrong! Select a Smaller Number...random number was ${randomNum}`)
}else if(inputValue<randomNum){
    alert(`Wrong!Select a Greater Number...random number was ${randomNum}`)
}else{
    alert("you lost")
}
})















