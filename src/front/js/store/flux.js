const getState = ({ getStore, getActions, setStore }) => {
	const uri = "https://proyectofinal-hierbabuena.herokuapp.com/api/";
	return {
		store: {
			Users: [],
			Productos: [],
			Perfiles: [],
			Provincias: [],
			Canton: [],
			Distrito: [],
			Perfil_Producto: [],
			mensaje: []
		},
		actions: {
			ApiData: async (url, metodo = "GET", body = "", tipo, headers = { "Content-Type": "application/json" }) => {
				const store = getStore();
				if (metodo == "GET") {
					const dataApi = await fetch(uri + url, {
						method: metodo,
						headers: headers
					});
					const json = await dataApi.json();

					if (tipo == "users") {
						setStore({ Users: json });
					} else if (tipo == "productos") {
						setStore({ Productos: json });
					} else if (tipo == "perfiles") {
						setStore({ Perfiles: json });
					} else if (tipo == "provincias") {
						setStore({ Provincias: json });
					} else if (tipo == "canton") {
						setStore({ Canton: json });
					} else if (tipo == "distritos") {
						setStore({ Distrito: json });
					} else if (tipo == "perfil_productos") {
						setStore({ Perfil_Producto: json });
					}
				} else {
					const dataApi = await fetch(uri + url, {
						method: metodo,
						body: body,
						headers: headers
					});
					const json = await dataApi.json();
					setStore({ mensaje: json });
				}
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
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
