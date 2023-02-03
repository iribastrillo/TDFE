async function getCitiesInDistrict (district) {
    let response = await fetch ('https://dwallet.develotion.com//departamentos.php');
    let districts = await response.json();
    return districts;
}

export {getCitiesInDistrict};