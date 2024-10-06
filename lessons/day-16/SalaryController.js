class SalaryController {
    getTotalSalary(employeeList) {
        let totalSalary = 0;
        employeeList.array.forEach(function(Employee) {
            totalSalary += Employee.salary;
        });
        return totalSalary;
    }
}