// const scroleyItem = document.querySelectorAll('.scroley-item'),
//       scroleyPrev = document.querySelector('.scroley-prev'),
//       scroleyNext = document.querySelector('.scroley-next');
//
// let scroleyItemWidth = 300,
//     scroleyItemMargin = 50,
//     scroleyCurrentOffset = 0;
//
// let total = scroleyItemWidth + scroleyItemMargin;
//
//
//     scroleyNext.addEventListener('click', function (e) {
//         scroleyCurrentOffset = scroleyCurrentOffset - total;
//         moveImages();
//     });
//
//     scroleyPrev.addEventListener('click', function (e) {
//         scroleyCurrentOffset = scroleyCurrentOffset + total;
//         moveImages();
//     });
//
//
//
// function moveImages(){
//     let transform = `translateX(${scroleyCurrentOffset}px)`;
//     scroleyItem.forEach((item) => item.style.transform = transform);
// }
