let marks = 78;
if (marks >= 90) {
    console.log("A");
} else if (marks >= 75) {
    console.log("B");
} else {
    console.log("C");
}

function getRank(val){
    if(val <= 25) return "D";
    else if(val <= 50) return "C";
    else if(val <= 75) return "B";
    else return "A";
}

console.log(getRank(40))
console.log(getRank(70))
console.log(getRank(80))