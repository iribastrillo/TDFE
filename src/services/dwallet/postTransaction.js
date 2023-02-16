import endpoints from "../../config";

async function addTransaction(payload) {
    const response = await fetch(`${endpoints.BASE}${endpoints.POST_TRANSACTION}`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'apikey': payload.apiKey,
        },
        body: JSON.stringify({
            "idUsuario": payload.idUsuario,
            "concepto": payload.concepto,
            "categoria": payload.categoria,
            "total": payload.total,
            "medio": payload.medio,
            "fecha": payload.fecha,
        })
    });

    const transaction = await response.json();
    return transaction;
}

export {addTransaction};
