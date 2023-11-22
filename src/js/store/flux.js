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
			contacts: [
				{
					full_name: "Vicky",
					email: "brown&white@.horse",
					Phone:"(0034) 012 768 917 ",
					Address:"The Green Mountain B"
				},
				{
					full_name: "Lola",
					email: "brown&white@.horse",
					Phone:"(0034) 012 768 917 ",
					Address:"The Green Mountain B"
					
				},
			
			]
		},
		
		actions: {
			// Use getActions to call a function within a fuction
          deleteContact:(indexToDelete)=>{
            console.log("deletAContact")
			//get the store
			const store = getStore()
            console.log(store.contacts)
		    console.log(store.contacts.filter((item, index)=>index!=indexToDelete))
			//setStore({ contacts:store.contacts.filter((item, index)=>index!=indexToDelete )})
			
           //una vez que traigo los contactos del API no me hace falta el setStore.contacts que era para traer los contactos quemados.

//Aquí va el fetch del API de DELETE dentro de la función deleteContact
			var raw = "";

			var requestOptions = {
			method: 'DELETE',
			body: raw,
			redirect: 'follow'
			};

			fetch("https://playground.4geeks.com/apis/fake/contact/" + indexToDelete , requestOptions)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log('error', error));


		  },



			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},




			loadSomeData: () => {

				setStore({ contacts:  [

					{
						full_name: "Vicky Star",
						email: "brown&white@.horse",
						Phone:"(0034) 012 768 917 ",
						Address:"The Green Mountain B"
					},
					{
						full_name: "Lola Star",
						email: "brown&white@.horse",
						Phone:"(0034) 012 768 917 ",
						Address:"The Green Mountain B"
						
					},
				
				]
				
				
				});

           		 fetch("https://playground.4geeks.com/apis/fake/contact/agenda/Mermate")
				 .then( (response)=>response.json())
				 .then( (data)=>setStore({ contacts: data }))


				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
