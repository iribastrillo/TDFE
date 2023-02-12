import endpoints from "../../config";

async function login (payload) {
    const response = await fetch (`${endpoints.BASE}${endpoints.POST_LOGIN}`, {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify (payload)
    })
    const user = await response.json();
    return user;
}

export {login};