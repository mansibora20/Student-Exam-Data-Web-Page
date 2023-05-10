var app = angular.module("myApp", []);

app.controller("ExamController", function($scope){
    $scope.students = [
        { name: "Riya", subject: "Math", score: 85 },
        { name: "Yash", subject: "Science", score: 92 },
        { name: "Anish", subject: "English", score: 78 },
        { name: "Ojaswita", subject: "Social Studies", score: 90 }
    ];

    $scope.addStudent = function() {
        $scope.students.push({
          name: $scope.newStudent.name,
          subject: $scope.newStudent.subject,
          score: $scope.newStudent.score
        });
        $scope.newStudent.name = "";
        $scope.newStudent.subject = "";
        $scope.newStudent.score = "";
      };
    
      $scope.removeStudent = function(student) {
        var index = $scope.students.indexOf(student);
        if (index > -1) {
          $scope.students.splice(index, 1);
        }
      };
});