import inquirer from "inquirer";
let todos : string[] = [];
let condition = true;


while (condition){
let ans = await inquirer.prompt(
    [
        {
            name: "select",
            type: "list",
            message: "select an aperation",
            choices: ["Add", "update", "view", "delete", "Exit"],
        }
    ]);

 if (ans.select === "Add"){
let addTodo = await inquirer.prompt(
    [
        {
            name: "todo",
            type: "input",
            message: "Add items in the list",
            validate: function (input) {
                if (input.trim() == "") {
                    return "please enter a non-empty item."
                } return true;
                
            } 
        }
    ]
);
if (addTodo.todo.trim() !== ""){
todos.push(addTodo.todo)
todos.forEach(todo => console.log(todo))
}
}

 if (ans.select === "update"){
    let updateTodo = await inquirer.prompt(
        [
            {
                name: "todo",
                type: "list",
                message: "update items in the list",
                choices: todos.map(items => items)
            }
        ]
    );
    let addTodo = await inquirer.prompt(
        [
            {
                name: "todo",
                type: "input",
                message: "Add items in the list",
            }
        ]
    );
    let newTodo = todos.filter(val => val ! ==updateTodo.todo);
    todos =[...newTodo,addTodo.todo];
    todos.forEach(todo => console.log(todo))
 }
 if (ans.select === "view"){
    console.log(" ****To-Do List ****")
    todos.forEach(todo => console.log(todo))
 }

 if (ans.select === "delete"){
    let deleteTodo = await inquirer.prompt(
        [
            {
                name: "todo",
                type: "list",
                message: "select item to delete",
                choices: todos.map(item => item)
            }
        ]
    );
    let newTodo = todos.filter(val =>val !== deleteTodo.todo);
    todos = [...newTodo];
    todos.forEach(todo => console.log(todo))
 }

 if (ans.select === "Exit"){
    console.log("Exiting prigram....");
    condition = false;
 };

};

