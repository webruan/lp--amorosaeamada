var isMobile = window.innerWidth <= 767;

var tagOne = document.getElementById('second');
var tagTwo = document.getElementById('third');

if (isMobile) {
  tagOne.innerHTML = 'Depois de passar por situações <del>péssimas</del> no relacionamento anterior e com sua vasta experiência em ajudar mulheres a transformarem suas vidas amorosas, ela se tornou uma <span class="f-b c-p0">referência no mundo dos relacionamentos.</span>';
  tagTwo.innerHTML = 'Sua missão é guiá-la para que você tenha o amor próprio e o <span class="f-b c-p0">relacionamento afetivo que sempre desejou.</span>';
} else {
  tagOne.innerHTML = 'Sua missão é guiá-la para que você tenha o amor próprio e o <span class="f-b c-p0">relacionamento afetivo que sempre desejou.</span>';
  tagTwo.innerHTML = 'Depois de passar por situações <del>péssimas</del> no relacionamento anterior e com sua vasta experiência em ajudar mulheres a transformarem suas vidas amorosas, ela se tornou uma <span class="f-b c-p0">referência no mundo dos relacionamentos.</span>';
}
