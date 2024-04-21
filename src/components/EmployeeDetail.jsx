const EmployeeDetail = ({ data, onEdit,onDelete }) => {

  return (
    <div>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email Address</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((formData, index) =>(
          <tr key={index}>
            <th scope="row">{index+1}</th>
            <td>{formData.fName}</td>
            <td>{formData.lName}</td>
            <td>{formData.emailAddress}</td>
            <td><button className='btn btn-success' onClick={() =>onEdit(formData)}>Edit</button></td>
            <td><button className='btn btn-danger' onClick={() => onDelete(formData)}>Delete</button></td>
          </tr>))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeDetail;
