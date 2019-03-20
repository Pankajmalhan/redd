import StorageManager from "./StorageManager";
import {API_PATH,SERVER_TOKEN} from "../constants/Global";
// import ServiceHandler from "../ServiceLayer/ServiceHandler";
import * as NetworkUtil from "../utils/NetworkUtil";
import { ToastAndroid } from 'react-native'


class Api {
    static headers() {
        return {
            Accept: "application/json",
            "Content-Type": "application/json",
            dataType: "json"
        };
    }

    static getApiPath=(apiName)=>{
        return API_PATH.replace('##',apiName)
    }

    static async get(route, callbacks) {
        return Api.xhr(route, null, "GET", callbacks);
    }

    static put(route, params, callbacks) {
        return Api.xhr(route, params, "PUT", callbacks);
    }

    static async post(route, params) {
        console.log("pankaj",params)
        return Api.xhr(route, params, "POST");
    }

    static delete(route, params, callbacks) {
        return Api.xhr(route, params, "DELETE", callbacks);
    }

    static async upload(route, params, resetParam, isMultiUpload = false) {
        // const serviceHandler = new ServiceHandler();
        // return new Promise((resolve, reject) => {
        //     serviceHandler.executeNetworkRequest(
        //         route,
        //         {
        //             body: params,
        //             success_callback(data) {
        //                 if (params.success_callback) {
        //                     params.success_callback({
        //                         status: 200,
        //                         data
        //                     });
        //                 }
        //                 resolve({
        //                     status: 200,
        //                     data
        //                 });
        //             },
        //             failure_callback(data) {
        //                 if (params.failure_callback) {
        //                     params.failure_callback({
        //                         status: 500
        //                     });
        //                 }
        //                 reject({
        //                     status: 500
        //                 });
        //             }
        //         },
        //         resetParam,
        //         isMultiUpload
        //     );
        // });
    }

    static async xhr(route, params, verb, callbacks) {
        try {
            const network = await NetworkUtil.getCurrentNetworkStatus();
            if (network && network.type === "none") {
                ToastAndroid.show('Device is not connected to internet', ToastAndroid.LONG);
            }
            const url = Api.getApiPath(route);
            const body=Object.assign(params,{
                ServerToken:SERVER_TOKEN
            });
            console.log({body});
            let options = Object.assign(
                { method: "POST" },{ body: JSON.stringify(body) }
            );
            const authToken = await StorageManager.getItem('UserToken');
            // options.headers = Object.assign(Api.headers(), {
            //     authorization: authToken
            // });
            const response = await fetch(url, options);
            const result = await response.json();
            return result;
        }
        catch (error) {
            console.log({error});
        }



    }

}

export default Api;
