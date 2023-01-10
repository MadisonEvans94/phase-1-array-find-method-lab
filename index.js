// code your solution here
const record = [
	{ year: "2015", result: "B" },
	{ year: "2014", result: "N/A" },
	{ year: "2013", result: "L" },
	//...
];

const superbowlWin = (record) => {
	const output = record.find((entry) => entry.result === "W");
	if (output) {
		return output.year;
	} else {
		return output;
	}
};
