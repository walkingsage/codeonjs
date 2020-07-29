export const radioplayerInit = () => {
const radio = document.querySelector('.radio'),
radioCoverImg = document.querySelector('.radio-cover__img'),
radioNavigation = document.querySelector('.radio-navigation'),
radioHeader = document.querySelector('.radio-header__big'),
radioItem = document.querySelectorAll('.radio-item'),
radioStop = document.querySelector('.radio-stop'),
volumeStat = document.querySelector('.volume__stat');

const audio = new Audio();
audio.type = 'audio/aac';

radioStop.disabled = true;

radioNavigation.addEventListener('change', event => {
    const target = event.target,
    parent = target.closest('.radio-item'),
    title = parent.querySelector('.radio-name').textContent,
    img = parent.querySelector('.radio-img').src;
    radioCoverImg.src = img;
    radioHeader.textContent = title;
    selectItem(parent);
    audio.src = target.dataset.radioStantion;
    audio.play();
    radioStop.disabled = false;
    
    changeIconPlay();
});

volumeStat.addEventListener('change', () => {
    const val = volumeStat.value / 100;
    audio.volume = val;
    console.log(val);
});

const changeIconPlay = () => {
    if (audio.paused){    
        radio.classList.remove('play');  
        radioStop.classList.add('fa-play');
        radioStop.classList.remove('fa-stop'); 
    }
    else{
        radio.classList.add('play'); 
        radioStop.classList.add('fa-stop');
        radioStop.classList.remove('fa-play');
    }
};

const selectItem = elem => {
    radioItem.forEach(item => {
        item.classList.remove('select');
    });
    elem.classList.add('select');
};

radioStop.addEventListener('click', () => {
    if (audio.paused){
        audio.play();
    }
    else{
        audio.pause();
    }
    changeIconPlay();
});
};