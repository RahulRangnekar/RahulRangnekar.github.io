// JavaScript Document

/* RR IMAGE CODE */

function hoverRR() {
	var image = document.getElementById("RR-img");
	image.src = "images/RR2.png";
}

function offRR() {
	var image = document.getElementById("RR-img");
	image.src = "images/RR.png";
}

/* "PERSONAL" SECTION CODE */

/* PI SIGMA EPSILON */

var trackPSE = 'o';

function hoverPSE() {
	var image = document.getElementById('PSE-pic');
	if (trackPSE == 'o') {
		image.src = "images/pse-h.jpg";
		trackPSE = 'h';
	}
}

function clickPSE() {
	var image = document.getElementById("PSE-pic");
	if (trackPSE == 'd') {
		image.src = "images/pse-o.jpg";
		trackPSE = 'o';
		image.width = "400";
	} else {
		image.src = "images/pse-d.jpg";
		trackPSE = 'd';
		image.width = "1600";
	}
}

function offPSE() {
	var image = document.getElementById("PSE-pic");
	if (trackPSE == 'h' || trackPSE == 'o') {
		image.src = "images/pse-o.jpg";
		trackPSE = 'o';
		image.width = "400";
	} else {
		image.src = "images/pse-d.jpg";
		trackPSE = 'd';
		image.width = "1600";
	}
}

/* ASSOCIATED STUDENTS OF THE UNIVERSITY OF CALIFORNIA */

var trackASUC = 'o';

function hoverASUC() {
	var image = document.getElementById('ASUC-pic');
	if (trackASUC == 'o') {
		image.src = "images/asuc-h.jpg";
		trackASUC = 'h';
	}
}

function clickASUC() {
	var image = document.getElementById("ASUC-pic");
	if (trackASUC == 'd') {
		image.src = "images/asuc-o.jpg";
		trackASUC = 'o';
		image.width = "400";
	} else {
		image.src = "images/asuc-d.jpg";
		trackASUC = 'd';
		image.width = "1600";
	}
}

function offASUC() {
	var image = document.getElementById("ASUC-pic");
	if (trackASUC == 'h' || trackASUC == 'o') {
		image.src = "images/asuc-o.jpg";
		trackASUC = 'o';
		image.width = "400";
	} else {
		image.src = "images/asuc-d.jpg";
		trackASUC = 'd';
		image.width = "1600";
	}
}

/* LAASYA 2016 */

var trackLaasya = 'o';

function hoverLaasya() {
	var image = document.getElementById('Laasya-pic');
	if (trackLaasya == 'o') {
		image.src = "images/laasya-h.jpg";
		trackLaasya = 'h';
	}
}

function clickLaasya() {
	var image = document.getElementById("Laasya-pic");
	if (trackLaasya == 'd') {
		image.src = "images/laasya-o.jpg";
		trackLaasya = 'o';
		image.width = "400";
	} else {
		image.src = "images/laasya-d.jpg";
		trackLaasya = 'd';
		image.width = "1600";
	}
}

function offLaasya() {
	var image = document.getElementById("Laasya-pic");
	if (trackLaasya == 'h' || trackLaasya == 'o') {
		image.src = "images/laasya-o.jpg";
		trackLaasya = 'o';
		image.width = "400";
	} else {
		image.src = "images/laasya-d.jpg";
		trackLaasya = 'd';
		image.width = "1600";
	}
}

/* AMERICAN RED CROSS AT CAL */

var trackARC = 'o';

function hoverARC() {
	var image = document.getElementById('ARC-pic');
	if (trackARC == 'o') {
		image.src = "images/arc-h.jpg";
		trackARC = 'h';
	}
}

function clickARC() {
	var image = document.getElementById("ARC-pic");
	if (trackARC == 'd') {
		image.src = "images/arc-o.jpg";
		trackARC = 'o';
		image.width = "400";
	} else {
		image.src = "images/arc-d.jpg";
		trackARC = 'd';
		image.width = "1600";
	}
}

