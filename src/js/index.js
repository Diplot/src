/*Tabs mrt/KT */
$(function () {
 $("#tabs").tabs();
});
/* Индекс слайда по умолчанию */
var art = 1;
showArt(art);
/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function nextArt() {
 showArt(art += 1);
}
/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function previousArt() {
 showArt(art -= 1);
}
/* Основная функция слайдера */
function showArt(n) {
 var i;
 var slidesArt = document.getElementsByClassName("item");
 if (n > slidesArt.length) {
  art = 1
 }
 if (n < 1) {
  art = slidesArt.length
 }
 for (i = 0; i < slidesArt.length; i++) {
  slidesArt[i].style.display = "none";
 }
 slidesArt[art-1].style.display = "block";
}

/*Слайдер комментариев*/
var com = 1;
showCom(com);
/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function nextCom() {
 showCom(com += 1);
}
/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function previousCom() {
 showCom(com -= 1);
}
/* Основная функция слайдера */
function showCom(n) {
 var i;
 var slidesCom = document.getElementsByClassName("item-com");
 if (n > slidesCom.length) {
  com = 1
 }
 if (n < 1) {
  com = slidesCom.length
 }
 for (i = 0; i < slidesCom.length; i++) {
  slidesCom[i].style.display = "none";
 }
 slidesCom[com-1].style.display = "block";
}