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
			setStore({ contacts:store.contacts.filter((item, index)=>index!=indexToDelete )})

		  },



			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},




			loadSomeData: () => {
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
