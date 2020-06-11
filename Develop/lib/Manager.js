// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")


class Manager extends Employee {
    constructor(
        name,
        role,
        email,
        id,
        officeNumber
    ) {
        super(
            name,
            role,
            email,
            id
        );
        this.officeNumber = officeNumber;
    };

    //call functions from HTML renderer to return data
    getRole () {
        return "Manager";
    };

    get officeNumber() {
        return this.officeNumber;
    };


}

module.exports = Manager;