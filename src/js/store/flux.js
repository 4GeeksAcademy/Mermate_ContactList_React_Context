const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"	
				},
				{
					title: "THIRD",
					background: "white",
					initial: "white"	
				}
			],
			contacts: []
		},
		
		actions: {
			// Use getActions to call a function within a fuction

			//create a function to create a new contact and send it to the API

			// cambiamos los elementos del body para que sean dinamicos y coja los valores de los inputs del formulario. 
			//el parametro de la funcion es newContact, esto serian los valores de los inputs.
 
				createContact(newContact) {
					const requestOptions = {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
					"full_name": newContact.full_name,
					"email": newContact.email,
					"agenda_slug": "Mermate",
					"address":newContact.address,
					"phone":newContact.phone,
					})
					};

						fetch("https://playground.4geeks.com/apis/fake/contact/", requestOptions)
						.then(response => response.json())
						.then(result => console.log(result))
						.catch(error => console.log('error', error));
						},


				//create a function to edit contact
		
				editContact() {
					
						},
	
			// function to delete contact

          deleteContact:(indexToDelete)=>{
           

			//Aquí va el fetch del API de DELETE dentro de la función deleteContact
			var raw = "";

			var requestOptions = {
			method: 'DELETE',
			body: raw,
			redirect: 'follow'
			};

			fetch("https://playground.4geeks.com/apis/fake/contact/" + indexToDelete , requestOptions)
			.then(response => response.json())
			.then(result => console.log(result))
			.catch(error => console.log('error', error));

//incluimos el fetch de GET  traer la agenda para que se nos vuelva a cargar la agenda actualizada después de eliminar contactos.
			fetch("https://playground.4geeks.com/apis/fake/contact/agenda/Mermate")
			.then( (response)=>response.json())
			.then( (data)=>setStore({ contacts: data }))

		  },





			//exampleFunction: () => {
				//getActions().changeColor(0, "green");
			//},




			loadSomeData: () => {

			

		//GET traer agenda cuando se carga la página  dentro de (loadSomeData())
		
           		 fetch("https://playground.4geeks.com/apis/fake/contact/agenda/Mermate")
				 .then( (response)=>response.json())
				 .then( (data)=>setStore({ contacts: data }))


				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			

				//reset the global store
				//setStore({ demo: demo });
			}
		}
	};
//};

export default getState;
