const card = document.querySelectorAll('.card_inner');
const cards = document.getElementById('cards');

const draw = document.getElementById('draw');


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

draw.addEventListener('click', newCard);