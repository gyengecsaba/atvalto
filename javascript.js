let select_from = document.querySelector("#select-from");
let select_to = document.querySelector("#select-to");
let input_from = document.querySelector(".input-from");
let input_to = document.querySelector(".input-to");

select_from.onchange = () => {
  updateResult();
};

select_to.onchange = () => {
  reverseResult();
};

input_from.oninput = () => {
  updateResult();
};

input_to.oninput = () => {
  reverseResult();
};

let updateResult = () => {
  input_to.value = Number(
    parseInt(input_from.value, select_from.value)
  ).toString(select_to.value);
};

let reverseResult = () => {
  input_from.value = Number(parseInt(input_to.value, select_to.value)).toString(
    select_from.value
  );
};

updateResult();
