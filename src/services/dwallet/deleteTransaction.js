import endpoints from "../../config";

const  deleteTransaction = async (payload) => {
    const response = await fetch(`${endpoints.BASE}${endpoints.DELETE_TRANSACTION}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'apikey': payload.apiKey,
        },
        body: JSON.stringify({
            "idMovimiento": payload.idMovimiento
        })

    })
    const data = await response.json()
    if(response.status === 200) {
        return data;
    } else {
        Promise.reject(data)
    }
}

export  {deleteTransaction}