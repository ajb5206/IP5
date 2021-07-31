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
		const mercuryAge = ageCalculator.calculateMercuryAge();
		const venusAge = ageCalculator.calculateVenusAge();
		const marsAge = ageCalculator.calculateMarsAge();
		const jupiterAge = ageCalculator.calculateJupiterAge();
		$('#mercuryAge').append("<p> Your age on Mercury is " + mercuryAge + "!</p>");
		$('#venusAge').append("<p> Your age on Venus is " + venusAge + "!</p>");
		$('#marsAge').append("<p> Your age on Mars is " + marsAge + "!</p>");
		$('#jupiterAge').append("<p> Your age on Jupiter is " + jupiterAge + "!</p>");
		$("#userInputForm")[0].reset();
	});
});