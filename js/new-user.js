const formularioCadastro = document.getElementById("form-cadastro");


formularioCadastro.addEventListener("submit", (event) => {
    
    let data = new FormData(event.target);
    data = [...data.entries()]
    const result = {}
    data.forEach(item => {
        result[item[0]] = item[1]
    })
    
    let usuarios = getObjectLocalStorage("navers");
    usuarios.push(result);
    setObjectLocalStorage('navers', usuarios);

    history.back();

})

function setObjectLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getObjectLocalStorage(key){
    var value = localStorage.getItem(key);
    return value && JSON.parse(value);
}