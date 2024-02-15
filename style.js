// Define an object template for an employee
function Employee(name, age, department, salary) {
    this.name = name;
    this.age = age;
    this.department = department;
    this.salary = salary;
}

// Define sample employee data
const employees = [
    new Employee('John Doe', 30, 'HR', 50000),
    new Employee('Jane Smith', 35, 'Engineering', 60000),
    new Employee('Tom Brown', 40, 'Finance', 70000),
    new Employee('Alice Johnson', 25, 'HR', 55000),
];

// Function to display employees in the UI
function displayEmployees(employees) {
    const table = document.getElementById('employees');
    table.innerHTML = '';
    
    const headerRow = table.insertRow();
    headerRow.innerHTML = '<th>Name</th><th>Age</th><th>Department</th><th>Salary</th>';
    
    employees.forEach(employee => {
        const row = table.insertRow();
        row.innerHTML = `<td>${employee.name}</td><td>${employee.age}</td><td>${employee.department}</td><td>${employee.salary}</td>`;
    });
}

// Function to calculate average salary of employees
function calculateAverageSalary() {
    const totalSalary = employees.reduce((acc, employee) => acc + employee.salary, 0);
    const avgSalary = totalSalary / employees.length;
    alert(`Average Salary: $${avgSalary.toFixed(2)}`);
}

// Function to filter employees by department
function filterByDepartment() {
    const department = document.getElementById('department').value;
    const filteredEmployees = department ? employees.filter(employee => employee.department === department) : employees;
    displayEmployees(filteredEmployees);
}

// Function to increase salary for employees
function increaseSalary() {
    const percentage = parseFloat(prompt("Enter percentage increase:"));
    if (!isNaN(percentage)) {
        employees.forEach(employee => {
            employee.salary *= (1 + percentage / 100);
        });
        displayEmployees(employees);
    } else {
        alert("Invalid input. Please enter a valid percentage.");
    }
}

// Function to sort employees by age
function sortEmployeesByAge() {
    const sortedEmployees = employees.slice().sort((a, b) => a.age - b.age);
    displayEmployees(sortedEmployees);
}

// Initial display of employees
displayEmployees(employees);
