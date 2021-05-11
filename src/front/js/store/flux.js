const getState = ({ getStore, getActions, setStore }) => {
	//const uri = "https://proyectofinal-hierbabuena.herokuapp.com/api/";
	const uri = "https://3001-maroon-boa-3ooyep13.ws-us04.gitpod.io/api/";
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
			nombre: "",
			inicioSesion: false
		},
		actions: {
			ApiData: async (url, metodo = "GET", body = "", tipo, headers) => {
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

			fetchUsers: async () => {
				const url = uri + "/user/";
				const config = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(url, config);
				const json = await response.json();
				setStore({ userList: json.Data });
			},
			updatePassword: (newPassword, id) => {
				const requestOptions = {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						lastname: "Calvo Cruz",
						name: "Jose Andres",
						password: newPassword
					})
				};
				fetch(uri + "user/" + id.toString(), requestOptions)
					.then(response => response.json())
					.then(data => {});
			},
			login: resp => {
				const store = getStore();
				resp ? setStore({ inicioSesion: true }) : null;
			},
			logout: () => {
				setStore({ inicioSesion: false });
				alert("Su sesión ha finalizado");
			}
		}
	};
};

export default getState;
