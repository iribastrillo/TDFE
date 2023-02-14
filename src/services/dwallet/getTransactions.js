import endpoints from "../../config";


async function getTransactions (payload) {

    const response = await fetch (`${endpoints.BASE}${endpoints.GET_TRANSACTIONS}${payload.id}`, {
        method : 'GET',
        headers : {
            'Content-Type' : 'application/json',
            'apikey' : payload.apiKey
        },
    })
    const transactions = await response.json ();
    return transactions;
}

export default getTransactions;