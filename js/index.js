"use strict";

function startCountdown() {
  const targetTime = new Date().getTime() + (4 * 60 * 60 * 1000) + (51 * 60 * 1000) + (16 * 1000);
  const timerElement = document.getElementById('timer');

  function updateTimer() {
    const currentTime = new Date().getTime();
    const timeRemaining = targetTime - currentTime;

    if (timeRemaining <= 0) {
      timerElement.textContent = 'Время истекло!';
      clearInterval(intervalId);
    } else {
      const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
      const seconds = Math.floor((timeRemaining / 1000) % 60);

      timerElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
  }

  const intervalId = setInterval(updateTimer, 1000);

  updateTimer();
}

startCountdown();


const sliderData = ['black', 'orange', 'pink', 'yellow', 'yellow', 'yellow'];
const sliderItemsContainer = document.getElementById('slider-items');
const sliderImg = document.getElementById('slider-img');

function selectImage(index) {
  sliderImg.innerHTML = `<img src="./assets/images/${sliderData[index]}-slipper.png" alt="slipper">`;
}

function renderSlider() {
  selectImage(0);
  for (let i = 0; i < sliderData.length; i++) {
    sliderItemsContainer.innerHTML += `<div class="slider-item ${i === 0 && 'slider-item-active'}"><img src="./assets/images/${sliderData[i]}-slipper.png" alt="slipper"></div>`
  }
}

renderSlider();

const sliderItems = document.getElementsByClassName('slider-item');

for (let i = 0; i < sliderItems.length; i++) {
  sliderItems[i].addEventListener('click', () => {
    for (let j = 0; j < sliderItems.length; j++) {
      sliderItems[j].classList.remove('slider-item-active');
    }
    sliderItems[i].classList.add('slider-item-active');
    selectImage(i);
  });
}

const stars = document.querySelectorAll('.star');

stars.forEach((star, index1) => {
  star.addEventListener('click', () => {
    stars.forEach((star2, index2) => {
      index1 >= index2 ? star2.classList.add('star-active') : star2.classList.remove('star-active');
    });
  })
});

function selectColor() {
  document.getElementById("color-dropdown").classList.toggle("show");
  document.getElementById("color-drop-arrow").classList.toggle("rotate");
}

const colorDropdown = document.getElementById('color-dropdown');
const colorDropBtnText = document.getElementById('color-drop-button-text');
const colorDropdownItems = colorDropdown.querySelectorAll('p');
colorDropdownItems.forEach((item) => {
  item.addEventListener('click', () => {
    for (let j = 0; j < colorDropdownItems.length; j++) {
      colorDropdownItems[j].classList.remove('active');
    }
    colorDropBtnText.innerText = item.innerText
    item.classList.add('active');
  })
});

function selectSize() {
  document.getElementById("size-dropdown").classList.toggle("show");
  document.getElementById("size-drop-arrow").classList.toggle("rotate");
}

const sizeDropdown = document.getElementById('size-dropdown');
const sizeDropBtnText = document.getElementById('size-drop-button-text');
const sizeDropdownItems = sizeDropdown.querySelectorAll('p');
sizeDropdownItems.forEach((item) => {
  item.addEventListener('click', () => {
    for (let j = 0; j < sizeDropdownItems.length; j++) {
      sizeDropdownItems[j].classList.remove('active');
    }
    sizeDropBtnText.innerText = item.innerText;
    item.classList.add('active');
  })
});

window.onclick = function(event) {
  if (!event.target.matches('#color-drop-button-text') && !event.target.matches('#color-drop-arrow')) {
    const dropdown = document.getElementById("color-dropdown");
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
      document.getElementById("color-drop-arrow").classList.remove("rotate");
    }
  }
  if (!event.target.matches('#size-drop-button-text') && !event.target.matches('#size-drop-arrow')) {
    const dropdown = document.getElementById("size-dropdown");
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
      document.getElementById("size-drop-arrow").classList.remove("rotate");
    }
  }
};