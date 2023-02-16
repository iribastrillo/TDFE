import endpoints from "../../config";

async function login (payload) {
    const response = await fetch (`${endpoints.BASE}${endpoints.POST_LOGIN}`, {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify (payload)
    })
    
    const data = await response.json();

    if (response.status === 200) {
        return Promise.resolve (data);
    } else {
        console.log (response);
        return Promise.reject (data);
    }    
}

export {login};