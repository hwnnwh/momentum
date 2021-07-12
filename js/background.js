const images = [
  "0.jpeg",
  "1.jpg",
  "2.jpg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
  "10.jpg",
  "11.jpeg",
  "12.jpeg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.style.background = `url(img/${chosenImage})`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";

if (
  chosenImage === "10.jpg" ||
  chosenImage === "11.jpeg" ||
  chosenImage === "12.jpeg"
) {
  document.body.style.color = "rgba(0,0,0,0.6)";
} else {
  document.body.style.color = "lavender";
}
