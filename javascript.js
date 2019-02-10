// Question:1

function Person() {
  this.height = "180cm";
  this.weight = "70kg";
}
Person.prototype.Prop = function() {
  console.log("Qu1:- I am a person and my height is " + this.height + " and my weight is " + this.weight);
};

var Ram = new Person();
Ram.Prop();

// Question:2

var numbers = [1,2,3,4,5,6,7,8,9,10];
console.log("Qu2:-" + numbers[4]);

// Question:3

var numbers = [1,2,3,4,5,6,7,8,9,10];
numbers.pop();
console.log("Qu3:-" +numbers);

// Question:4

var paragraph = "Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.";

var str1 = "banana";
var str2 = "bananas";
var newParagraph1 = paragraph.replace(/strawberry/g , str1);
var newParagraph2 = newParagraph1.replace(/strawberries/g , str2);
console.log("Qu4:-" +newParagraph2);

// Question:5

var footballClubNames = ["Addicks", "Blades", "Cobblers", "Glovers"];
console.log("Four football club names are: " + footballClubNames )
removeClubNames.addEventListener('click', function() {

      footballClubNames = [];

      console.log("Qu5a:- Length of football club array is " + footballClubNames.length );


      footballClubNames.push("Volvo");
      footballClubNames.push("Hyundai");
      footballClubNames.push("Toyota");
      footballClubNames.push("Honda");

      console.log("Qu5b:- Newly Car names added to the same array: " + footballClubNames);
  }
);

// Question:6
var peoples = [
{name: 'John', age: '25 Years', gender: 'Male'},
{name: 'Eva', age: '28 Years', gender: 'Female'},
{name: 'Richard', age: '30 Years', gender: 'Male'},
]

var peopleName = peoples.filter(function(name){
return (name.name === "Richard");
})

console.log("Qu6:-" + peopleName);

// Question:7

var todayDate = new Date();
console.log("Qu7:-" +todayDate);
