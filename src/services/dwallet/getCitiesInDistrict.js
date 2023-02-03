import endpoints from "../../config";

async function getCitiesInDistrict (id) {
    let response = await fetch (`${endpoints.BASE}${endpoints.GET_CITIES}?` + new URLSearchParams ({
        idDepartamento: id
    }).toString());
    let districts = await response.json();
    return districts;
}

export {getCitiesInDistrict};