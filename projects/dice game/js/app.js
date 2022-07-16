let rasm = document.getElementById('img_Backgammon');

let rpls = 0;
let lpls = 0;

let rightPL = document.getElementById('rps');
let leftPL = document.getElementById('lps');

let left_fon = document.getElementById('left_fon');
let right_fon = document.getElementById('right_fon');

let accountL = document.getElementById('accountLeft');
let accountR = document.getElementById('accountRight');

let red_L = document.querySelector('.left_red');
let red_R = document.querySelector('.right_red');


accountL.innerHTML = lpls;
accountR.innerHTML = rpls;

let sts = 'p1';

function changeBackgammon(){
    let backgammon = Math.floor(Math.random()*6)+1;
    rasm.src= 'images/dice-' + backgammon + '.png';
  
  
  if(backgammon == 1 && sts == 'p1'){
    sts = 'p2';
  }
  else if(backgammon == 1 && sts == 'p2'){
    sts = 'p1';
  }
  if(sts == 'p1' && backgammon !== 1){
    lpls += backgammon;
    accountL.innerHTML = lpls;
  }
  else if(sts == 'p2' && backgammon !== 1){
    rpls += backgammon;
    accountR.innerHTML = rpls;
  }
  if(sts == 'p1' && backgammon !== 1){
    leftPL.innerHTML = backgammon;
    left_fon.style.backgroundColor = 'rgb(218, 226, 220)';
    right_fon.style.backgroundColor = 'white';
    red_L.style.backgroundColor = 'red';
    red_R.style.backgroundColor = 'white'
  }
  else if(sts == 'p2' && backgammon !== 1){
    rightPL.innerHTML = backgammon;
    right_fon.style.backgroundColor = 'rgb(218, 226, 220)';
    left_fon.style.backgroundColor = 'white';
    red_R.style.backgroundColor = 'red';
    red_L.style.backgroundColor = 'white'
  }
}
function newGame(){
  location.reload(true);
}
