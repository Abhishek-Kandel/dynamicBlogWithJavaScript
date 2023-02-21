import { displayDiet } from "./displayDiet.js";
import { addToLocalStorage, getFromLocalStorage } from "./dietHelperMethods.js";

export function submitDiet(event) {
  event.preventDefault();
  const food = getFromLocalStorage();
  if (typeof fd !== undefined) {
    const formData = new FormData(event.target);
    const temp1 = Object.fromEntries(formData.entries());
    const temp = { uid: Date.now(), ...temp1 };
    food.push(temp);
    addToLocalStorage(food);
    displayDiet();
  } else {
    alert("No data has been stored in localStorage");
  }
}
