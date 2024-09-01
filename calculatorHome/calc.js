const upperCalc = document.querySelector('.upperCalc');
const buttons = document.querySelectorAll('.buttonInp');
const clearing = document.querySelector('.clear')
const equal = document.querySelector('.equal')
let input = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;
    if (value === 'C') {
      getClear()
    } else if (value !== '=') {
      input += value;
      upperCalc.value = input;
    }
  });
});

equal.addEventListener('click', () => {
  upperCalc.value = eval(upperCalc.value);
});

clearing.addEventListener("click", getClear)

function getClear() {
  input = '';
  upperCalc.value = ''
}