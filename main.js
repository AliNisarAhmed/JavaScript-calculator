const numbers = document.querySelectorAll(".numbers");
const display = document.querySelector(".display");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clearbutton");
const dot = document.querySelector(".dot");

//  Adds event listener to each button (includes numbers and operators)

for(let i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener("mousedown", function() {

		this.classList.toggle("buttonclick");


		if(display.textContent === "0") {
			display.textContent = '';
		}
		display.textContent += this.textContent;
	});

	numbers[i].addEventListener("mouseup", function() {
		this.classList.toggle("buttonclick");
	});
}


// This function calculates when equal button is clicked
function calculate(firstnum, secondnum, op) {
	let display;
	if(op === "+") {
		display = String(Number(firstnum) + Number(secondnum));
	} else if (op === "-") {
		display = String(Number(firstnum) - Number(secondnum));
	} else if (op === "x") {
		display = String(Number(firstnum) * Number(secondnum));
	} else {
		display = String(Number(firstnum) / Number(secondnum));
	}

	return display;
}


// Reset function when clear button is clicked
function reset() {
	display.textContent = '0';
}

// Event Listener for the C button
clear.addEventListener("mousedown", () => {
	clear.classList.add("buttonclick");
	reset();
});

clear.addEventListener("mouseup", () => {
	clear.classList.remove("buttonclick")
});


// Event Listener for the equal button
equals.addEventListener("mousedown", function() {
	let displayContent = display.textContent;
	let re = /([\d]+\.*[\d]*)([+-/x])([\d]+\.*[\d]*)/;
	let arr = re.exec(displayContent);
	console.log(arr);
	let firstNum = arr[1]; 
	let secondNum = arr[3];
	let op = arr[2];
	display.textContent = calculate(firstNum, secondNum, op);
	console.log(display.textContent);
});


//===================================
// Decimal place functionality
//===================================

dot.addEventListener("mousedown", function() {
	let displayContent = display.textContent;
	this.classList.add("buttonclick");
	if(displayContent[displayContent.length - 1] === ".") {

	} else {
		display.textContent += this.textContent;
	}
});

dot.addEventListener("mouseup", function() {
	this.classList.remove("buttonclick");
})

//=====================================


// TODO

  // Add Syntax error functionality

  // Add display Limit and overflow

  // Add Decimal Point functionality
     
     // Add decimal point calculations

     // Add multiple decimal points syntax error

  // Add syntax error when equality is pressed multiple times