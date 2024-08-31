const upperCalc = document.querySelector('.upperCalc');
const buttons = document.querySelectorAll('.buttonInp');
const clearing = document.querySelector('.clear')
const equal = document.querySelector('.equal')
let input = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;
    if (value === '=') {
      try {
        input = new Function('return ' + input)();
        upperCalc.textContent = input;
      } catch (error) {
        upperCalc.value = 'Error';
        input = '';
      }
      // if(upperCalc.includes("/")){
      //   return upperCalc.value[0] / upperCalc[1]
      // }
    }else if (value === 'C') {
      getClear()
    } else {
      input += value;
      upperCalc.value = input;
    }
  });
});
clearing.addEventListener("click",getClear)
function getClear(){
  input = '';
  upperCalc.value = ''
}
