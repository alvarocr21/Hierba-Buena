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
			mensaje: [],
			fotoPro: "",
			nombre: ""
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
						setStore({ Users: json.Data });
					} else if (tipo == "productos") {
						setStore({ Productos: json.Data });
					} else if (tipo == "perfiles") {
						setStore({ Perfiles: json.Data });
					} else if (tipo == "provincias") {
						setStore({ Provincias: json.Data });
					} else if (tipo == "canton") {
						setStore({ Canton: json.Data });
					} else if (tipo == "distritos") {
						setStore({ Distrito: json.Data });
					} else if (tipo == "perfil_productos") {
						setStore({ Perfil_Producto: json.Data });
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
			fetchUsers: async () => {
				const url = "https://3001-maroon-whippet-miasctsa.ws-us03.gitpod.io/api/user/";
				const config = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(url, config);
				const json = await response.json();
				console.log(">>Data", json.Data);
				setStore({ userList: json.Data });
			},
			updatePassword: newPassword => {
				const requestOptions = {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						lastname: "Calvo Cruz",
						name: "Jose Andres",
						password: newPassword
					})
				};
				fetch("https://3001-maroon-whippet-miasctsa.ws-us03.gitpod.io/api/user/1", requestOptions)
					.then(response => response.json())
					.then(data => {});
			}
		}
	};
};

export default getState;
