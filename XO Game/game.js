let gameboard= document.querySelector(".game-board");
let playerx=document.querySelector(".player-x");
let playero=document.querySelector(".player-o");
  let tryx=0;
  let tryy=0;
function setdiv(value) {
  if (value==="X") {
    tryx+=1;
    playerx.innerHTML=`X wins-${tryx} Times`;
}
else if (value==="O") {
    tryy+=1;
    playero.innerHTML=`O wins-${tryy} Times`;}
  }
  let turns=0;

  function resetGameboard() {
    gameboard.innerHTML="";
    turns=0;
    createGameboard();
  }
function createGameboard() {
for(let j=0; j<3; j++){
  let row=document.createElement("div");
  row.classList.add("row");
  row.classList.add(`row-${j}`);
  gameboard.appendChild(row);
  for(let i=0; i<3; i++){
  
    let input=document.createElement("div");
    input.classList.add("input");
    input.classList.add(`input-${i}`);
    row.appendChild(input);

    input.addEventListener("click", function() {
      if(input.classList.contains("X") || input.classList.contains("O")){
        return;
      }  
let playerturn=(turns%2===0) ?"X":"O"

console.log(turns);
console.log(playerturn);
input.innerText=playerturn;
turns+=1;
input.classList.add(`${playerturn}`);
if(turns>4){
  let j=0;
  let row1=document.querySelector(`.row-${j}`);
  let input1=row1.querySelector(`.input-0`);
  let input2=row1.querySelector(`.input-1`);
  let input3=row1.querySelector(`.input-2`);
  let row2=document.querySelector(`.row-${j+1}`);
  let input4=row2.querySelector(`.input-0`);
  let input5=row2.querySelector(`.input-1`);
  let input6=row2.querySelector(`.input-2`);
  let row3=document.querySelector(`.row-${j+2}`);
  let input7=row3.querySelector(`.input-0`);
  let input8=row3.querySelector(`.input-1`);
  let input9=row3.querySelector(`.input-2`);
  if(input1.classList.contains(playerturn) && input2.classList.contains(playerturn) && input3.classList.contains(playerturn)){
    alert(`${playerturn} wins`);
    resetGameboard();
    setdiv(playerturn);

    return;}
  if(input4.classList.contains(playerturn) && input5.classList.contains(playerturn) && input6.classList.contains(playerturn)){
    alert(`${playerturn} wins`);
    resetGameboard();
    setdiv(playerturn);


    return;}
  if(input7.classList.contains(playerturn) && input8.classList.contains(playerturn) && input9.classList.contains(playerturn)){
    alert(`${playerturn} wins`);
    resetGameboard();
    setdiv(playerturn);


    return;}
  if(input1.classList.contains(playerturn) && input4.classList.contains(playerturn) && input7.classList.contains(playerturn)){
    alert(`${playerturn} wins`);
    resetGameboard();
    setdiv(playerturn);

    return;}
  if(input2.classList.contains(playerturn) && input5.classList.contains(playerturn) && input8.classList.contains(playerturn)){
    alert(`${playerturn} wins`);
    resetGameboard();
    setdiv(playerturn);

    return;}
  if(input3.classList.contains(playerturn) && input6.classList.contains(playerturn) && input9.classList.contains(playerturn)){
    alert(`${playerturn} wins`);
    resetGameboard();
    setdiv(playerturn);

    return;}
  if(input1.classList.contains(playerturn) && input5.classList.contains(playerturn) && input9.classList.contains(playerturn)){
    
    alert(`${playerturn} wins`);
    resetGameboard();
    setdiv(playerturn);

    return;}
    if(input3.classList.contains(playerturn) && input5.classList.contains(playerturn) && input7.classList.contains(playerturn)){
    
      alert(`${playerturn} wins`);
      resetGameboard();
      setdiv(playerturn);

      return;}
      if(input3.classList.contains(playerturn) && input5.classList.contains(playerturn) && input7.classList.contains(playerturn)){
    
        alert(`${playerturn} wins`);
        setdiv(playerturn);
        resetGameboard();
        return;
      }
      else if(turns===9){
        alert("Game is Draw");
        resetGameboard();
        return;
      }
    
}


})
}}}


window.onload=createGameboard();
let reset=document.querySelector(".reset");
reset.addEventListener("click", function() {
window.location.reload();
})

