
// CRIANDO TAGS PARA PROJETO
const body = document.querySelector("body")

const div = document.createElement("div")
div.classList.add("container")

const homePage = document.createElement("div")
homePage.classList.add("homePage")

const item = document.createElement("p")
item.classList.add("item")
item.innerText = "Item"

const valor = document.createElement("p")
valor.classList.add("valor")
valor.innerText = "valor"

const section = document.createElement("section")
section.classList.add("shopping")

const shoppingList = document.createElement("ul")
shoppingList.classList.add("product")

const divTotal = document.createElement("div")
divTotal.classList.add("Total")

const pTotal = document.createElement("p")
pTotal.classList.add("pTotal")
pTotal.innerText = "Total"

const valorTotal = document.createElement("span")
valorTotal.classList.add("valorTotal")
valorTotal.id = "precoTotal"
valorTotal.innerText = 0

const button = document.createElement("button")
button.classList.add("finalizarCompras")
button.innerText = "Finalizar compra"


// LISTANDO PRODUTOS 

function listarProdutos(produto) {

	for (let i = 0; i < produto.length; i++) {

		const produtoLoja = produto[i]

		// CRIANDO CARD COMPOSTOD E PRODUTOS 
		const cardProduto = criarCardProduto(produtoLoja, i)
		shoppingList.appendChild(cardProduto)

	}


}
listarProdutos(list)

// CRIANDO CARD COMPOSTOD E PRODUTOS 
function criarCardProduto(produto, contador) {
	let nome = produto.nome
	let preco = produto.preco

	const liProduto = document.createElement("li")
	const tagNome = document.createElement("p")
	tagNome.classList.add("nomeProduct")

	const tagPreco = document.createElement("p")
	tagPreco.classList.add("precoProduct")

	tagNome.innerHTML = `<strong>${nome}</strong>`
	tagPreco.innerText = ` R$ ${preco}`

	liProduto.appendChild(tagNome)
	liProduto.appendChild(tagPreco)
	liProduto.id = contador

	return liProduto
};

// ADICIONADNO TAGS AO DOCUMENTO 

body.appendChild(div)
div.appendChild(homePage)
homePage.appendChild(item)
homePage.appendChild(valor)
div.appendChild(section)
section.appendChild(shoppingList)
divTotal.appendChild(pTotal)
divTotal.appendChild(valorTotal)
div.appendChild(divTotal)
div.appendChild(button)



// SELECIONANDO TAGS PARA TARGET 
const list0 = document.getElementById("0")
const list1 = document.getElementById("1")
const list2 = document.getElementById("2")
const list3 = document.getElementById("3")
const list4 = document.getElementById("4")




// CONTANDO VALORES ADICIONADOS NO CARRINHO 

let values = []

section.addEventListener("click", valores);


function valores(evento) {

	let total = 0
    const span = document.getElementById("precoTotal")
	let select = evento.target.closest("li")
	let price = select.querySelector(".precoProduct")
	price = price.innerHTML
	price = price.slice(3)
	price = +price
	values.push(price)
	for (let i = 0; i < values.length; i++) {
		   total += values[i]
    }
    span.innerText =  `R$ ${total.toFixed(2)}`
   
}


button.addEventListener("click", finalizarCompras)

function finalizarCompras() {
		setTimeout(function(){ button.innerText = "Compra Finalizada"; }, 1000);
		const span = document.getElementById("precoTotal")
		setTimeout(function(){ span.innerText =  `R$ ${"0"}` }, 1000);
		
		
}