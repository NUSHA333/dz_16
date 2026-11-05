const student = {
    name: "Ivan",
    age: 21,
    skills: ["js", "css"]
};

const { name, age } = student;

const [skill1, skill2] = student.skills;

function printStudent({ name, age }) {
    console.log(`Student ${name}, age ${age}`);
}

printStudent(student);

console.log(name);
console.log(age);
console.log(skill1);
console.log(skill2);


function sumAndMultiply(first, ...numbers) {
    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    return sum * first;
}

console.log(sumAndMultiply(2, 3, 4, 5));
console.log(sumAndMultiply(3, 1, 2, 3));
console.log(sumAndMultiply(5, 10, 20));


const arrayFirst = [4, 5, 6];
const arraySecond = [1, 2];
const arrayThird = [9, 10];
const arrayFourth = [3];
const arrayFiveth = [7, 8];

const newArray = [
    ...arraySecond,
    ...arrayFourth,
    ...arrayFirst,
    ...arrayFiveth,
    ...arrayThird
];

console.log(newArray);