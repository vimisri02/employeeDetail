import React, { useState, useEffect } from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeDetail from "./EmployeeDetail";

const MainComponent = () => {
  const [employee, setEmployee] = useState([]);
  const [editEmployee, setEditEmployee] = useState(null);
  const [deletedEmployee , setDeletedEmployee ] = useState(null);

  const [show, setShow] = useState(false)

  const handleClose =()=>{
    setEditEmployee(null)
    setShow(false)};
  const handleShow =() =>{setShow(true)};
  const handleFormSubmit = (data) => {
    if(editEmployee){
      const updatedData = employee.map((item)=> item.id ===editEmployee.id ?{...data, id:item.id}: item);
      setEmployee(updatedData);
      setEditEmployee(null)
    }else {
      setEmployee([...employee, {...data, id: employee.length+1}])    }
    setShow(false)
  };
  const handleEdit =(data) =>{
    setEditEmployee(data)
    setShow(true);
}

const handleDelete =(data) =>{
  setDeletedEmployee(data)
  if(deletedEmployee)setEmployee(employee.filter(item => item.id !== deletedEmployee.id))
}

useEffect(() => {
  if (editEmployee !== null) {
    setShow(true); // Open the modal only if there's data to edit
  }
}, [editEmployee]);
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center p-4 mt-3">
        <h4>Employee Form</h4>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleShow}
        >
          + Add Employee
        </button>
      </div>

      <EmployeeDetail data={employee}  onEdit={handleEdit}  onDelete={handleDelete}/>
      {show &&  <div
        className={`modal fade ${show ? "show" : ""}`} // Show modal if showModal is true
        style={{ display: show ? "block" : "none" }} // Show modal if showModal is true
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden={!show}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Employee Form</h5>
              <button
                type="button"
                className="close"
                onClick={handleClose}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <EmployeeForm onFormSubmit={handleFormSubmit} 
              editData={editEmployee}/>
            </div>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default MainComponent;
