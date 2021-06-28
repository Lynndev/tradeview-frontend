import { get_data } from "../../services/ApiService";


export async function get(params) {
    const response = await get_data("articles", params);
    return response.data;
}


export async function getEach(slug) {
    const response = await get_data("articles", { slug: slug });
    return response.data;
}
