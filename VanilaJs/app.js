const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const CarouselItems = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5'];
const btnColorPicker = document.getElementById('btnColorFlipper');
const hexButton = document.getElementById('btnColorHex');
const color = document.querySelector('.color');
const counterValue = document.getElementById('CounterValue');
const counterButtons = document.querySelectorAll('#counter .btn');
const carouselh4 = document.querySelector('.carouselItem h4');
const carouselButtons = document.querySelectorAll('#carousel button');
const navMenu = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-links');
let count = 0;
let currentCarouselItem = 0;
loadCarousel();
btnColorPicker.addEventListener('click', (e) => {
  console.log(document.body);
  //random number between 0-3
  const randomNumber = getRandomNumber(0, 3);
  document.getElementById('colorFlipper').style.backgroundColor =
    colors[randomNumber];
  color.textContent = colors[randomNumber];
});

hexButton.addEventListener('click', (e) => {
  //random number between 0-3
  const hexValue = getHexaValue();
  document.getElementById('colorFlipper').style.backgroundColor = hexValue;
  color.textContent = hexValue;
});

var getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

var getHexaValue = () => {
  const colrValues = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];
  let hexValue = '#';
  for (let i = 0; i < 6; i++) {
    hexValue += colrValues[getRandomNumber(0, 16)];
  }
  return hexValue;
};
//Counter
counterButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')) {
      count--;
    } else if (styles.contains('increase')) {
      count++;
    } else if (styles.contains('reset')) {
      count = 0;
    }

    if (count > 0) {
      counterValue.style.color = 'green';
    } else if (count == 0) {
      counterValue.style.color = '#222';
    }
    if (count < 0) {
      counterValue.style.color = 'red';
    }
    counterValue.textContent = count;
  });
});
//Carousel
carouselButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList;
    const length = CarouselItems.length;
    if (styles.contains('carouselPrevious')) {
      currentCarouselItem = (currentCarouselItem - 1 + length) % length;
    } else if (styles.contains('carouselNext')) {
      currentCarouselItem = (currentCarouselItem + 1 + length) % length;
    }
    loadCarousel();
  });
});
function loadCarousel() {
  carouselh4.textContent = CarouselItems[currentCarouselItem];
}
//nav-Link
navMenu.addEventListener('click', (e) => {
  navLinks.forEach((link) => {
    link.classList.toggle('show-links');
  });
});
