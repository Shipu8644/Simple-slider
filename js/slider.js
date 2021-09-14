const images = [
    'images/img-1.jpg',
    'images/img-2.jpg',
    'images/img-3.jpg',
    'images/img-4.jpg',
    'images/img-5.jpg',
    'images/img-6.jpg',
    'images/img-7.jpg'

];
let imgIndex = 0;
const imgFind = document.getElementById('pic');
setInterval(() => {
    if (imgIndex > images.length - 1) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgFind.setAttribute('src', imgUrl);
    imgIndex++;
}, 2000)