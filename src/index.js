import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

import { AgeCalculator } from "./agecalculator.js"; 

$(document).ready(function() {
	$('#userInputForm').submit(function(event) {
		event.preventDefault();
		const userAge = $('#earthAge').val();
		const ageCalculator = new AgeCalculator(userAge);
		const mercuryAge = AgeCalculator.calculateMercuryAge();
		$('#alienAge').append("<p>" + mercuryAge + "</p>");
	});
});