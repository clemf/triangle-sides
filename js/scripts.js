function triangleSides(side1, side2, side3) {
	if(side1 + side2 <= side3 || side2 + side3 <= side1 || side3 + side1 <= side2) {
		return 'invalid';
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

	if(triangle === "invalid") {
		$("#triangle-type").css('color', 'red').text("Invalid input");
	} else {
		$("#triangle-type").css('color', 'green')text(triangle);
	}

	$("#results").show();
	event.preventDefault();
});
