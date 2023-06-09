import axios from "axios";

const REST_API = axios.create({
	baseURL: "http://localhost:8000",
	headers: { token: localStorage.getItem("token") },
});

// const REST_API = {
// 	get: async (url, headers = {}) => {
// 		try {
// 			const { data: result } = await AXIOS({ url, method: "GET", headers });
// 			return result;
// 		} catch (error) {
// 			toast.error(error.message);
// 			console.log(error);
// 		}
// 	},
// 	post: async (url, data, headers = {}) => {
// 		try {
// 			const { data: result } = await AXIOS({
// 				url,
// 				data,
// 				method: "POST",
// 				headers,
// 			});
// 			return result;
// 		} catch (error) {
// 			toast.error(error.message);
// 			console.log(error);
// 		}
// 	},
// 	patch: async (url, data, headers) => {
// 		try {
// 			const { data: result } = await AXIOS({
// 				url,
// 				data,
// 				method: "PATCH",
// 				headers,
// 			});
// 			return result;
// 		} catch (error) {
// 			toast.error(error.message);
// 			console.log(error);
// 		}
// 	},
// 	delete: async (url, data, headers) => {
// 		try {
// 			const { data: result } = await AXIOS({
// 				url,
// 				data,
// 				method: "DELETE",
// 				headers,
// 			});
// 			return result;
// 		} catch (error) {
// 			toast.error(error.message);
// 			console.log(error);
// 		}
// 	},
// };

export default REST_API;
