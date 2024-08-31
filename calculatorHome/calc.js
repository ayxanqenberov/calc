const upperCalc = document.querySelector('.upperCalc');
const buttons = document.querySelectorAll('.buttonInp');
const clearing = document.querySelector('.clear')
const equal = document.querySelector('.equal')
let expression = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;
    if (value === '=') {
      try {
        expression == upperCalc.value
      } catch (error) {
        upperCalc.value = 'Error';
        expression = '';
      }
    }else if (value == 'C') {
      getClear()
    } else {
      expression += value;
      upperCalc.value = expression;
    }
  });
});
clearing.addEventListener("click",getClear)
function getClear(){
  expression = '';
  upperCalc.value = ''
}
equal.addEventListener("click", getResult)

function getResult(){
}