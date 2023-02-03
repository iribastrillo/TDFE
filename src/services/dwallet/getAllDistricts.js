import endpoints from "../../config";

async function getAllDistricts () {
    let response = await fetch (  `${endpoints.BASE}${endpoints.GET_DISTRICTS}`);
    let districts = await response.json();
    return districts;
}

export {getAllDistricts};