const card = document.querySelectorAll('.card_inner');
const cards = document.getElementById('cards');

const draw = document.getElementById('draw');

//Pärchen erstellen
const base = ['A','B','C','D','E','F','G','H','I','J','K','L'];
const deck01 = deckCreate('deck01');


const backSide = '<img src="img/bs/magic_k.jpg" alt="backside">';

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


/*
card.forEach(c => 
    c.addEventListener('click', ()=>
        c.classList.toggle('rot')
    )
);

function newCard(){
    newC = document.createElement('div');
    newC.classList.add('card');
    newC.innerHTML = `<div class="card_inner">
                        <div class="front">A</div>
                        <div class="back">B</div>
                    </div>`;

    cards.append(newC);

    const newInner = newC.querySelector('.card_inner');
    newInner.addEventListener('click', ()=>{
        newInner.classList.toggle('rot');
    })
}
*/
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
        backDiv.append(deck[i].value.cloneNode(true));

        const newInner = newC.querySelector('.card_inner');
        newInner.addEventListener('click', ()=>{
            newInner.classList.toggle('rot');
        })
        
    }
}

function deckCreate(deckName){
    return Array.from({length: 12}, (_,i) =>{
        const img = document.createElement('img');
        img.src = `img/${deckName}/${i}.jpg`;
        img.alt = 'pic';
        return img;
    });
}

draw.addEventListener('click', ()=>{
    drawCards(24);
}, {once:true});