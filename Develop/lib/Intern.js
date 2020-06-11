// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")


class Intern extends Employee {
    constructor(
        name,
        role,
        email,
        id,
        school
    ) {
        super(
            name,
            role,
            email,
            id,
        );
        this.school = school;
    }


    //call functions from HTML renderer to return cata
    getRole () {
        return this.role;
    };

    getSchool () {
        return this.school;
    };

}

module.exports = Intern;