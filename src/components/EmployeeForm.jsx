import React, { useState, useEffect } from "react";
// Importing toastify module
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmployeeForm = ({ onFormSubmit, editData }) => {
  const [employee, setEmployee] = useState({
    fName: "",
    lName: "",
    emailAddress: "",
    password: "",
    confirmPasssword: "",
  });

  const handleClear = () => {
    setEmployee({
      fName: "",
      lName: "",
      emailAddress: "",
      password: "",
      confirmPasssword: "",
    });
  };

  const handlefNameChange = (e) => {
    setEmployee({ ...employee, fName: e.target.value });
  };

  const handlelNameChange = (e) => {
    setEmployee({ ...employee, lName: e.target.value });
  };

  const handleEmailAddressChange = (e) => {
    setEmployee({ ...employee, emailAddress: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setEmployee({ ...employee, password: e.target.value });
  };

  const handleConfirmPassswordChange = (e) => {
    setEmployee({ ...employee, confirmPasssword: e.target.value });
  };

  const handleSubmit = (e) => {
    //prevents page reloading browser behaviour
    e.preventDefault();
    if (employee.password === employee.confirmPasssword) {
      editData
        ? onFormSubmit({ ...employee, id: editData.id })
        : onFormSubmit(employee);
    }else {
      toast.error("password and confirm password should be same!");
    }
  };
  useEffect(() => {
    if (editData !== null) {
      setEmployee({
        fName: editData.fName,
        lName: editData.lName,
        emailAddress: editData.emailAddress,
        password: editData.password,
        confirmPasssword: editData.confirmPasssword,
      });
    }
  }, [editData]);
  return (
    
    <div className="border border-2 border-primary p-3">
       <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputFName" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputFName"
            value={employee.fName}
            onChange={handlefNameChange}
            aria-describedby="fNameHelp"
            required
          />
          <div id="fNameHelp" className="form-text">
            Please enter your first name
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputLName" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputLName"
            value={employee.lName}
            onChange={handlelNameChange}
            aria-describedby="lNameHelp"
            required
          />
          <div id="fNameHelp" className="form-text">
            Please enter your last name
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            value={employee.emailAddress}
            onChange={handleEmailAddressChange}
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword"
            value={employee.password}
            onChange={handlePasswordChange}
            aria-describedby="passwordHelp"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          />
          <div id="passwordHelp" className="form-text">
            Password must contain at least one number and one uppercase and
            lowercase letter, and at least 8 or more characters
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputCPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputCPassword"
            value={employee.confirmPasssword}
            onChange={handleConfirmPassswordChange}
            aria-describedby="cPasswordHelp"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          />
          <div id="cPasswordHelp" className="form-text">
            Confirm password must contain at least one number and one uppercase
            and lowercase letter, and at least 8 or more characters
          </div>
        </div>
        <button type="submit" className="btn btn-success m-1">
          Submit
        </button>

        <button
          type="button"
          className="btn btn-secondary m-1"
          onClick={handleClear}
        >
          Clear
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
