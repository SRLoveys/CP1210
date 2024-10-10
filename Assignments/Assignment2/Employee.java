package ca.nl.cna.java.assignments;

/**
 * In-Class Assignment2 Oct 7th
 *
 * @author Steven Loveys
 */
public class Employee {
    private String firstName;
    private String lastName;
    private double annualSalary;

    /**
     * Basic constructor for the employee class, only sets salary if positive
     * @param firstName
     * @param lastName
     * @param annualSalary
     */
    public Employee(String firstName, String lastName, double annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        if(annualSalary > 0) {
            this.annualSalary = annualSalary;
        }
    }

    /**
     * Getter for the first name
     * @return firstName
     */
    public String getFirstName() {
        return firstName;
    }

    /**
     * Setter for the first name
     * @param firstName firstName
     */
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    /**
     * Getter for the last name
     * @return lastName
     */
    public String getLastName() {
        return lastName;
    }

    /**
     * Setter for the last name
     * @param lastName lastName
     */
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    /**
     * Getter for the salary
     * @return salary
     */
    public double getSalary() {
        return annualSalary;
    }

    /**
     * Enter rate of raise as a decimal, i.e: 8% would be entered as 0.08
     * @param percent
     */
    public void giveRaise(double percent) {
        annualSalary += annualSalary * percent;
    }
}