function offARC() {
	var image = document.getElementById("ARC-pic");
	if (trackARC == 'h' || trackARC == 'o') {
		image.src = "images/arc.jpg";
		trackARC = 'o';
		image.width = "400";
	} else {
		image.src = "images/arc-d.jpg";
		trackARC = 'd';
		image.width = "1600";
	}
}

/* "HOBBIES" SECTION CODE */

/* EVERCISE */

var trackExercise = 'o';

function hoverExercise() {
	var image = document.getElementById('Exercise-pic');
	if (trackExercise == 'o') {
		image.src = "images/exercise-h.jpg";
		trackExercise = 'h';
	}
}

function clickExercise() {
	var image = document.getElementById("Exercise-pic");
	if (trackExercise == 'd') {
		image.src = "images/exercise-o.jpg";
		trackExercise = 'o';
		image.width = "400";
	} else {
		image.src = "images/exercise-d.jpg";
		trackExercise = 'd';
		image.width = "1600";
	}
}

function offExercise() {
	var image = document.getElementById("Exercise-pic");
	if (trackExercise == 'h' || trackExercise == 'o') {
		image.src = "images/exercise-o.jpg";
		trackExercise = 'o';
		image.width = "400";
	} else {
		image.src = "images/exercise-d.jpg";
		trackExercise = 'd';
		image.width = "1600";
	}
}

/* COOK */

var trackCook = 'o';

function hoverCook() {
	var image = document.getElementById('Cook-pic');
	if (trackCook == 'o') {
		image.src = "images/cook-h.jpg";
		trackCook = 'h';
	}
}

function clickCook() {
	var image = document.getElementById("Cook-pic");
	if (trackCook == 'd') {
		image.src = "images/cook-o.jpg";
		trackCook = 'o';
		image.width = "400";
	} else {
		image.src = "images/cook-d.jpg";
		trackCook = 'd';
		image.width = "1600";
	}
}

function offCook() {
	var image = document.getElementById("Cook-pic");
	if (trackCook == 'h' || trackCook == 'o') {
		image.src = "images/cook-o.jpg";
		trackCook = 'o';
		image.width = "400";
	} else {
		image.src = "images/cook-d.jpg";
		trackCook = 'd';
		image.width = "1600";
	}
}

/* NBA */

var trackNBA = 'o';

function hoverNBA() {
	var image = document.getElementById('NBA-pic');
	if (trackNBA == 'o') {
		image.src = "images/nba-h.jpg";
		trackNBA = 'h';
	}
}

function clickNBA() {
	var image = document.getElementById("NBA-pic");
	if (trackNBA == 'd') {
		image.src = "images/nba-o.jpg";
		trackNBA = 'o';
		image.width = "400";
	} else {
		image.src = "images/nba-d.jpg";
		trackNBA = 'd';
		image.width = "1600";
	}
}

function offNBA() {
	var image = document.getElementById("NBA-pic");
	if (trackNBA == 'h' || trackNBA == 'o') {
		image.src = "images/nba-o.jpg";
		trackNBA = 'o';
		image.width = "400";
	} else {
		image.src = "images/nba-d.jpg";
		trackNBA = 'd';
		image.width = "1600";
	}
}

/* CODE */

var trackCode = 'o';

function hoverCode() {
	var image = document.getElementById('Code-pic');
	if (trackCode == 'o') {
		image.src = "images/code-h.jpg";
		trackCode = 'h';
	}
}

function clickCode() {
	var image = document.getElementById("Code-pic");
	if (trackCode == 'd') {
		image.src = "images/code-o.jpg";
		trackCode = 'o';
		image.width = "400";
	} else {
		image.src = "images/code-d.jpg";
		trackCode = 'd';
		image.width = "1600";
	}
}

function offCode() {
	var image = document.getElementById("Code-pic");
	if (trackCode == 'h' || trackCode == 'o') {
		image.src = "images/code-o.jpg";
		trackCode = 'o';
		image.width = "400";
	} else {
		image.src = "images/code-d.jpg";
		trackCode = 'd';
		image.width = "1600";
	}
}

/* "PROFESSIONAL" SECTION CODE */

