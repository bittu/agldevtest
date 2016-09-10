describe("AGL Test Suite", function() {
	var resultData,
		maleCats = ['Garfield', 'Jim', 'Max', 'Tom'],
		femaleCats = ['Garfield', 'Simba', 'Tabby'];


	it("should get array response from jsonp call", function(done) {
		jsonp('http://agl-developer-test.azurewebsites.net/people.json', function(data) {
			resultData = data;
			expect(_.isArray(data)).toBe(true);
			done();
		})
	})

	it("should have only cat pets in filtered list", function() {
		var filteredData = filterCats(resultData);
		expect(_.concat(filteredData.Male, filteredData.Female)).toEqual(_.concat(maleCats, femaleCats));
	})

	it("should be in alphabetical order for Male", function() {
		expect(filterCats(resultData).Male).toEqual(maleCats)
	})

	it("should be in alphabetical order for Female", function() {
		expect(filterCats(resultData).Female).toEqual(femaleCats)
	})
})