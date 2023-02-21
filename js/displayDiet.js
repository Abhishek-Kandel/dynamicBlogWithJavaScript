import { tableHeading } from "./allData.js";
import { deleteDiet } from "./deleteDiet.js";
import { getFromLocalStorage } from "./dietHelperMethods.js";

export function displayDiet() {
  let fd = getFromLocalStorage();
  if (typeof fd !== undefined) {
    document.querySelectorAll("table tbody tr").forEach(function (e) {
      e.remove();
    });
    var table = document.getElementById("table1");
    table.innerHTML += tableHeading;

    for (let i = 0; i < fd.length; i++) {
      var row = table.insertRow(-1);
      let j = 0;
      for (let key in fd[i]) {
        row.insertCell(j++).innerHTML = fd[i][key];
      }

      const deleteButton = document.createElement("button");
      deleteButton.type = "button";
      deleteButton.textContent = "Delete";
      deleteButton.setAttribute("id", fd[i]["uid"]);
      const lastCell = row.insertCell(j++);
      lastCell.appendChild(deleteButton);
    }

    const tableButtons = document.querySelector("table");
    tableButtons.addEventListener("click", deleteDiet);
  } else {
    alert("No data has been stored in localStorage");
  }
}
