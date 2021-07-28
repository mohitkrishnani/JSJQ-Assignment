qTeams = {aaiec: 400, 
aaiwc: 60, 
qai: 200, 
poc: 100,
gtm: 50,
hr: 10
};
console.log("Initial Object");
console.log(qTeams);
let sortable = [];
for(let team in qTeams){
	sortable.push([team, qTeams[team]]);
}

sortable.sort(function(a, b) {
    return b[1] - a[1];
});
for(let i = 0; i<sortable.length; i++){
	console.log(sortable[i][0]);
}
