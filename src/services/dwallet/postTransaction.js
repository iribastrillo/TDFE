import endpoints from "../../config";

async function addTransaction(payload) {

    const response = fetch(`${endpoints.BASE}${endpoints.POST_TRANSACTION}`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'apikey': payload.apiKey,
        },
        body: payload
    })

    const transaction = await response.json();
    return transaction
};

export {addTransaction};