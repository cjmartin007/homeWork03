
 
const number1 = [1,2,3,4,5,6,7,8,9,0];

const number2 = [1,2,3,4,5,6,7,8,9,0,21,75,94];

const number3 = [1,2,3,4,5,6,7,8,9,0,19,32,74,01];

const number4 = [1,2,3,4,5,6,7,8,9,0,05,13,90,11];
 
 const lower1 = ['a','b','c','f','g','h','i','j','k',
 'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
 
 const lower2 = ['a','b','c','d','e','f','g','h','i','j','k',
  'l','m','n','o','p','q','r','s','t','y','z'];
 
  const lower3 = ['a','b','c','d','e','f','g','h','i','m','n',
  'o','p','q','r','s','t','u','v','w','x','y','z'];
 
 const lower4 = ['a','b','c','d','e','f','g','h','i','j','k',
  'l','m','n','o','p','q','r','s','y','z'];
 
 const upper1 = ['A','F','G','H','I','J','K',
 'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
 
 const upper2 = ['A','B','C','D','E','F','L','M','N','O','P',
 'Q','R','S','T','U','V','W','X','Y','Z'];

  const upper3 = ['A','B','C','D','E','F','G','H','I','J','K',
 'L','M','N','O','P','Q','R','S','T'];
 
 const upper4 = ['A','B','C','D','E','F','G','H','I','J','K',
  'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

 const symbols1 = [,'$','%','^','&','*', '-','_','=','+','|','`','~'];
 const symbols2 = ['!','@','#','&','*', '-','_','=','+','|','`','~'];
 const symbols3 = ['!','@','#','$','%','^','_','=','+','|','`','~'];
 const symbols4 = ['!','@','#','$','%','^','&','*', '-','_','=','+','|','`','~'];

function generateButton() {
 const v1 = getRandom(lower1);
 const v2 = getRandom(lower2);
 const v3 = getRandom(lower3);
 const v4 = getRandom(lower4);
 const v5 = getRandom(number1);
 const v6 = getRandom(number2);
 const v7 = getRandom(number3);
 const v8 = getRandom(number4);
 const v9 = getRandom(upper1);
 const v10 = getRandom(upper2);
 const v11 = getRandom(upper3);
 const v12 = getRandom(upper4);
 const v13 = getRandom(symbols1);
 const v14 = getRandom(symbols2);
 const v15 = getRandom(symbols3);
 const v16 = getRandom(symbols4);
 const catToy = [v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12,v13,v14,v15,v16];
const pw = `${getRandom(catToy)}
${getRandom(catToy)}
${getRandom(catToy)}
${getRandom(catToy)}
${getRandom(catToy)}
${getRandom(catToy)}
${getRandom(catToy)}
${getRandom(catToy)}
${getRandom(catToy)}
${getRandom(catToy)}
${getRandom(catToy)}
${getRandom(catToy)}
${getRandom(catToy)}
${getRandom(catToy)}
`;
$("pwd").value = pw;
console.log('random password', pw);
};

function getRandom(arr) {
    const num = Math.floor(Math.random() * arr.length);
    const element = arr[num];
    return element;
};
 const $ = (elm)=>{ 
     return document.getElementById(elm); 
    }