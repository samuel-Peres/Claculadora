
let button_input = document.querySelectorAll(".input-button");
let input = document.getElementById("input");
let ingual = document.getElementById("ingual");
let clear = document.getElementById("clear");
let erase = document.getElementById("apagar");

window.onload = () => {
  input.value = "0"
};

button_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if(input.value === "0"){
      input.value = "";
    };
    input.value += button_class.value
  });
});

ingual.addEventListener("click", () => {
  let inp_val = input.value;
  try {
    let solucao = eval(inp_val);
    if (Number.isInteger(solucao)) {
      input.value = solucao;
    } else {
      input.value = solucao.toFixed(2);
    }; 
  } catch (err) {
    alert("invalido")
  };
});

clear.addEventListener("click", () => {
  input.value = "0";
});

erase.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
  if(input.value.substr(0, input.value.length - 1) < 1) {
    input.value = "0"
  }
});
    