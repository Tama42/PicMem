const cards = document.getElementById('cards');
const draw = document.getElementById('draw');
const reset = document.getElementById('reset');


//Decks
const base = ['A','B','C','D','E','F','G','H','I','J','K','L'];
const deck01 = deckCreate('deck01');


const backSide = '<img src="img/bs/magic_k.jpg" alt="backside">';

cards.addEventListener('click', e =>{
    const inner = e.target.closest('.card_inner');
console.log('click?', { target:e.target, inner });
    if(!inner || !cards.contains(inner)) return;
    onCardClick(inner);
});

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
    const n = Math.min(size, deck.length);
    for(let i=0; i<n; i++){
        const newC = document.createElement('div');
        newC.classList.add('card');
        newC.innerHTML = `<div class="card_inner">
                            <div class="front">${backSide}</div>
                            <div class="back"></div>
                        </div>`;
        cards.append(newC);
        const backDiv = newC.querySelector('.back');
        const inner = newC.querySelector('.card_inner');
        backDiv.innerHTML = deck[i].value;
        inner.dataset.value = deck[i].value;
    }
}

function deckCreate(deckName){
    return Array.from({length: 12}, (_,i) =>{
        return `<img src='img/${deckName}/${i}.jpg' alt='pic'>`;
    });
}

function fieldReset(){
    const askReset = "Spielfeld wirklich zurück setzen? Der Aktuelle Spielstand wird gelöscht";
    const cards = document.querySelector('#cards');
    const tC = document.getElementById('trysCount');
    const mC = document.getElementById('matchesCount');

    if(cards.children.length > 0){
        if (confirm(askReset)){
            draw.addEventListener('click', ()=>{
            drawCards(24);
            }, {once:true});
            tC.innerText = 0;
            mC.innerText = '0 / 12'
            return cards.innerHTML = "";
        }
        else return;
    }
}

draw.addEventListener('click', ()=>{
    drawCards(24);
}, {once:true});

reset.addEventListener('click', fieldReset);

