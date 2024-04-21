**Employee Management System**


This project is a simple Employee Management System built using React. It allows users to add, edit, and delete employee information through a user-friendly interface.

**Features**


Add Employee: Users can add new employees to the system by filling out a form with their details such as first name, last name, email address, password, and confirm password.
Edit Employee: Existing employee information can be edited easily. Users can update employee details through the same form used for adding employees.
Delete Employee: Employees can be removed from the system with a simple click of a button.
Clear Form: Users have the option to clear the form fields if they want to start over or make corrections.

**Components**

**MainComponent**

  Description: This component serves as the main interface for the Employee Management System. It includes the employee form for adding and editing employees, as well as a list of employees displayed in a table format.
  Dependencies: Utilizes the useState and useEffect hooks from React for managing state and side effects.
  Functionality: Allows users to add, edit, and delete employee information. It also controls the modal for displaying the employee form.
  
**EmployeeDetail**

  Description: This component displays the list of employees in a table format. It includes buttons for editing and deleting each employee.
  Dependencies: Receives props from the MainComponent to display employee data and handle edit/delete actions.
  
**EmployeeForm**

  Description: This component provides a form for adding and editing employee information. It includes input fields for first name, last name, email address, password, and confirm password.
  Dependencies: Utilizes the useState hook for managing form state and handles form submission.
  
**Usage**

  Clone the repository to your local machine.
  Navigate to the project directory.
  Install dependencies using npm install.
  Run the application using npm start.
  Access the application in your web browser at http://localhost:3000.
  
**Technologies Used**

  React: Frontend JavaScript library for building user interfaces.
  HTML/CSS: Markup and styling languages for structuring and designing the user interface.
  Bootstrap: CSS framework for responsive design and pre-styled components.
  JavaScript: Programming language used for interactivity and logic within the application.


Employee details component
![image](https://github.com/vimisri02/employeeDetail/assets/166305564/3669a65e-28e3-4671-a0ec-43338ab8a7f5)

Employee Add/Edit 
![image](https://github.com/vimisri02/employeeDetail/assets/166305564/f0908456-efdf-4d67-8419-c5109ac35c62)

