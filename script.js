const cards = document.getElementById('cards');
const draw = document.getElementById('draw');

//Decks
const base = ['A','B','C','D','E','F','G','H','I','J','K','L'];
const deck01 = deckCreate('deck01');


const backSide = '<img src="img/bs/magic_k.jpg" alt="backside">';

cards.addEventListener('click', e =>{
    const cardInner = e.target.closest('.card_inner');
    if(cardInner && cards.contains(cardInner)){
        cardInner.classList.toggle('rot');
    }
})

function makeDeck(items){
    return shuffle([...items, ...items].map((val, i) => ({
        id: i,
        value: val,
    })));
}

function shuffle(arr){
    for(let i=arr.length-1;i>0;i--){
        const j = Math.floor(Math.random()*(i+1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function drawCards(size){
    const deck = makeDeck(deck01);
    for(let i=0; i<size; i++){
        const newC = document.createElement('div');
        newC.classList.add('card');
        newC.innerHTML = `<div class="card_inner">
                            <div class="front">${backSide}</div>
                            <div class="back"></div>
                        </div>`;
        cards.append(newC);
        const backDiv = newC.querySelector('.back');
        backDiv.innerHTML = deck[i].value;
    }
}

function deckCreate(deckName){
    return Array.from({length: 12}, (_,i) =>{
        return `<img src='img/${deckName}/${i}.jpg' alt='pic'>`;
    });
}

draw.addEventListener('click', ()=>{
    drawCards(24);
}, {once:true});