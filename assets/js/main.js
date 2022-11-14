const form = document.querySelector("#sign-up");
const personal_number = document.querySelector("#personal_number");
const mobile_number = document.querySelector("#mobile_number");
const job_description = document.querySelector("#job_description");

const modal = document.querySelector("#sign-in");

const closeModalBtn = document.querySelector("#sign-in .modal-close");

const personal_numberError = document.querySelector("#personal_number-error");
const mobile_numberError = document.querySelector("#mobile_number-error");
const job_descriptionError = document.querySelector("#job_description-error");

let ispersonal_numberValid = false;
let ismobile_numberValid = false;
let isjob_descriptionValid = false;


function validatePersonal_number() {
	if (personal_number.value.length === 11 && typeof personal_number == 'number' ) {
        personal_numberError.innerText = "#";
		personal_number.classList.add("correct");
		personal_number.classList.remove("error");
		ispersonal_numberValid = true;
	} else   {
		personal_numberError.innerText = "only 11  char and number";
		personal_number.classList.remove("correct");
		personal_number.classList.add("error");
		ispersonal_numberValid = false;
	} ;
	return ispersonal_numberValid;
}

function validateMobile_number() {
	if (mobile_number.value.length == 9 && typeof personal_number == 'number' ) {
        mobile_numberError.innerText = "#";
		mobile_number.classList.add("correct");
		mobile_number.classList.remove("error");
		mobile_numberValid = true;
	} else   {
		mobile_numberError.innerText = "only 9 char and number";
		mobile_number.classList.remove("correct");
		mobile_number.classList.add("error");
		mobile_numberValid = false;
	} ;
	return mobile_numberValid;
}
form.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log(personal_number.validity, mobile_number.validity, job_description.value);

	 const isValidPersonal_number = validatePersonal_number();
	 const isValidMobile_number = validateMobile_number();
    });

	

