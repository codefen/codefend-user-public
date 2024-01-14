import axios from "axios";
import toast from "solid-toast";

import { getCustomBaseAPi, getToken } from "../../utils/helper"
import { baseUrl } from "../../utils/config";
import createModal from '../../Store/modal'
const { setShowModal, showModal, setShowModalStr } =
    createModal



/** Fetch API Resources */
export const fetchFromApi = async ({
    method = "post",
    path,
    body,
    headers = {},
    params,
}) => {
    let token = getToken();
    const customAPi = getCustomBaseAPi()
    const _baseUrl = customAPi ? customAPi : baseUrl
    // console.log(body)
    const url = path ? `${_baseUrl}${path}` : _baseUrl;

    // console.log({ baseUrl, customAPi, url, _baseUrl })
    const requestConfig = {
        url,
        method,
    };

    if (method !== "get" && body) requestConfig.data = body;
    if (params) requestConfig.params = params;
    if (token) requestConfig.params = { ...params, session: token }

    if (headers)
        requestConfig.headers = {
            ...requestConfig.headers,
            //...headers,
            'Content-Type': 'application/x-www-form-urlencoded'
        };

    return axios(requestConfig);
};



/** Handle fetch error response */
export const handleFetchError = (error) => {
    console.log({ errorName: error.name, errorMessage: error.message });
    if (error.name === 'AxiosError' && error.message === 'Network Error') {
        setShowModal(true);
        setShowModalStr("error_connection");
        return
    }

    if (error.response?.data) {
        const message = error.response.data.message
        console.log(error.response.data);
        message && toast.error(message);
    }
    throw error
};


/** Handle Response Type  */
export const isSuccessResponse = (data) => {
    if (typeof (data) === 'string') return false
    if (!data.response) return false

    if (data.response === 'success') {
        data.message && toast.success(data.message)
        return true
    }
    else if (data.response === 'error') {
        data.message && toast.error(data.message)
        return false

    }
    return false
}



