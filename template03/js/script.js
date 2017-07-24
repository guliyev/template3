var slideIndex=1;
showSlides(slideIndex);

function onclick(n){

    showSlides(slideIndex +=n )
}
function showSlides(n){

    var slides = document.getElementsByClassName("mySlider");
    if(n>slides.length){slideIndex=1}
    if(n<1){slideIndex=slides.lenght}
    for(var i =0; i< slides.length;i++){

        slides[i].style.display= "none";
    }
    slideIndex++;
    if(slideIndex>slides.length){slideIndex=1}
    slides[slideIndex-1].style = "display:block";
    setTimeout(showSlides,3000);
}