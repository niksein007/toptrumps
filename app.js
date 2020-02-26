class Cards {
    constructor(name) {
        this._name = name;
        this._first =[];
        this._second =[];
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
    get first(){
        return this._first
    }

    get second(){
        return this._second
    }

    set name(name){
        this._name = name;
    }


//methods
// schuffling the cards
scatter (arr){
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

//split card[]
split(){
    let x =this.scatter(this._card);
    this._first = x.slice(0,15);
    this._second = x.slice(15);

}

   cardHeight (num){
       return this._card[num].height;
   }
   firstCardHeight(num){
    return this._first[num].height;

   }
   secondCardHeight(num){
    return this._second[num].height;

   }


   cardName (num){
    return this._card[num].name;
}
//this retuns an object in the card[] 
cardIndex (num){
    return this._card[num];
}

//the brain behind the game

logic(num){
    if (this.firstCardHeight(num) > this.secondCardHeight(num)) {
        return `first`
    } else {
        return `second`
    }{
        
    }
    
}

}

person = new Cards("person");
// console.log(person.name);
// person.name = "johnson";
// console.log(person.name);

// console.log(person.cardHeight(1));
// console.log(person.cardIndex(1));
// console.log(person.scatter(person._card))
// console.log(person.cardHeight(2));
console.log(person.split())
console.log(person.first.length);
console.log(person.second.length);
// console.log(person.firstCardHeight(0));
// console.log(person.secondCardHeight(0));
console.log(person.logic(0));
