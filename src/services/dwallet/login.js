import endpoints from "../../config";

async function login (payload) {
    const response = await fetch (`${endpoints.BASE}${endpoints.POST_LOGIN}`, {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify (payload)
    })
    const rsp = await response.json();
    
    if (response.status === 200) {
        return Promise.resolve (rsp);
    } else {
        return Promise.reject (rsp);
    }    
}

export {login};