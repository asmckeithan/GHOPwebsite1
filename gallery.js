const images = [
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg"
];

const gallery = document.querySelector(".gallery-grid");

images.forEach(img => {
  const image = document.createElement("img");
  image.src = `/gallery/${img}`;
  gallery.appendChild(img);
});
