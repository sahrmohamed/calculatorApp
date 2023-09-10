const inputElement = document.getElementById('result'); 

function view(num) {
	inputElement.value += num; 
} 

function compute() {
	let valueToCompute = inputElement.value;
	computedValue = eval(valueToCompute)
    inputElement.value = computedValue; 	

} 
function clears() {
	inputElement.value = "";
}
