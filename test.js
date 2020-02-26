// let ranNum = null;
// let arr =[];
// let hold =[0];
// while (arr.length <= 9){
//     ranNum = Math.floor( (Math.random() * 10) + 1 );
//     for (let i = 0; i <= hold.length; i++) {
//     if (hold[i] == ranNum) {
//         continue;
//     }else{
//         hold.push(ranNum);
//     arr.push(ranNum);
//     }
        
//     }
// }
   
// console.log(arr);
const arr = [1,2,3,4,5,3,4,3,2,22,333,22,33,55,66];
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
console.log(shuffle(arr));