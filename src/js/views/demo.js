import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	function deleteContact(indexToDelete){
		console.log("deleteContact"+indexToDelete)
		console.log(store.contacts)
		console.log(store.contacts.filter((item, index)=>index!=indexToDelete))
	}
	return (
		<div className="container">
			<ul className="list-group">
				{store.demo.map((item, index) => {
				})}
				{store.contacts.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between">
							
							{item.full_name}
							<br></br>
							{item.email}
							<br></br>
							{item.Phone}
							<br></br>
							{item.Address}

							<button onClick={()=>actions.deleteContact(index)}>X</button>
							
						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<p>Or get back to contacts</p>
			</Link>
		</div>
	);
};
