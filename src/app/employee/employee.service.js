"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeService = /** @class */ (function () {
    function EmployeeService() {
    }
    EmployeeService.prototype.getEmployees = function () {
        return [
            { code: 'emp01', name: 'Gaurav', gender: 'Male', annualSalary: 9999999999, dateOfBirth: '02/04/1989' },
            { code: 'emp02', name: 'Rajat', gender: 'Female', annualSalary: 9837292, dateOfBirth: '05/06/1991' },
            { code: 'emp03', name: 'Raghu', gender: 'Male', annualSalary: 872323, dateOfBirth: '03/04/1989' },
            { code: 'emp04', name: 'Umang', gender: 'Female', annualSalary: 972372, dateOfBirth: '05/05/1985' },
            { code: 'emp06', name: 'Ishan', gender: 'Female', annualSalary: 784342, dateOfBirth: '05/12/1989' },
        ];
    };
    EmployeeService = __decorate([
        core_1.Injectable()
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map