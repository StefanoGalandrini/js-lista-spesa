/*
Data una lista della spesa, stampare sulla pagina
(anche brutalmente, basta che si vedano)
gli elementi della lista individualmente con un ciclo for.
*/

// const arrList = [
// 	"pomodori",
// 	"funghi",
// 	"latte",
// 	"carne",
// 	"caffè",
// 	"peperoni",
// 	"biscotti",
// 	"salmone",
// 	"pasta",
// 	"prova",
// ];

const eleList = document.querySelector("#list");

// soluzione con il ciclo for
/*
for (let i = 0; i < arrList.length; i++) {
	console.log(arrList[i]);
	eleList.innerHTML += `<li>${arrList[i]}</li>`;
}
*/

// soluzione con il ciclo while

// adds items to the array and displays them
let i = 0;
const arrList = [];
const btnAdd = document.querySelector(".btn-input");
const btnEnd = document.querySelector(".btn-end");
eleList.innerHTML = ``;

btnAdd.addEventListener("click", function () {
	let newItem = document.getElementById("element").value;
	console.log(newItem);
	do {
		arrList.push(newItem);
		eleList.innerHTML += `<li>${arrList[i]}</li>`;
		i++;
	} while (i < arrList.length);
});
