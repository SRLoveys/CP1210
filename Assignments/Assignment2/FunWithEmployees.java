package ca.nl.cna.java.assignments;

import java.util.Scanner;

public class FunWithEmployees {
    public static void main(String[] args) {
        double salaryTotal = 0;
        int employeeCounter = 0;
        int NUM_EMPLOYEES = 3;

        System.out.println("Fun with employees");

        while (employeeCounter < NUM_EMPLOYEES) {
            employeeCounter = employeeCounter + 1;

            Scanner input = new Scanner(System.in);

            System.out.println("Enter employee's first name: ");
            String firstName = input.nextLine();

            System.out.println("Enter employee's last name: ");
            String lastName = input.nextLine();

            System.out.println("Enter employee's salary: ");
            double annualSalary = input.nextDouble();

            Employee newEmployee = new Employee(firstName, lastName, annualSalary);

            newEmployee.giveRaise(0.08);

            System.out.printf("Employee information:\n%s %s %.2f\n",
                    newEmployee.getFirstName(),
                    newEmployee.getLastName(),
                    newEmployee.getSalary());

            salaryTotal += newEmployee.getSalary();
        }
        System.out.printf("\nAverage salary: %.2f", (salaryTotal / NUM_EMPLOYEES));
    }
}
