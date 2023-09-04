const conteudoContainer = document.getElementById("content");

let usuarios = getObjectLocalStorage("navers");
if (usuarios === null){
    usuarios = [{nome: "Ricart", cargo: "Professor", idade:96, tempoDeEmpresa: 58, projetos: "Emrchiever, Wippy Pay, Project X, Sick Kids, Brain", imagem: "https://avatars.githubusercontent.com/u/38226399?v=4"}, {nome: "Ricart", cargo: "Professor", idade:96, tempoDeEmpresa: 58, projetos: "Emrchiever, Wippy Pay, Project X, Sick Kids, Brain", imagem: "https://avatars.githubusercontent.com/u/38226399?v=4"}, {nome: "Ricart", cargo: "Professor", idade:96, tempoDeEmpresa: 58, projetos: "Emrchiever, Wippy Pay, Project X, Sick Kids, Brain", imagem: "https://avatars.githubusercontent.com/u/38226399?v=4"}, {nome: "Ricart", cargo: "Professor", idade:96, tempoDeEmpresa: 58, projetos: "Emrchiever, Wippy Pay, Project X, Sick Kids, Brain", imagem: "https://avatars.githubusercontent.com/u/38226399?v=4"}]
}


window.addEventListener("load", () => {
    usuarios.forEach(item => {
        conteudoContainer.appendChild(createCard(item))
    })
})

const createCard = (usuario) => {
    const img = document.createElement("img");
    img.src = usuario.imagem;
    img.alt = `Foto do usuário ${usuario.nome}`
    img.width = "300";
    img.height = "300";

    const nome = document.createElement("p");
    nome.innerText = usuario.nome
    nome.classList.add("negrito")


    const cargo = document.createElement("p");
    cargo.innerText = usuario.cargo

    const container = document.createElement("div");

    container.appendChild(img)
    container.appendChild(nome)
    container.appendChild(cargo)
    
    return container    
}

function setObjectLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getObjectLocalStorage(key){
    var value = localStorage.getItem(key);
    return value && JSON.parse(value);
}