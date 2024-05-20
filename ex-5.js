const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  const totalScore = students.reduce(function (sum, student) {
    return sum + student.score;
  }, 0);

  const average = totalScore / students.length;
  return average;
}

getAverageStudentScore(students); // Output: 87.5
console.log(getAverageStudentScore(students));
