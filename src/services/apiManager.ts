import RestClient from './apiRequest';

// class ApiManager {
//   getUsers = (params: string) => {
//     return RestClient.getCall(params);
//   };
// }
// const Api = new ApiManager();
// export default Api;
// // export default ApiManager;

export const userApi = RestClient.getCall({url: String});

export const {useLazyFetchOneQuery} = userApi;
