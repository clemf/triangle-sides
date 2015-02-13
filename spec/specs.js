describe('triangleSides', function() {
	it('returns equilateral when all sides are equal', function() {
		expect(triangleSides(5,5,5)).to.equal('equilateral');
	});
});