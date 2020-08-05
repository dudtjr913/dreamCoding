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
  i.id = `${id}`;
  shoppingUL.addEventListener("click", (a) => {
    if (a.target.nodeName === "I" && a.target.id === `${id}`) {
      shoppingUL.removeChild(li);
      const filterList = SHOPPING_LIST.filter((ele) => {
        return ele.id !== parseInt(li.id);
      });
      SHOPPING_LIST = filterList;
      saveShoppingList();
    }
  });
  //i.addEventListener("click", removeShoppingList);
  shoppingUL.appendChild(li);
  li.id = id;
  li.scrollIntoView();
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

const handleShoppingSubmit = function () {
  const value = shoppingInput.value;
  if (!value) {
    shoppingInput.focus();
    return;
  }
  paintShopping(value);
  shoppingInput.value = "";
  shoppingInput.focus();
};

const saveShoppingList = function () {
  localStorage.setItem(SHOPPING_KEY, JSON.stringify(SHOPPING_LIST));
};

function run() {
  SubmitShoppingList();
  shoppingInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      return handleShoppingSubmit();
    }
  });
  shoppingBtn.addEventListener("click", handleShoppingSubmit);
}
run();
