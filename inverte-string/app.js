const string = "target sistemas";
console.log(reverse(string));
function reverse(string) {
	var gnirts = [];
	for (let i = string.length; i > 0; i--) {
		gnirts.push(string[i - 1]);
	}
	return gnirts.toString().replace(/[',']/g, "");
}
