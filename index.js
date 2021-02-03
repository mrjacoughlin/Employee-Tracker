const { prompt } = require("inquirer");

const db = require("./db");
require("console.trable");

mainPrompts();

function mainPrompts() {
  const { choice } = prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "View all employees",
          value: "VIEW_EMPLOYEES",
        },
        {
          name: " View all employees by Department",
          value: "VIEW ALL EMPLOYEES_BY_DEPARTMENT",
        },
        {
          name: "View all employees by manager",
          value: "VIEW_EMPLOYEES_BY+MANAGER",
        },
        {
          name: "Add employee",
          value: "ADD_EMPLOYEE",
        },
        {
          name: "Remove employee",
          value: "REMOVE_EMPLOYEE",
        },
        {
          name: "Update Employee Role",
          value: "UPDATE_EMPLOYEE_ROLE",
        },
        {
          name: "Update Employee Manager",
          value: "UPDATE_EMPLOYEE_MANAGER",
        },
        {
          name: "view all roles",
          value: "VIEW_ROLES",
        },
        {
          name: "Add Roles",
          value: "ADD_ROLES",
        },
        {
          name: "Remove roles",
          value: "REMOVE_ROLES",
        },
        {
          name: "view all departments",
          value: "VIEW_DEPARTMENT",
        },
        {
          name: "add department",
          value: "ADD_DEPARTMENT",
        },
        {
          name: "remove department",
          value: "REMOVE_DEPARTMENT",
        },
        {
          name: "quit",
          value: "QUIT",
        },
      ],
    },
  ]);
}
