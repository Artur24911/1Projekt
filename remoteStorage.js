function onloadFunc(){
    console.log("test");
    putData("name,{email:asdjbasd@web.com}");
}   

const BASE_URL = "https://remotestorage-22855-default-rtdb.europe-west1.firebasedatabase.app/"

async function loadData(path="") {
    let response = await fetch(BASE_URL + path + ".json");
    return responseToJson = await response.json();      
}

async function postData(path="", data={}) {
    let response = await fetch(BASE_URL + path + ".json",{
        method: "Post",
        header: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data);
    });
    return responseToJson = await response.json();      
}

async function deleteData(path="") {
    let response = await fetch(BASE_URL + path + ".json",{
        method: "DELETE",
    });
    return responseToJson = await response.json();      
}

async function putData(path="", data={}) {
    let response = await fetch(BASE_URL + path + ".json",{
        method: "PUT",
        header: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    return responseToJson = await response.json();      
}




// push elements


let users = [];

async function onloadFunc() {
    let userResponse = await getAllUsers("namen");
    
    let userKeysArray = Object.keys(userResponse);

    for (let index = 0; index < userKeysArray.length; index++) {
        userKeysArray.push(
            {
                id : userKeysArray[index],
                user : userResponse[userKeysArray[index]],
            }
        )
    }
    await addEditSingleUser(users[2].id,{name:'Schmandy'})

    console.log(users);
}

async function putData(path="", data={}) {
    
}

async function addEditSingleUser(id=44, user={name: 'Kevin'}) {
    putData(`namen/${id}`, user);
}

async function getAllUsers(path) {
    let response = await fetch(BASE_URL + path + ".json");
    return responseToJson = await response.json();
}