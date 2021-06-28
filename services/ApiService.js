import apiClient from "../config/apiClient";

function setCompleteUrl(url, params) {
    //check if URL has params
    //loop params object keys and value and then added to api call URL
    if (params) {
        Object.keys(params).forEach((key) => {
            url = url + `?&${key}=${params[key]}`;
        });
    }
    return url;
}

export const post_data = async (url, params) => {
    let completeUrl = setCompleteUrl(url, params);
    const response = await apiClient.post(completeUrl);
    return response

}
export const get_data = async (url, params) => {
    let completeUrl = setCompleteUrl(url, params);
    const response = await apiClient.get(completeUrl);
    return response
}


