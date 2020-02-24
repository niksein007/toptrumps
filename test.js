let ranNum = null;
let arr =[];
let hold =[0];
while (arr.length <= 9){
    ranNum = Math.floor( (Math.random() * 10) + 1 );
    for (let i = 0; i <= hold.length; i++) {
    if (hold[i] == ranNum) {
        continue;
    }else{
        hold.push(ranNum);
    arr.push(ranNum);
    }
        
    }
}
   
console.log(arr);