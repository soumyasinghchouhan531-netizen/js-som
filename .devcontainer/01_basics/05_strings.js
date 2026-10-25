// STRINGS METHOD 

// 1. you can count the number of letter using .length

let text = "soumya"
console.log(text.length);

//2. you can know the position of the character using charAT();

// it count letters from 0 

console.log(text.charAt(0));

let newtext = "i am doing coding"  // it count spaces also
console.log(newtext.charAt(5));


//3. you can upper case your character using topUpperCase()
console.log(text.toUpperCase());

//4. you can lowercase your character using toLowerCase()
console.log(text.toLowerCase());

//5. you can know the latter coming at which position using indexOf()

console.log(text.indexOf("u")); // counting it from 0 

//6. it show the latter according to there position
let world = "avenger end game";
let part = world.slice(3,11);
console.log(part);

//7. in this the last value will not included using substring()
let partu = world.substring(5,10);
console.log(partu);

let party = world.substr(2,5);
console.log(party);



