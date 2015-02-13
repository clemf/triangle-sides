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
});