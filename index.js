const buttonList = document.querySelectorAll(".btn");
const outputValue = document.querySelector(".calculatorOutput");
const clearButton = document.getElementById("clearBtn");
const equalButton = document.querySelector("#equalBtn");

const storeValue = [];
const storeOperator = [];
let verifyMe;

buttonList.forEach(function (button) {
  button.addEventListener("click", function btnClickHandler() {
    console.log(storeValue, storeOperator);
    verifyMe = true;
    // console.log(button.classList.contains("numberBtn"));
    if (button.classList.contains("numberBtn")) {
      const numberButtonValue = Number(button.textContent);
      outputValue.append(numberButtonValue);
      updateArray(Number(button.textContent));
    }

    if (button.classList.contains("operator")) {
      verifyMe = false;
      const operatorButtonValue = button.textContent;
      outputValue.append(operatorButtonValue);
      updateOperator(button.textContent);
    }
  });
});

equalButton.addEventListener("click", function equalBtnHandler() {
  console.log(outputValue.textContent.split(""));
});

function updateArray(numVal) {
  return storeValue.push(numVal);
  if (verifyMe) {
  }
}

function updateOperator(operatorVal) {
  storeOperator.push(operatorVal);
}
