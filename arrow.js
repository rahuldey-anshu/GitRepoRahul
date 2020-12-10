//Arrow function and Callback function
var skills = [
    {
    language: "Core Java",
    isDone: true,
} , {
    language: "C++",
    isDone: false,
    }, 
    {
    language: "JavaScript",
    isDone: true,
    },
    {
        language: "Ruby on Rails",
        isDone: false,
    },
]

const done = skills.filter((check)=> check.isDone == false 
);

console.log(done);
