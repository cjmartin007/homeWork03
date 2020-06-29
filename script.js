

const length = 12;
 const number = ['1','2','3','4','5','6','7','8','9','0'];
 const lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
 const symbols = ['!','@','#','$','%','^','&'];
 const catToy = [number, lower, upper, symbols];
function generateButton( i=0; i < catToy.length; i++;) {
   
    let button = catToy.Math.floor(Math.random() *10) +1;
    
   
};
document.getElementById("pwd").innerText = button;