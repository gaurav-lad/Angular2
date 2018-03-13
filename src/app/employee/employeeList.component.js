"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent() {
        this.employees = [
            { code: 'emp01', name: 'Gaurav', gender: 'Male', annualSalary: 9999999999, dateOfBirth: '02/04/1989' },
            { code: 'emp02', name: 'Rajat', gender: 'Female', annualSalary: 9837292, dateOfBirth: '05/06/1991' },
            { code: 'emp03', name: 'Raghu', gender: 'Male', annualSalary: 872323, dateOfBirth: '03/04/1989' },
            { code: 'emp04', name: 'Umang', gender: 'Female', annualSalary: 972372, dateOfBirth: '05/05/1985' },
        ];
    }
    EmployeeListComponent.prototype.getEmployees = function () {
        this.employees = [
            { code: 'emp01', name: 'Gaurav', gender: 'Male', annualSalary: 9999999999, dateOfBirth: '02/04/1989' },
            { code: 'emp02', name: 'Rajat', gender: 'Female', annualSalary: 9837292, dateOfBirth: '05/06/1991' },
            { code: 'emp03', name: 'Raghu', gender: 'Male', annualSalary: 872323, dateOfBirth: '03/04/1989' },
            { code: 'emp04', name: 'Umang', gender: 'Female', annualSalary: 972372, dateOfBirth: '05/05/1985' },
            { code: 'emp05', name: 'Dhaval', gender: 'Male', annualSalary: 862382, dateOfBirth: '02/07/1990' },
            { code: 'emp06', name: 'Ishan', gender: 'Female', annualSalary: 784342, dateOfBirth: '05/12/1989' },
        ];
    };
    EmployeeListComponent.prototype.trackByEmpCode = function (index, employee) {
        return employee.code;
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'list-employee',
            templateUrl: 'app/employee/employeeList.component.html',
            styleUrls: ['app/employee/employeeList.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeeList.component.js.map