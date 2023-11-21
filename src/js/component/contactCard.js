import React ,{useState}from "react";

const CardContact =()=>{

  const [contacts, setContacts] = useState([]);


    return(

<div className="card m-3" >
	<div className="row g-0">
    <div className="col-md-4 d-flex justify-content-center">
      <img src="https://picsum.photos/id/127/200/200" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <div className="card-title">
			<span><h5>Rubio Star</h5></span>
			<span><i class="fa-solid fa-pencil" style={{color: "#000000;"}}></i></span>
			<span><i class="fa-solid fa-trash" style={{color: "#000000;"}}></i></span>
		
		</div>
        <p className="card-text">Bimenes Mountain </p>
        <p className="card-text">(0034)232 678 341 </p>
        <p className="card-text"><small className="text-body-secondary">RubioStar@thecuestesthorse.es</small></p>
      </div>
    </div>
  </div>
</div>
    )
}

export default CardContact;