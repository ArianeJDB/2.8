'use strict';

const face = document.querySelector('.face');

function wink() {
    face.innerHTML = ';)';
}

face.addEventListener('click', wink);

function eyes() {
    face.innerHTML = ':)';
}

face.addEventListener('mouseout', eyes);