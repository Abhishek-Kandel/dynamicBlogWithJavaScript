import { getFromLocalStorage, addToLocalStorage } from "./dietHelperMethods.js";

export function deleteDiet(event) {
  if (event.target.tagName === "BUTTON") {
    const food = getFromLocalStorage();
    const uniqueID = event.target.getAttribute("id");
    const td = event.target.parentNode;
    const tr = td.parentNode;
    tr.parentNode.removeChild(tr);
    for (let i = 0; i < food.length; i++) {
      for (let key in food[i]) {
        if (food[i] && Number(food[i]["uid"]) === Number(uniqueID)) {
          food.splice(i, 1);
        }
      }
    }
    addToLocalStorage(food);
  }
}
