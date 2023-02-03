async function getCitiesInDistrict (id) {
    let response = await fetch ('https://dwallet.develotion.com//ciudades.php?' + new URLSearchParams ({
        idDepartamento: id
    }).toString());
    let districts = await response.json();
    return districts;
}

export {getCitiesInDistrict};