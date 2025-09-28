let languages = ["JavaScript", "Python", "C++", "Java", "Go"];

var remove1 = languages.splice(2, 1);

document.write("Removed:", removed1); 


document.write("Modified:", languages);  

languages.splice(2, 0, "C#", "Ruby");

document.write("After adding:", languages);  

languages.splice(1, 2, "PHP", "TypeScript");

document.write("After replacing:", languages);  