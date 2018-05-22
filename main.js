// Function declarations and TODO list at the end of the document.

const numbers = document.querySelectorAll(".numbers");
const ops = document.querySelectorAll(".op");
const display = document.querySelector(".display");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clearbutton");
const dot = document.querySelector(".dot");
const backspace	= document.querySelector(".backspace");
const SCREEN_SIZE = 13;


//======================================================================
//  Adds event listener to each button (includes numbers only)
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
//  Event Listener for the Operators
//===========================================

for(let i = 0; i < ops.length; i++) {
	
	if (display.textContent.length === 13) {
		break;
	}
	ops[i].addEventListener("mousedown", function() {

		this.classList.toggle("buttonclick");

		if( ( (display.textContent[display.textContent.length - 1]) !== this.textContent) && (display.textContent.length <= SCREEN_SIZE)) {

			display.textContent += this.textContent;
		}

	});

	ops[i].addEventListener("mouseup", function() {
		this.classList.toggle("buttonclick");
	});
}


//===========================================
//  Event Listener for the C button
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
	
	let displayContent = display.textContent.split(/[+-x\/]/);
	console.log(displayContent);
	this.classList.add("buttonclick");
	if(!displayContent.includes(".")) {
		display.textContent += this.textContent;
	}
});

dot.addEventListener("mouseup", function() {
	this.classList.remove("buttonclick");
})

//===================================
// Backspace functionality
//===================================

backspace.addEventListener("mousedown", function() {
	this.classList.add("buttonclick");
	displayContent = [...display.textContent];
	if(displayContent.length > 1) {
		displayContent.pop();
		display.textContent = displayContent.join("");	
	} else {
		display.textContent = "0";
	}
})


backspace.addEventListener("mouseup", function() {
	this.classList.remove("buttonclick");
})

// ====================  FUNCTIONS =================================

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


//================================================================================


// TODO (**** means done)

  // ADD Keyboard Functionality

  // Add Syntax error functionality

  // Add display Limit and overflow ****

 	// Added display point limit of 13 on calculations ****

 	// Add User input limitation - User can now input more digits than screen size  ****

  // Add Decimal Point functionality
     
     // Add decimal point calculations

     // Add multiple decimal points syntax error or stop multiple dots entry

  // Add syntax error when equality is pressed multiple times

  // Stop operator input when last Char entered is an operator

  // Add backspace / Delete Character functionality ****