/* STEPPING STONE TALENT RECRUITING */

var trackSS = 'o';

function hoverSS() {
	var image = document.getElementById('SS-pic');
	if (trackSS == 'o') {
		image.src = "images/steppingstone-h.jpg";
		trackSS = 'h';
	}
}

function clickSS() {
	var image = document.getElementById("SS-pic");
	if (trackSS == 'd') {
		image.src = "images/steppingstone-o.jpg";
		trackSS = 'o';
	} else {
		image.src = "images/steppingstone-d.jpg";
		trackSS = 'd';
	}
}

function offSS() {
	var image = document.getElementById("SS-pic");
	if (trackSS == 'h' || trackSS == 'o') {
		image.src = "images/steppingstone-o.jpg";
		trackSS = 'o';
	} else {
		image.src = "images/steppingstone-d.jpg";
		trackSS = 'd';
	}
}

/* EMBER TECHNOLOGIES */

var trackEmber = 'o';

function hoverEmber() {
	var image = document.getElementById('Ember-pic');
	if (trackEmber == 'o') {
		image.src = "images/ember-h.jpg";
		trackEmber = 'h';
	}
}

function clickEmber() {
	var image = document.getElementById("Ember-pic");
	if (trackEmber == 'd') {
		image.src = "images/ember-o.jpg";
		trackEmber = 'o';
		image.width = "400";
	} else {
		image.src = "images/ember-d.jpg";
		trackEmber = 'd';
		image.width = "1600";
	}
}

function offEmber() {
	var image = document.getElementById("Ember-pic");
	if (trackEmber == 'h' || trackEmber == 'o') {
		image.src = "images/ember-o.jpg";
		trackEmber = 'o';
		image.width = "400";
	} else {
		image.src = "images/ember-d.jpg";
		trackEmber = 'd';
		image.width = "1600";
	}
}

/* FULLDIVE VIRTUAL REALITY */

var trackFD = 'o';

function hoverFD() {
	var image = document.getElementById('FD-pic');
	if (trackFD == 'o') {
		image.src = "images/fulldive-h.jpg";
		trackFD = 'h';
	}
}

function clickFD() {
	var image = document.getElementById("FD-pic");
	if (trackFD == 'd') {
		image.src = "images/fulldive-o.jpg";
		trackFD = 'o';
		image.width = "400";
	} else {
		image.src = "images/fulldive-d.jpg";
		trackFD = 'd';
		image.width = "1600";
	}
}

function offFD() {
	var image = document.getElementById("FD-pic");
	if (trackFD == 'h' || trackFD == 'o') {
		image.src = "images/fulldive-o.jpg";
		trackFD = 'o';
		image.width = "400";
	} else {
		image.src = "images/fulldive-d.jpg";
		trackFD = 'd';
		image.width = "1600";
	}
}

/* ICON CODE */

/* FACEBOOK */

function hoverFB() {
	var image = document.getElementById("fb-icon");
	image.src = "icons/facebook-color.png";
}

function offFB() {
	var image = document.getElementById("fb-icon");
	image.src = "icons/facebook.png";
}

/* TWITTER */

function hoverTW() {
	var image = document.getElementById("tw-icon");
	image.src = "icons/twitter-color.png";
}

function offTW() {
	var image = document.getElementById("tw-icon");
	image.src = "icons/twitter.png";
}

/* INSTAGRAM */

function hoverIG() {
	var image = document.getElementById("ig-icon");
	image.src = "icons/instagram-color.png";
}

function offIG() {
	var image = document.getElementById("ig-icon");
	image.src = "icons/instagram.png";
}

/* YELP */

function hoverYP() {
	var image = document.getElementById("yp-icon");
	image.src = "icons/yelp-color.png";
}

function offYP() {
	var image = document.getElementById("yp-icon");
	image.src = "icons/yelp.png";
}

/* GITHUB */

function hoverGH() {
	var image = document.getElementById("gh-icon");
	image.src = "icons/github-color.png";
}

function offGH() {
	var image = document.getElementById("gh-icon");
	image.src = "icons/github.png";
}