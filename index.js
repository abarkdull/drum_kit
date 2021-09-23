var drum_buttons = document.querySelectorAll(".drum");

drum_buttons.forEach(drum_button => drum_button.addEventListener("click", function () {
        
        switch(this.innerHTML) {
            case 'w':
                (new Audio('sounds/crash.mp3')).play();
                break;
            case 'a':
                (new Audio('sounds/kick-bass.mp3')).play();
                break;
            case 's':
                (new Audio('sounds/snare.mp3 ')).play();
                break;
            case 'd':
                (new Audio('sounds/tom-1.mp3')).play();
                break;
            case 'j':
                (new Audio('sounds/tom-2.mp3')).play();
                break;
            case 'k':
                (new Audio('sounds/tom-3.mp3')).play();
                break;
            case 'l':
                (new Audio('sounds/tom-4.mp3')).play();
                break;
        }

    }    
));

document.addEventListener('keydown', function (event) {

    switch (event.key) {

        case 'w':
            (new Audio('sounds/crash.mp3')).play();
            break;
        case 'a':
            (new Audio('sounds/kick-bass.mp3')).play();
            break;
        case 's':
            (new Audio('sounds/snare.mp3 ')).play();
            break;
        case 'd':
            (new Audio('sounds/tom-1.mp3')).play();
            break;
        case 'j':
            (new Audio('sounds/tom-2.mp3')).play();
            break;
        case 'k':
            (new Audio('sounds/tom-3.mp3')).play();
            break;
        case 'l':
            (new Audio('sounds/tom-4.mp3')).play();
            break;
    }
})