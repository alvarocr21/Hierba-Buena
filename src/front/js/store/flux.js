const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			userList: []
		},
		actions: {
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
