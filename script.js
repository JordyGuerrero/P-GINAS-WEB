// Configuración del carrusel
$(document).ready(function(){
    $('.carrusel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    
});