import React ,{useState, useContext}from "react";
import {Context} from "../store/appContext.js"

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";



export const EditContact = () => {
  
  const {store, actions}=useContext(Context)

  
  const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
    

	const [inputValue, setInputValue] = useState([]);

  // funcion handleEditContact para llamar a la funcion que realiza el PUT en flux. 

  const handleEditContact = () => {
		actions.editContact({
      
			full_name: fullName,
			email: email, 
			phone: phone,
			address: address,
	});
};
 
  
  return(

    <div className="container mt-3">
    <h2 className="text-center">Edit contact</h2>

    <form >

      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input
            onChange={ (e)=> setFullName(e.target.value)}
            value={fullName}

            type="text" 
            className="form-control" 
            id="fullName" 
            placeholder="Full Name" />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
            onChange={(e)=> setEmail(e.target.value)}
            value={email}

            type="email" 
            className="form-control" 
            id="email"
            placeholder="Enter Email"/>
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input 
             onChange={(e)=> setPhone(e.target.value)}
             value={phone}
 
            type="text"
            className="form-control" 
            id="phone"
            placeholder="Enter phone" />
      </div>

      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input 
           onChange={(e)=> setAddress(e.target.value)}
           value={address}

          type="text" 
          className="form-control"
          id="address"
          placeholder="Enter address" />
      </div>
  
      <button onClick={() => handleEditContact()}
				      type="button" className="btn btn-primary w-100 mt-3">
        Edit
      </button>
    </form>
  </div>
);
};


