import { submitDiet } from "./submitDiet.js";
import { displayDiet } from "./displayDiet.js";
import { displayBlogs } from "./displayBlog.js";

displayBlogs();

var form = document.getElementById("aform");
form.addEventListener("submit", submitDiet);
displayDiet();

//for putting data into the localstorage initially
// const fd = [];

// const a = {
//   uid: Date.now(),
//   food: "rice",
//   quantity: "200gm",
//   carbs: "100gm",
//   protein: "11gm",
//   fat: "12gm",
//   calorie: "400",
// };
// fd.push(a);
// window.localStorage.clear();
// window.localStorage.setItem("meals", JSON.stringify(fd));

//<<<IMPORTANT>>>

//store const files data in one js file
//store business logic i.e functions in another file
//run loop to iterate table row and table column i.e. two for loops

//post in github after completion

//make delete button for each rows

//event delegation

//TODO
//rename functions, theTable etc
//use MVC model to structure the code
//use event delegation to avoid eventlistener in every row 'delete function'
//rename files, make functions short and clean
//define separate deleteRow function
//ask yogesh about how to use MVC
//add a button attribute --> uniqueID and use it for deleting row (use this keyword)
