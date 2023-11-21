import React ,{useState}from "react";



const AddContact = () => {

  const [newContact, setNewContact] = useState({});
  
	return (
        
        <div className="container mt-3">
        <h2 className="text-center">Add a new contact</h2>
        <form >
          <div className="formgroupInput1">
            <label for="fullName">Full Name</label>
            <input type="text" className="form-control" id="fullName" placeholder="Full Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter Email"/>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="text" className="form-control" id="phone" placeholder="Enter phone" />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" className="form-control" id="address" placeholder="Enter address" />
          </div>
      
          <button type="submit" className="btn btn-primary w-100 mt-3">
            Save
          </button>
        </form>
      </div>
	);
};

export default AddContact;
