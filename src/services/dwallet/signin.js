import endpoints from "../../config";

async function signin (payload) {
    const response = await fetch (`${endpoints.BASE}${endpoints.POST_USER}`, {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : payload
    })
    const user = await response.json();
    return user;
}

export {signin};