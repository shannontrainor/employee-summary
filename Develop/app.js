const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//empty array for employees to store
const employeeTeam = [];
//create Manager
function getManager() {
    //prompt questions to fill in manager info
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is your manager's name?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is your manager's email?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is your manager's ID number?"
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is your manager's Office Number?"
        }
        //get answers
    ]).then(answers => {
        const manager = new Manager (
            answers.managerName,
            answers.managerEmail,
            answers.managerId,
            answers.managerOfficeNumber);
        employeeTeam.push(manager); //push manager data to array
        buildEmployees();  //call build function
    });
};

//create Engineer
function getEngineer() {
    //prompt questions to fill in engineer info
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is your Engineer's name?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is your Engineer's email?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is your Engineer's ID?",
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is your Engineer's Github username?"
        }
        //get answers
    ]).then(answers => {
        const engineer = new Engineer (
            answers.engineerName,
            answers.engineerEmail,
            answers.engineerId,
            answers.engineerGithub);
        employeeTeam.push(engineer); //push engineer data to array
            buildEmployees();  //call build function
    });
}

//create Intern
function getIntern() {
    //prompt questions to fill in intern info
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is your Intern's name?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is your Intern's email?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is your Intern's ID?",
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is your Intern's school?"
        }
        //get answers
    ]).then(answers => {
        const intern = new Intern (
            answers.internName,
            answers.internEmail,
            answers.internId,
            answers.internSchool);
        employeeTeam.push(intern); //push intern data to array
        buildEmployees();  //call build function
    });

};

//create Team of employees
function getTeam (){
    //prompts to add team member
    inquirer.prompt ([
        {
            type: "list",
            name: "addEmployee",
            message: "What type of employee would you like to add?",
            choices: ["Manager", "Engineer", "Intern", "None"]
        }
        //switch case to add member depending on user answer to prompt
    ]).then(choice => {
        switch(choice){
            case "Manager":
            getManager();
            case "Engineer":
            getEngineer();
            case "Intern":
            getIntern();
        }
    })
}

getTeam();


function buildEmployees() {
    fs.writeFileSync(outputPath, render(employeeTeam));
};


// //call get functions
// getManager();
// getEngineer();
// getIntern();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
