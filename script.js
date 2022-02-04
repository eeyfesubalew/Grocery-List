const itemText = document.querySelector(".item-text");
const itemBox = document.querySelector(".item");
const form = document.querySelector(".input");

const groceryList = function () {
  form.focus();
  form.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      console.log(form.value);
      const markup = `<p class="item-text">${form.value}</p>`;
      form.value = "";
      itemBox.insertAdjacentHTML("afterbegin", markup);
    }
  });
};
groceryList();
