import React ,{useState}from "react";

const CardContact =(props)=>{

  const [contacts, setContacts] = useState([]);


    return(

<div className="card m-5" >
    <div className="row g-0">
      <div className="col-md-2 d-flex justify-content-center">
        <img src="https://picsum.photos/id/127/150/150" alt="..." />
      </div>
      <div className="col-md-10">
        <div className="card-container">
          <div className="card-title mt-4">
              <span><h4>{props.full_name}</h4></span>
             
          </div>
          
          <div className="card-text mt-3">{props.email} </div>
          <div className="card-text"><small className="text-body-second">{props.phone}</small> </div>
          <div className="card-text"><small className="text-body-third">{props.address}</small></div>
      
        </div>
      </div>
    </div>
  </div>

    )
}

export default CardContact;