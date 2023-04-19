/*
Data una lista della spesa, stampare sulla pagina
(anche brutalmente, basta che si vedano)
gli elementi della lista individualmente con un ciclo for.
*/

const eleList = document.querySelector("#list");

// adds items to the array and displays them
let i = 0;
const arrList = [];
const btnAdd = document.querySelector(".btn-input");
const btnDelete = document.querySelector(".btn-delete");
const btnReset = document.querySelector(".btn-reset");
eleList.innerHTML = ``;

/*
** used a flag to break an infinite loop
** since it's a "fake" cicle

btnAdd.addEventListener("click", function () {
	let endWhile = true;
	let newItem = document.getElementById("element").value;
	while (endWhile) {
		arrList.push(newItem);
		eleList.innerHTML += `<li>${arrList[i]}</li>`;
		endWhile = false;
		i++;
	}
});
*/

btnAdd.addEventListener("click", function () {
	eleList.innerHTML = ``;
	i = 0;
	let newItem = document.getElementById("element").value;

	if (!arrList.includes(newItem)) {
		arrList.push(newItem);
	}

	while (i < arrList.length) {
		eleList.innerHTML += `<li>${arrList[i]}</li>`;
		i++;
	}
});

btnReset.addEventListener("click", function () {
	eleList.innerHTML = ``;
	arrList = [];
});

btnDelete.addEventListener("click", function () {
	eleList.removeChild(eleList.lastElementChild);
	arrList.pop();
});
