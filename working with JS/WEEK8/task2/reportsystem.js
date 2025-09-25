// Student Report System
// Array to store student data (objects with name + grade)
let students = [];
// 1. Add Student
function addStudent(name, grade) {
    if (grade < 0 || grade > 100) {
        console.log("Invalid grade! Must be between 0 and 100.");
        return;
    }
    students.push({ name: name, grade: grade });
}
// 2. Class Average
function classAverage() {
    let total = 0;
    for (let s of students) {
        total += s.grade;
    }
    return (students.length > 0) ? (total / students.length).toFixed(2) : 0;
}
// 3. Find Top & Bottom Student
function findTopStudent() {
    let top = students[0];
    for (let s of students) {
        if (s.grade > top.grade) top = s;
    }
    return top;
}
function findBottomStudent() {
    let bottom = students[0];
    for (let s of students) {
        if (s.grade < bottom.grade) bottom = s;
    }
    return bottom;
}
// 4. Grade Categorizer
function getLetterGrade(grade) {
    if (grade >= 90) return "A";
    if (grade >= 80) return "B";
    if (grade >= 70) return "C";
    if (grade >= 60) return "D";
    return "F";
}
// 5. Report Generator
function generateReport() {
    console.log("===== Class Report =====");
    students.sort((a, b) => b.grade - a.grade); // Sort highest → lowest
    for (let s of students) {
        console.log(`${s.name} | Grade: ${s.grade} | Letter: ${getLetterGrade(s.grade)}`);
    }
    console.log("========================");
    console.log(`Class Average: ${classAverage()}`);
    console.log(`Top Student: ${findTopStudent().name} (${findTopStudent().grade})`);
    console.log(`Lowest Student: ${findBottomStudent().name} (${findBottomStudent().grade})`);
}
// TEST:
addStudent("Lade", 95);
addStudent("John", 72);
addStudent("Alice", 88);
addStudent("Opnex", 55);
generateReport();