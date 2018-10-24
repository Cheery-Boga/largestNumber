// prompt user for three numbers;
// create a variable for each number (num1, num2 and num3);
// if (num1 > num2) && (num1 > num3) - then num1 is the largest;
// else if (num2 > num3) then number 2 is the largest;
// else num3 is the largest;

function largestNumber(){
	let userNumb1 = prompt("Please Enter the First Number");
	let userNumb2 = prompt("Please Enter the Second Number");
	let userNumb3 = prompt("Please Enter the Third Number");

	console.log("The first number is " + userNumb1); 
	console.log("The second number is  " + userNumb2);
	console.log("The third number is  " + userNumb3);


	if(userNumb1 > userNumb2 && userNumb1 > userNumb3) {

		 
		console.log(userNumb1 + " is the largest number."); 
	} 

	else if(userNumb2 > userNumb3) {
		 
		console.log(userNumb2 + " is the largest number.");

	} 

	else {
		 
		console.log(userNumb3 + " is the largest number.");
	}

}