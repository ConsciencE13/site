// Модальное окно
var modal = document.querySelector('.modal');

var modalImg = document.querySelector('.modal-content')

var imgs = document.querySelectorAll('.imgFans')
imgs.forEach (img => {
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
});



// Закрытие
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
