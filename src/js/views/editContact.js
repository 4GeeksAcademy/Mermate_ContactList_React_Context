import React ,{useState, useContext}from "react";
import {Context} from "../store/appContext.js"

import "../../styles/home.css";
import { useParams } from "react-router";
import { Link } from "react-router-dom";



export const EditContact = () => {
  
  const {store, actions}=useContext(Context)

  
  const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
  
  const { idcontact} = useParams();

	const [inputValue, setInputValue] = useState([]);

  const GetId = () =>{
		console.log(`El id del elemento es ----->${idcontact}`)
	}

  // funcion handleEditContact para llamar a la funcion que realiza el PUT en flux. 

  const handleEditContact = (id) => {
		actions.editContact({
      
			full_name: fullName,
			email: email, 
			phone: phone,
			address: address,
	}, idcontact );

    setFullName("");
    setEmail("");
    setPhone("");
    setAddress("");
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
            placeholder="Full Name" />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
            onChange={(e)=> setEmail(e.target.value)}
            value={email}
            type="email" 
            className="form-control" 
            
            placeholder="Enter Email"/>
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input 
             onChange={(e)=> setPhone(e.target.value)}
             value={phone}
             type="text"
            className="form-control" 
           
            placeholder="Enter phone" />
      </div>

      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input 
           onChange={(e)=> setAddress(e.target.value)}
           value={address}
          type="text" 
          className="form-control"
          
          placeholder="Enter address" />
      </div>
  
      <button onClick={() => handleEditContact()}
				      type="button" className="btn btn-primary w-100 mt-3">
        Edit
      </button>
      
    </form>
    <div>
    <Link to="/">
				<p>Or get back to contacts</p>
			</Link>
    </div>
  </div>
  
);
};


