class Cards {
    constructor(name) {
        this._name = name;
        this._card =[
            {name:"one", height:1},
            {name:"two", height:2},
            {name:"three",height:3},
            {name:"four", height:4},
            {name:"five", height:5},
            {name:"six", height:6},
            {name:"seven", height:7},
            {name:"eight", height:8},
            {name:"nine", height:9},
            {name:"ten", height:10},
            {name:"eleven", height:11},
            {name:"tweleve", height:12},
            {name:"thirteen", height:13},
            {name:"fourteen", height:14},
            {name:"fifteen", height:15},
            {name:"sixteen", height:16},
            {name:"seventeen", height:17},
            {name:"eighteen", height:18},
            {name:"nineteen", height:19},
            {name:"twenty", height:20},
            {name:"twenty_one", height:21},
            {name:"twenty_two", height:22},
            {name:"twenty_three", height:23},
            {name:"twenty_four", height:24},
            {name:"twenty_five", height:25},
            {name:"twenty_six", height:26},
            {name:"twenty_seven", height:27},
            {name:"twenty_eight", height:28},
            {name:"twenty_nine", height:29},
            {name:"thirty", height:30}
        ]
            
    }
    get name() {
        return this._name;  
    }
get card(){
    return this._card
}

    set name(name){
        this._name = name;
    }


//methods
scatter = ()=>{
    let arr = [];
    let repeat =[];
    //generate random number between 1 and 30
  let ranNum = null; 
  // use for loops to reshuffle the objects in the card[]
  while (arr.length <= 29){
    ranNum = Math.round( (Math.random() * 29));
   
   for (let i = 0; i <= repeat.length; i++) {
       if (repeat[i] == ranNum){continue;}
   
    repeat.push(ranNum);
    arr.push(this.cardIndex(ranNum));
   } 
  }
  return repeat;
  
}

   cardHeight = (num)=>{
       return this._card[num].height;
   }
  
   cardName = (num)=>{
    return this._card[num].name;
}
//this retuns an object in the card[] which is in the construtor
cardIndex = (num)=>{
    return this._card[num];
}
}

person = new Cards("person");
// console.log(person.name);
// person.name = "johnson";
// console.log(person.name);

// console.log(person.cardHeight(1));
// console.log(person.cardIndex(1));
console.log(person.scatter())
// console.log(person.card);