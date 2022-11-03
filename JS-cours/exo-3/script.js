document.getElementById('testPromise').addEventListener('click', () => {
    testPromise()
});

function testPromise() {
    console.log("1");

    const promise = new Promise((resolve, reject) => {
        console.log("2");
        setTimeout(() => {
            if(Math.floor(Math.random()*2)===1) {
                resolve("3");
            }
            reject ("R3");
        }, Math.random() * 2000 + 1000);
    });

    promise.then(value => {
        console.log(value);
    })
    .catch(value => {
        console.log(value);
    })
    
    console.log("4")

}


// testGetToken 

document.getElementById('testGetToken').addEventListener('click', () => {
    testGetToken()
});

function getToken() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           if(Math.random() > 0.5) {
               resolve(token = 'qsdfEDLSoie5d8899;dEDd');
           } else {
               reject(er = "Vous n'avez pas le bon token");
           }
        }), 2000;
    })
 
}


function testGetToken() {
    getToken()
    .then
    (token=>console.log(token))
    .catch
    (er=>console.log(er));
}


// getUser
document.getElementById('testGetUser').addEventListener('click', () => {
    testGetUser()
});

function getUser(token) {

    return new Promise((res, rej) => {
        setTimeout (() => {
            if(Math.random() > 0.5) {
                res(user = {id:1, token: token})
            } else {
                rej(er = "Pas d'user")
            }
        }), 2000
    })
}

function testGetUser() {
    getToken()
    .then(
        token => {
            getUser(token)
            .then(value => console.log(value))
            .catch(er => console.log(er))
        })
    .catch (
        er => console.log(er)
    )
}


//getTokenUser
document.getElementById('getTokenUser').addEventListener('click', () => {
    getTokenUser()
});

async function getTokenUser() {
    try {
        const token = await getToken()
        console.log(token)
        const user = await getUser(token)
        console.log(user)
    }
    catch(err) {
        console.log(err);
    }
}