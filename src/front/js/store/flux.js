const getState = ({ getStore, getActions, setStore }) => {
	const uri = "https://hierbabuenacr.herokuapp.com/api/";
	const token = localStorage.getItem("jwt-token");
	return {
		store: {
			Users: [],
			Productos: [],
			BuscarProductos: [],
			buscaActiva: false,
			BuscarPerfiles: [],
			buscaPerfilActiva: false,
			Perfiles: [],
			Provincias: [],
			Canton: [],
			Distrito: [],
			Perfil_Producto: [],
			mensaje: {},
			fotoPro: "",
			fotoVendor: "",
			nombre: "",
			precio: 0,
			nombpro: "",
			inicioSesion: false,
			precioTotal: 0,
			cantiCompra: 0,
			id_perfil_producto: 0,
			compras: [],
			comprasCanti: 0,
			userList: []
		},
		actions: {
			ApiData: async (url, metodo, body, tipo) => {
				const store = getStore();
				const headers = { "Content-type": "application/json" };
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

					const mensajeArray = Object.keys(json);

					if (mensajeArray[0] == "message") {
						setStore({ mensaje: json.message });
					} else {
						setStore({ mensaje: json });
					}
				}
			},

			ArrayUsers: arreglo => {
				const store = getStore();
				setStore({ Perfiles: arreglo });
				console.log(store.Perfiles);
			},

			BuscarProducto: nombre => {
				const store = getStore();
				setStore({ BuscarProductos: [] });
				const data = store.Productos;
				let datosFiltrados = data.filter(function(producto, index) {
					return producto.name.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
				});
				if (datosFiltrados.length > 0) {
					setStore({ BuscarProductos: datosFiltrados });
					setStore({ buscaActiva: true });
				} else {
					setStore({ buscaActiva: false });
				}
			},

			BuscarVendor: nombre => {
				const store = getStore();
				setStore({ BuscarPerfiles: [] });
				const data = store.Perfiles;
				let datosFiltrados = data.filter(function(vendedor, index) {
					return (
						(vendedor.name.toLowerCase() + " " + vendedor.lastname.toLowerCase()).indexOf(
							nombre.toLowerCase()
						) > -1
					);
				});
				if (datosFiltrados.length > 0) {
					setStore({ BuscarPerfiles: datosFiltrados });
					setStore({ buscaPerfilActiva: true });
				} else {
					setStore({ buscaPerfilActiva: false });
				}
			},

			CalculaPreciototal: (cantidad, precio) => {
				const store = getStore();
				//setStore({ cantiCompra: cantidad });
				setStore({ precioTotal: cantidad * precio });
			},

			ObtenerPerfil_Producto: id => {
				const store = getStore();
				setStore({ id_perfil_producto: id });
			},

			ActualizaFotos: (fpro, fven, nombre, precio) => {
				const store = getStore();
				setStore({ fotoPro: fpro });
				setStore({ fotoVendor: fven });
				setStore({ nombre: nombre });
				setStore({ precio: precio });
			},
			NombreProducto: nombre => {
				const store = getStore();
				setStore({ nombpro: nombre });
			},

			AgregaCompra: objCompra => {
				const store = getStore();
				let arr = store.compras;
				arr.push(objCompra);
				setStore({ compras: arr });
				let cantCompras = store.compras.length;
				setStore({ comprasCanti: cantCompras });
				//setStore({ compras: objCompra });
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			fetchUsers: async () => {
				const url = uri + "user/";
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
						password: newPassword
					}),
					redirect: "follow"
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
				return "Su sesi??n ha finalizado";
			},
			cargarPerfil: objPerfil => {
				const store = getStore();
				setStore({ perfil: objPerfil });
			}
		}
	};
};

export default getState;
