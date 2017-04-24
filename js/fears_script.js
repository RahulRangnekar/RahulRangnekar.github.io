// JavaScript Document

function displayProfessional() {
	
	"use strict";
	
	window.scrollTo(0,0);
	document.getElementById("fears-section").style.display = "block";
	document.getElementById("fears-title").textContent = "Professional Failure";
	document.getElementById("physical-container").style.display = "none";
	document.getElementById("mental-container").style.display = "none";
	document.getElementById("emotional-container").style.display = "none";
	document.getElementById("professional-container").style.display = "block";
	
}

function displayPhysical() {
	
	"use strict";
	
	window.scrollTo(0,0);
	document.getElementById("fears-section").style.display = "block";
	document.getElementById("fears-title").textContent = "Physical Health";
	document.getElementById("professional-container").style.display = "none";
	document.getElementById("mental-container").style.display = "none";
	document.getElementById("emotional-container").style.display = "none";
	document.getElementById("physical-container").style.display = "block";	
}

function displayMental() {
	
	"use strict";
	
	window.scrollTo(0,0);
	document.getElementById("fears-section").style.display = "block";
	document.getElementById("fears-title").textContent = "Mental Health";
	document.getElementById("professional-container").style.display = "none";
	document.getElementById("physical-container").style.display = "none";
	document.getElementById("emotional-container").style.display = "none";
	document.getElementById("mental-container").style.display = "block";	
}

function displayEmotion() {
	
	"use strict";
	
	window.scrollTo(0,0);
	document.getElementById("fears-section").style.display = "block";
	document.getElementById("fears-title").textContent = "Emotional Expression";
	document.getElementById("professional-container").style.display = "none";
	document.getElementById("physical-container").style.display = "none";
	document.getElementById("mental-container").style.display = "none";
	document.getElementById("emotional-container").style.display = "block";		
}