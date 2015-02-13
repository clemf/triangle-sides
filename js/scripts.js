function triangleSides(side1, side2, side3) {
	if(side1)
	if(side1 + side2 <= side3 || side2 + side3 <= side1 || side3 + side1 <= side2) {
		return 'invalid triangle';
	}
	else if(side1 === side2 && side2 === side3) {
		return 'equilateral';
	}
	else if(side1 === side2 || side2 === side3 || side3 === side1) {
		return 'isosceles';
	}
	else if(side1 !== side2 && side2 !== side3 || side3 !== side1) {
		return 'scalene';
	}
}

$("#results").hide();

$("form#triangle-sides").submit(function(event) {
	var side1 = parseInt($("input#side1").val()),
		  side2 = parseInt($("input#side2").val()),
	    side3 = parseInt($("input#side3").val());

	triangle = triangleSides(side1, side2, side3);

	if(isNaN(side1) || isNaN(side2) || isNaN(side3)) {
		$("#triangle-type").css('color', 'red').text('enter numbers only');
	} else if(triangle.indexOf("invalid") != -1) {
		$("#triangle-type").css('color', 'red').text(triangle);
	} else {
		$("#triangle-type").css('color', 'green').text(triangle);
	}

	$("#results").show();
	event.preventDefault();
});
