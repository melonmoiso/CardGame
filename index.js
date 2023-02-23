document.addEventListener('DOMContentLoaded', () => {
    const cartasarray = [ 
        {
            name: 'josmar',
            img: 'josmar.png'
        },
        {
            name: 'josmar',
            img: 'josmar.png'
        },
        {
            name: 'josmar',
            img: 'josmar.png'
        },
        {
            name: 'pozi',
            img: 'pozi.png'
        },
        {
            name: 'pozi',
            img: 'pozi.png'
        },
        {
            name: 'pozi',
            img: 'pozi.png'
        },
        {
            name: 'leonardo',
            img: 'leonardo.png'
        },
        {
            name: 'leonardo',
            img: 'leonardo.png'
        },
        {
            name: 'leonardo',
            img: 'leonardo.png'
        },
        {
            name: 'paco',
            img: 'paco.png'
        },
        {
            name: 'paco',
            img: 'paco.png'
        },
        {
            name: 'paco',
            img: 'paco.png'
        },
        {
            name: 'pantoja',
            img: 'pantoja.png'
        },
        {
            name: 'pantoja',
            img: 'pantoja.png'
        },
        {
            name: 'pantoja',
            img: 'pantoja.png'
        },
        {
            name: 'ramon',
            img: 'ramon.png'
        },
        {
            name: 'ramon',
            img: 'ramon.png'
        },
        {
            name: 'ramon',
            img: 'ramon.png'
        },
]

cartasarray.sort(() => 0.5 - Math.random())
const grid = document.querySelector('.grid')
const resultdisplay = document.querySelector('#resultado')
var  cartaelegida = []
var  cartaelegidaid = []
var  cartaganadora = []
function creartablero() {

    for (let i = 0; i < cartasarray.length; i++) {
        var carta = document.createElement('img')
        carta.setAttribute('src','fondo.png')
        carta.setAttribute('data-id', i)
        carta.addEventListener('click', voltearcarta)
        grid.appendChild(carta)
    }
}


function checkcarta(){
    var cards = document.querySelectorAll('img')
    const opcion1id = cartaelegidaid[0]
    const opcion2id = cartaelegidaid[1]
    const opcion3id = cartaelegidaid[2]
    if ( cartaelegida[0]===cartaelegida[1]&&cartaelegida[2]==cartaelegida[1]){
        alert('Vamos cabeza de gamba, has hecho un matchsito')
    
    cards[opcion1id].setAttribute('src','blanco.png')
    cards[opcion2id].setAttribute('src','blanco.png')
    cards[opcion3id].setAttribute('src','blanco.png')
    cartaganadora.push(cartaelegida)}
    else{
        cards[opcion1id].setAttribute('src', 'fondo.png')
        cards[opcion2id].setAttribute('src', 'fondo.png')
        cards[opcion3id].setAttribute('src', 'fondo.png')
    }
    cartaelegida = []
    cartaelegidaid = []
    resultdisplay.textContent = cartaganadora.length
    if (cartaganadora.length===cartasarray.length/3){
        resultdisplay.textContent = 'Has ganao un ipone die prox max per sabias que vaporeon...'
    }
}

function voltearcarta (){
    var cartaid = this.getAttribute('data-id')
    cartaelegida.push(cartasarray[cartaid].name)
    cartaelegidaid.push(cartaid)
    this.setAttribute('src', cartasarray[cartaid].img) 
    if (cartaelegida.length===3){
        setTimeout(checkcarta, 400)
    }
}

creartablero()

})