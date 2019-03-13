function numerals(number){

  let romanStrg = [];
	//here are the possible roman numerals
	let romanNums = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
	//the equivalent decimals
	let decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	//check if decimal is smaller than the number, reduce the number by the decimal and push the equivalent roman character into the result array
  for (let i=0; i<decimals.length; i++ ){
   while (decimals[i]<=number){

     number = number - decimals[i];
     romanStrg.push(romanNums[i])
   }
  }
     return romanStrg.join('')
}


const inputNumber = document.querySelector('#numerals');
const form = document.querySelector('form')
let answer;

form.addEventListener('submit', event => {
	event.preventDefault();
	//run the numerals function
	answer = numerals(inputNumber.value);
	// print the input and output values
	const output = document.createElement("p");
	const outputNode = document.createTextNode(`${inputNumber.value} is ${answer}`);
	output.appendChild(outputNode);

	const elementOutput = document.querySelector(".output");
	elementOutput.appendChild(output);

})
