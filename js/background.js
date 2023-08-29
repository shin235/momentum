const images = ["0.jpg", "1.jpg", "2.jpg"];

// randomness 부여
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");

bgimage.src = `img/${chosenImage}`;
console.log(bgimage);
document.body.appendChild(bgimage);
