const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(totalScore, students) {
    return totalScore + students.score;
}

let average = students.reduce(getAverageStudentScore,0)/students.length;

console.log(average);
