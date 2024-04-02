#! /usr/bin/env node
import inquirer from "inquirer";
let todo = [];
let loop = true;
while (loop) {
    let list = await inquirer.prompt([
        {
            name: "todos",
            type: "input",
            message: "Task for today..!"
        },
        {
            name: "ADDMORE",
            type: "confirm",
            message: "Do you want to add more todo`s ? ",
            default: "true",
        },
    ]);
    let { todos, ADDMORE } = list;
    loop = ADDMORE;
    if (todos) {
        todo.push(todos);
    }
    else {
        console.log("Provide a valid input.");
    }
}
if (todo.length > 0) {
    console.log(`List Of Todos: `);
    todo.forEach((todos) => {
        console.log(todos);
    });
}
else {
    console.log('No todos found.');
}
;
