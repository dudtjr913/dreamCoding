const shoppingForm = document.querySelector(".jsPhoneForm");
const shoppingInput = document.querySelector(".jsPhoneInput");
const shoppingUL = document.querySelector(".jsUl");
const shoppingBtn = document.querySelector(".jsBtn");

const SHOPPING_KEY = "shopping";
let SHOPPING_LIST = [];

const paintShopping = function (list) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");
  const i = document.createElement("i");
  const id = SHOPPING_LIST.length + 1;
  li.appendChild(span);
  span.innerText = `${list}`;
  li.appendChild(btn);
  btn.appendChild(i);
  i.classList = "fas fa-trash-alt";
  i.addEventListener("click", removeShoppingList);
  shoppingUL.appendChild(li);
  li.id = id;
  const obj = {
    list,
    id,
  };
  SHOPPING_LIST.push(obj);
  saveShoppingList();
};

const SubmitShoppingList = function () {
  const shoppingList = localStorage.getItem(SHOPPING_KEY);
  if (shoppingList !== null) {
    parsedShoppingList = JSON.parse(shoppingList);
    parsedShoppingList.forEach((a) => paintShopping(a.list));
  }
};

const handleShoppingSubmit = function (event) {
  event.preventDefault();
  const value = shoppingInput.value;
  paintShopping(value);
  shoppingInput.value = "";
};

const saveShoppingList = function () {
  localStorage.setItem(SHOPPING_KEY, JSON.stringify(SHOPPING_LIST));
};

const removeShoppingList = function (event) {
  const delTarget = event.target.parentNode.parentNode;
  shoppingUL.removeChild(delTarget);
  const filterList = SHOPPING_LIST.filter((a) => {
    return a.id !== parseInt(delTarget.id);
  });
  SHOPPING_LIST = filterList;
  saveShoppingList();
};

function init() {
  SubmitShoppingList();
  shoppingForm.addEventListener("submit", handleShoppingSubmit);
}
init();
