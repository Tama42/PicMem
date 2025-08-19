let first = null;
let second = null;
let locked = false;
let trys = 0;
let matches = 0;

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
        counterView(1);
        resetPick();
    }
    else{
        setTimeout(() => {
            first.classList.remove('rot');
            second.classList.remove('rot');
            counterView(2);
            resetPick();
        }, 1200);
    }
}

function resetPick(){
    first = null;
    second = null;
    locked = false;
}


function counterView(mode){
    const tC = document.getElementById('trysCount');
    const mC = document.getElementById('matchesCount');
    if(mode===1){
        trys += 1;
        matches += 1;
        tC.innerText = trys;
        mC.innerText = `${matches} / 12`;
    }
    else if(mode===2){
        trys += 1;
        tC.innerText = trys;
    }
}