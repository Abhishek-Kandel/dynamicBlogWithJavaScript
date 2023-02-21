export function getFromLocalStorage() {
  const food = JSON.parse(window.localStorage.getItem("meals"));
  return food;
}
export function addToLocalStorage(diet) {
  window.localStorage.setItem("meals", JSON.stringify(diet));
}
