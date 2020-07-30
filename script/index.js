import { radioplayerInit } from './radioplayer.js';
import { videoplayerInit } from './videoplayer.js';
import { musicplayerInit } from './musicplayer.js';

videoplayerInit();
radioplayerInit();
musicplayerInit();

const playerBtn = document.querySelectorAll('.player-btn'),
playerBlock = document.querySelectorAll('.player-block'),
temp = document.querySelector('.temp');

let HideElem  = function (elem){
    elem.style.display = 'none';
};

let ShowElem = function (elem){
    elem.style.display = 'block';
};

const deactivationPlayer = () => {
    HideElem(temp);
    playerBtn.forEach((item) => {
        item.classList.remove('active');
    });
    playerBlock.forEach((item) => {
        item.classList.remove('active');
    });

    musicplayerInit.stop();
    radioplayerInit.stop();
    videoplayerInit.stop();
}


playerBtn.forEach((btn,i) => {
    btn.addEventListener('click', () => {
        deactivationPlayer();
        btn.classList.add('active');
        playerBlock[i].classList.add('active');
    });
});
