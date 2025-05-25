"use strict";
// create and export a constant cpp for Cpp Subjects
// create and export a constant java for Java Subjects
// create and export a constant react for React Subjects
// create and export one Teacher object cTeacher with experienceTeachingC = 10
// for Cpp subject, log to the console C++, set cTeacher as the teacher, call the two methods getRequirements and getAvailableTeacher and print the strings they return
// for Java subject, log to the console Java, set cTeacher as the teacher, call the two methods getRequirements and getAvailableTeacher, and print the strings they return
// for React subject, log to the console React, set cTeacher as the teacher, call the two methods getRequirements and getAvailableTeacher, and print the strings they return
Object.defineProperty(exports, "__esModule", { value: true });
exports.cTeacher = exports.react = exports.java = exports.cpp = void 0;
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
exports.cpp = new Subjects.Cpp();
exports.java = new Subjects.Java();
exports.react = new Subjects.React();
exports.cTeacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10
};
// C++
console.log('C++');
exports.cpp.setTeacher(exports.cTeacher);
console.log(exports.cpp.getRequirements());
console.log(exports.cpp.getAvailableTeacher());
// Java
console.log('Java');
exports.java.setTeacher(exports.cTeacher);
console.log(exports.java.getRequirements());
console.log(exports.java.getAvailableTeacher());
// React
console.log('React');
exports.react.setTeacher(exports.cTeacher);
console.log(exports.react.getRequirements());
console.log(exports.react.getAvailableTeacher());
