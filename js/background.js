const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const background = document.querySelector("#wrapper");

background.style.backgroundImage = `url(img/${chosenImage})`;