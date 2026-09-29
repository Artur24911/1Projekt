function onloadFunc(){
    console.log("test");
    loadData("");
}   

const BASE_URL = "https://remotestorage-22855-default-rtdb.europe-west1.firebasedatabase.app/"

async function loadData(path="") {
    let response = await fetch(BASE_URL + path + ".json");
    let responseToJson = await response.json();    
    console.log(responseToJson);  
}
