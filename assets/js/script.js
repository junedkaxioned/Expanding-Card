
var card = document.querySelectorAll(".card");

card[0].classList.add('active');

card.forEach(function(expand){
  expand.addEventListener('click', function (clickEvent) {
    for (var img of card) {
      img.classList.remove('active');
    }
    clickEvent.target.classList.add('active');
  })
})


