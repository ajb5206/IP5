import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

import { MercuryAgeCalculator } from "./agecalculator.js"; 

$(document).ready(function() {
	$('#userInputForm').submit(function(event) {
		event.preventDefault();
		const userAge = $('#earthAge').val();
		const mercuryAgeCalculator = new MercuryAgeCalculator(userAge);
		const mercuryAge = mercuryAgeCalculator.calculateAge();
		$('#alienAge').append("<p>" + mercuryAge + "</p>");
	});
});