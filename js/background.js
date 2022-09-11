const images = [
    "pic2.jpg", "pic3.jpg", "pic5.jpg",
];
const chosen = images[Math.floor(Math.random()*images.length)];
const bgImg = document.createElement("img");

bgImg.src = `img/${chosen}`;
console.log(bgImg);
document.body.appendChild(bgImg);



