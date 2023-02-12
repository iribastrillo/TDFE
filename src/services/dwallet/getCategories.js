import endpoints from "../../config";


async function getCategories(payload) {
    let response = await fetch(`${endpoints.BASE}${endpoints.GET_CATEGORIES}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'apikey': payload.apiKey,
        },
    })
    const categories = await response.json();
    return categories;
}

export default getCategories;