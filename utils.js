let first = null;
let second = null;
let locked = false;

function onCardClick(inner){
    if(locked) return;
    if(inner.classList.contains('done')) return;
    if(inner === first) return;

    inner.classList.add('rot');

    if(!first){
        first = inner;
        return
    }

    second = inner;
    locked = true;
    const match = first.dataset.value === second.dataset.value;

    if(match){
        first.classList.add('done');
        second.classList.add('done');
        resetPick();
    }
    else{
        setTimeout(() => {
            first.classList.remove('rot');
            second.classList.remove('rot');
            resetPick();
        }, 700);
    }
}

function resetPick(){
    first = null;
    second = null;
    locked = false;
}

window.onCardClick = onCardClick;