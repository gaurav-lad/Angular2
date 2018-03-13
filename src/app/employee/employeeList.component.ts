import { Component } from '@angular/core'

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css']
})
export class EmployeeListComponent {
    employees: any[];

    constructor() {
        this.employees = [
            { code: 'emp01', name: 'Gaurav', gender: 'Male', annualSalary: 9999999999, dateOfBirth: '02/04/1989' },
            { code: 'emp02', name: 'Rajat', gender: 'Female', annualSalary: 9837292, dateOfBirth: '05/06/1991' },
            { code: 'emp03', name: 'Raghu', gender: 'Male', annualSalary: 872323, dateOfBirth: '03/04/1989' },
            { code: 'emp04', name: 'Umang', gender: 'Female', annualSalary: 972372, dateOfBirth: '05/05/1985' },
        ];
    }

    getEmployees(): void {
        this.employees = [
            { code: 'emp01', name: 'Gaurav', gender: 'Male', annualSalary: 9999999999, dateOfBirth: '02/04/1989' },
            { code: 'emp02', name: 'Rajat', gender: 'Female', annualSalary: 9837292, dateOfBirth: '05/06/1991' },
            { code: 'emp03', name: 'Raghu', gender: 'Male', annualSalary: 872323, dateOfBirth: '03/04/1989' },
            { code: 'emp04', name: 'Umang', gender: 'Female', annualSalary: 972372, dateOfBirth: '05/05/1985' },
            { code: 'emp05', name: 'Dhaval', gender: 'Male', annualSalary: 862382, dateOfBirth: '02/07/1990' },
            { code: 'emp06', name: 'Ishan', gender: 'Female', annualSalary: 784342, dateOfBirth: '05/12/1989' },
        ];
    }

    trackByEmpCode(index: number, employee: any): string {
        return employee.code;
    }
}