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

			CreateContact: () => {

						var myHeaders = new Headers();
						myHeaders.append("Content-Type", "application/json");

						var raw = JSON.stringify({
						"full_name": fullName,
						"email": email,
						"agenda_slug": "Mermate",
						"address": address,
						"phone": phone
						});

						var requestOptions = {
						method: 'POST',
						headers: myHeaders,
						body: raw,
						redirect: 'follow'
						};

						fetch("https://playground.4geeks.com/apis/fake/contact/", requestOptions)
						.then(response => response.json())
						.then(result => console.log(result))
						.catch(error => console.log('error', error));
						},


				//create a function to edit contact
				
			EditContact: () => {

				
			},
	


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

				//setStore({ contacts:  [

					//{
						//full_name: "Vicky Star",
						//email: "brown&white@.horse",
						//Phone:"(0034) 012 768 917 ",
						//Address:"The Green Mountain B"
					//},
					//{
						//full_name: "Lola Star",
						//email: "brown&white@.horse",
						//Phone:"(0034) 012 768 917 ",
						//Address:"The Green Mountain B"
						
					//},
				
				//]
				
				
				//});

		//GET traer agenda cuando se carga la página  dentro de (loadSomeData())
		
           		 fetch("https://playground.4geeks.com/apis/fake/contact/agenda/Mermate")
				 .then( (response)=>response.json())
				 .then( (data)=>setStore({ contacts: data }))


				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			//changeColor: (index, color) => {
				//get the store
				//const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				//const demo = store.demo.map((elm, i) => {
					//if (i === index) elm.background = color;
					//return elm;
				//});

				//reset the global store
				//setStore({ demo: demo });
			}
		}
	};
//};

export default getState;
