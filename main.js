const numbers = document.querySelectorAll(".numbers");
const display = document.querySelector(".display");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clearbutton");
const dot = document.querySelector(".dot");
const SCREEN_SIZE = 13;


//======================================================================
//  Adds event listener to each button (includes numbers and operators)
//======================================================================

for(let i = 0; i < numbers.length; i++) {
	if (display.textContent.length === 13) {
		break;
	}
	numbers[i].addEventListener("mousedown", function() {

		this.classList.toggle("buttonclick");


		if(display.textContent === "0") {
			display.textContent = '';
		}

		if(display.textContent.length <= SCREEN_SIZE) {        // Limits input size to screen size 13
			display.textContent += this.textContent;	
		}
		
	});

	numbers[i].addEventListener("mouseup", function() {
		this.classList.toggle("buttonclick");
	});
}

//===========================================
// 		Event Listener for the C button
//===========================================

clear.addEventListener("mousedown", () => {
	clear.classList.add("buttonclick");
	reset();
});

clear.addEventListener("mouseup", () => {
	clear.classList.remove("buttonclick")
});


//===========================================
// Event Listener for the equal button
//===========================================

equals.addEventListener("mousedown", function() {
	let displayContent = display.textContent;
	let re = /([\d]+\.{0,1}[\d]*)([+-/x])([\d]+\.{0,1}[\d]*)/;
	let arr = re.exec(displayContent);
	let firstNum = arr[1]; 
	let secondNum = arr[3];
	let op = arr[2];
	display.textContent = calculate(firstNum, secondNum, op);
	
});


//===================================
// Decimal place functionality
//===================================

dot.addEventListener("mousedown", function() {
	
	let displayContent = display.textContent.split(/[0-9]/);
	console.log(displayContent);
	this.classList.add("buttonclick");
	if(!displayContent.includes(".")) {
		display.textContent += this.textContent;
	}
});

dot.addEventListener("mouseup", function() {
	this.classList.remove("buttonclick");
})

//=====================================


// TODO

  // ADD Keyboard Functionality

  // Add Syntax error functionality

  // Add display Limit and overflow

 	// Added display point limit of 13 on calculations ****

 	// Add User input limitation - User can now input more digits than screen size  ****

  // Add Decimal Point functionality
     
     // Add decimal point calculations

     // Add multiple decimal points syntax error or stop multiple dots entry

  // Add syntax error when equality is pressed multiple times

  // Stop operator input when last Char entered is an operator




// ===============  FUNCTIONS =================================

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

	if(display.length > SCREEN_SIZE) {
		display = Number(display).toFixed(SCREEN_SIZE);	
	}
	
	return display;
}


// Reset function when clear button is clicked
function reset() {
	display.textContent = '0';
}