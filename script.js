let n = prompt("n=");
// sum=0;
// for (let i=1;i<=n;i++){
//     document.write(i*i+" ")
//     sum+= i*i;
    
// }
// function sumx(n){
//  if (n<=1)return 1;
//  else {
//      return n+sumx(n-1);
//  }
// }
// let k=sumx(n)
// document.write(k);


function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
  alert( factorial(n) ); 