function init(){
    function addSource(btn){
        btn.children[0].src = `./sounds/${btn.id}.wav`;
    }

    function playAudio(event){
        const btn = event.target;
        btn.children[0].play();
    }

    //buttons
    document.querySelectorAll('button').forEach( (btn, i) => {
        if(i <= 3 ){
            btn.classList.add('red');
        }
        else if( i <= 7){
            btn.classList.add('white');
        }
        else if( i <= 11 ){
            btn.classList.add('darkyellow');
        }
        else{
            btn.classList.add('darkred');
        }
        addSource(btn);
        btn.addEventListener('click', playAudio);
    })

}
window.addEventListener('DOMContentLoaded', init);