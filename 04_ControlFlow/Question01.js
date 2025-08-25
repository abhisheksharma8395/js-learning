/* 

Write a Function getGrade(score) that takes a Student's marks (0 to 100) as input and returns the Grade of
the Student based on the following criteria:
90-100: A+
80-89: A
70-79: B
60-69: C
33-59: D
0-32: F
Anything else: Invalid marks❌

*/

const StudentName = "John Doe";
let score = 95; // Example score, you can change this value to test different cases
console.log("Grade of "+StudentName +" is "+getGrade(score)); 


// Function to get the grade based on the score
function getGrade(score){
    if(score>=90 && score<=100) return "A+";
    else if(score>=80 && score<=89) return "A";
    else if(score>=70 && score<=79) return "B";
    else if(score>=60 && score<=69) return "C";
    else if(score>=33 && score<=59) return "D";
    else if(score>=0 && score<=32)  return "Fail";
    else return "Invalid Marks❌";
}
