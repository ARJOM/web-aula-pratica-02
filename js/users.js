const conteudoContainer = document.getElementById("content");
const modal = document.getElementById("detailNaver");
const fecharModal = document.getElementById("close");

fecharModal.addEventListener("click", () => {
    modal.close();
})

let usuarios = getObjectLocalStorage("navers");
if (usuarios === null){
    usuarios = []
    setObjectLocalStorage('navers',usuarios)
    // usuarios = [{nome: "Ricart", cargo: "Professor", idade:96, tempoDeEmpresa: 58, projetos: "Emrchiever, Wippy Pay, Project X, Sick Kids, Brain", imagem: "https://avatars.githubusercontent.com/u/38226399?v=4"}, {nome: "Ricart", cargo: "Professor", idade:96, tempoDeEmpresa: 58, projetos: "Emrchiever, Wippy Pay, Project X, Sick Kids, Brain", imagem: "https://avatars.githubusercontent.com/u/38226399?v=4"}, {nome: "Ricart", cargo: "Professor", idade:96, tempoDeEmpresa: 58, projetos: "Emrchiever, Wippy Pay, Project X, Sick Kids, Brain", imagem: "https://avatars.githubusercontent.com/u/38226399?v=4"}, {nome: "Ricart", cargo: "Professor", idade:96, tempoDeEmpresa: 58, projetos: "Emrchiever, Wippy Pay, Project X, Sick Kids, Brain", imagem: "https://avatars.githubusercontent.com/u/38226399?v=4"}]
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
    img.classList.add('profile-pic')

    img.addEventListener("click", () => openDialog(usuario))

    const nome = document.createElement("p");
    nome.innerText = usuario.nome
    nome.classList.add("negrito")


    const cargo = document.createElement("p");
    cargo.innerText = usuario.cargo

    const container = document.createElement("div");

    container.appendChild(img)
    container.appendChild(nome)
    container.appendChild(cargo)

    container.classList.add("card")
    
    return container
}

function openDialog(usuario){
    modal.showModal()
    const titulo = document.createElement('h1');
    titulo.innerText = usuario.nome;
    document.getElementById("modalContent").appendChild(
        titulo
    )
}


function setObjectLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getObjectLocalStorage(key){
    var value = localStorage.getItem(key);
    return value && JSON.parse(value);
}