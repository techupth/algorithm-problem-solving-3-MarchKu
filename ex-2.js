function sortStudentsByScore(students) {
  let temp;
  for (let x = 0; x < students.length; x++) {
    for (let i = 0; i < students.length - 1 - x; i++) {
      if (students[i].score > students[i + 1].score) {
        temp = students[i];
        students[i] = students[i + 1];
        students[i + 1] = temp;
      }
    }
  }
  return students;
}
const inputStudent = [
  { id: "S004", name: "Dao", score: 95 },
  { id: "S002", name: "Boon", score: 92 },
  { id: "S005", name: "Ek", score: 88 },
  { id: "S001", name: "Anan", score: 85 },
  { id: "S006", name: "Fah", score: 80 },
  { id: "S003", name: "Chai", score: 78 },
];

console.log(sortStudentsByScore(inputStudent));
