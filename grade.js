function generateStudentGrade() {
    // const marks = prompt("Enter student marks (between 0 and 100):");
    const marks= 55;

    // marks = parseInt(marks);

    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid input. Marks should be between 0 and 100.");
        return;
    }

    let grade;
    if (marks > 80) {
        grade = 'A';
    } else if (marks >= 65) {
        grade = 'B';
    } else if (marks >= 55) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    console.log(`Grade: ${grade}`);
}


generateStudentGrade();