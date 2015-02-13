describe('triangleSides', function() {
	
	it('returns equilateral when all sides are equal', function() {
		expect(triangleSides(5,5,5)).to.equal('equilateral');
	});
	
	it('returns isosceles if two sides are equal', function() {
		expect(triangleSides(5,5,4)).to.equal('isosceles');
	});
	
	it('returns scalene when no sides are equal', function() {
		expect(triangleSides(5,4,3)).to.equal('scalene');
	});

	it('returns invalid when one side is as long as two combined', function() {
		expect(triangleSides(10,5,5)).to.equal('invalid');
	});
	
});