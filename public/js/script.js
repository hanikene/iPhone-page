// ********** Nav Bar *********************************************************************************

//states of dynamic bars
var searchBarState = false;
var slideBarState = false;

//opacity transition object for css
var opacityDown = {
	"transition": "all .4s",
	"opacity": ".3"
};
var opacityUp = {"opacity": "1"};

var opacityUpInstant = {
	"transition": "all 0s",
	"opacity": "1"
};

//event header for window size
$(window).resize(function(){
	var $window = $(window);
	var windowsize = $window.width();
	if (windowsize >= 750) {
		pcFormat();
	} else {
		mobileFormat();
	}
});

function pcFormat(){
	slideBarState = false;
	$(".collapse-dropdown").css("display", "none");
	$("#xBtnSlide").css("display", "none");
	//make the navbar links appear only if the search bar is closed
	if (!searchBarState) {
		$(".disappear").css("display", "block");
	}
}

function mobileFormat() {
	searchBarState = false;
	$("section").css(opacityUpInstant);
	$("#searchBar").css("display", "none");
	$("#xButton").css("display", "none");
	$("#bagButton").css("display", "block");
	$(".disappear").css("display", "none");
	//make the slide button appear only if the slide bar closed
	if (!slideBarState) {
		$("#barsBtnSlide").css("display", "block");
	}
}

//event header for opening the search bar (pc format)
$("nav").on("click", "#searchButton", function() {
	searchBarState = true;
	$("section").css(opacityDown);
	$(".disappear").fadeOut(200, function() {
		$("#searchBar").fadeIn(200);
	});
	$("#bagButton").fadeOut(200, function() {
		$("#xButton").fadeIn(200);
	});
});

//event header for closing the search bar (pc format)
$("nav").on("click", "#xButton", function() {
	searchBarState = false;
	$("section").css(opacityUp);
	$("#xButton").fadeOut(200, function() {
		$("#bagButton").fadeIn(200);
	});
	$("#searchBar").fadeOut(200, function() {
		$(".disappear").fadeIn(200);
	});
});

$("section").on("click", function() {
	searchBarState = false;
	$("section").css(opacityUp);
	$("#xButton").fadeOut(200, function() {
		$("#bagButton").fadeIn(200);
	});
	$("#searchBar").fadeOut(200, function() {
		$(".disappear").fadeIn(200);
	});
});

//event header for slide bar (mobile format)
$("nav").on("click", "button", function(){
	$(".collapse-dropdown").slideToggle();
	if (!slideBarState) {
		slideBarState = true;
		$("#barsBtnSlide").fadeOut(200, function() {
			$("#xBtnSlide").fadeIn(200);
		});
	} else {
		slideBarState = false;
		$("#xBtnSlide").fadeOut(200, function() {
			$("#barsBtnSlide").fadeIn(200);
		});
	}
});

//************ Body *********************************************************************************************
function init() {
	$("h1").fadeIn(1500, function() {
		$("section:first-of-type h2:first-of-type").fadeIn(1000, function() {
			$("section:first-of-type h2:nth-of-type(2)").fadeIn(1000);
		});
	});
}
init();