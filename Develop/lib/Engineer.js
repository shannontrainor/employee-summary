// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(
        name,
        role,
        email,
        id,
        github
    ) {
        super(
            name,
            role,
            email,
            id
        );
        this.github = github;
    }

    //call functions from HTML renderer to return data
    getRole (){
        return "Engineer";
    };

    getGithub () {
        return this.github;
    };
}

module.exports = Engineer;