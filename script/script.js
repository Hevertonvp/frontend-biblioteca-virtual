
var body = document.getElementById("body")

function toggleTheme() {
    body.classList.toggle("night-mode")
}

function handleSignInModal(){
    body.classList.toggle("modal-toggle")
}

const slidesContainer = document.getElementById("slides-container")
const slide = document.querySelector(".slide")
const prevButtom = document.getElementById("slide-arrow-prev")
const nextButtom = document.getElementById("slide-arrow-next")


document.addEventListener("DOMContentLoaded", () => {
    const slideWidth = slide.clientWidth // Largura de cada slide
    const slidesContainer = document.getElementById('slides-container') // Container dos slides
    let currentIndex = 0 // Índice do slide atual

    // Função para avançar para o próximo slide
    const nextSlide = () => {
        currentIndex++
        if (currentIndex >= slidesContainer.children.length) {
            currentIndex = 0 // Volta para o primeiro slide ao chegar ao último
        }
        const newPosition = currentIndex * slideWidth
        slidesContainer.scrollTo({
            left: newPosition,
            behavior: 'smooth'
        })
    }

    // Rotação automática a cada 4 segundos
    setInterval(nextSlide, 4000)
})


document.getElementById("book-form").addEventListener('submit', function (e) {
    e.preventDefault()
    
const livro = {
        titulo: document.getElementById("titulo").value,
        autor: document.getElementById("autor").value,
        imgUrl: document.getElementById("imgUrl").value || null,
        avaliacao: parseInt(document.getElementById("avaliacao").value || null),
        descricao: document.getElementById("descricao").value || null,
        quantidade: document.getElementById("quantidade").value,
        isbn: document.getElementById("isbn").value,
        anoDePublicacao: document.getElementById("anoPublicacao").value,
        editora: document.getElementById("editora").value,
    }


    fetch('http://localhost:5029/api/livro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(livro),
    })
        .then(response => response.json())
        .then(data => {
            alert("livro cadastrado com sucesso!")
            console.log(data)
        })
        .catch((error) => {
            alert("não foi possível cadastrar o livro" + error)
        })


})


let url = "http://localhost:5029/api/Livro"
let div_container = document.getElementsByClassName("container")[0]

function fetchAndDisplayLivros(endpoint) {
    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            data.map(element => {
                let divCard = document.createElement("div")
                divCard.classList.add("card")
                let divCover = document.createElement("div")
                divCover.classList.add("div-cover")
                let a = document.createElement("a")
                a.classList.add("detalhes")
                a.textContent = "Detalhes"
                let img = document.createElement("img")
                img.src = element.imgUrl
                divCover.appendChild(a)
                divCard.appendChild(divCover)
                divCard.appendChild(img)
                div.appendChild(divCard)
            })
        })
}
fetchAndDisplayLivros(url)

function submitForm(event) {
    event.preventDefault()

    var nome = document.getElementById("nome-formulario").value
    var senha = document.getElementById("senha-formulario").value
    var confirmar = document.getElementById("confirmar-senha").value
    var telefone = document.getElementById("telefone-formulario").value
    var email = document.getElementById("email-formulario").value
    var endereco = document.getElementById("endereco-formulario").value

    console.log(nome)
    // console.log(event.target.value)
}


let div = document.getElementsByClassName("genre-container")[0]

function fetchAndDisplayGenre(endpoint) {
    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        data.map(element => {
            let divCard = document.createElement("div")
            divCard.classList.add("card")
        })
    })
}