var languages = ["JavaScript ", "Python ", "C++ ", "Java ", "Go "];

var remove1 = languages.splice(2, 1);

document.write("Removed : ", remove1); 

document.write("<br>Modified : ", languages);  

languages.splice(2, 0, "C# ", "Ruby ");

document.write("<br>After adding : ", languages);  

languages.splice(1, 2, "PHP ", "TypeScript " );

document.write("<br>After replacing : ", languages);  