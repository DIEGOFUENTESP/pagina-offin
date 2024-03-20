document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('mobile-menu');
  const menuOptions = document.getElementById('menu-options');

  menuToggle.addEventListener('click', function () {
    menuToggle.classList.toggle('active');
    menuOptions.classList.toggle('active');
  });
});

if ('ontouchstart' in window || navigator.maxTouchPoints) {
  document.body.classList.add('touch');
}

document.addEventListener("DOMContentLoaded", function () {
  const imageContainers = document.querySelectorAll(".image-container-imagenes3");

  imageContainers.forEach((container) => {
    container.addEventListener("mouseover", function () {
      container.querySelector("img").style.transform = "scale(1.2)";
      container.querySelector(".overlay-imagenes3").style.opacity = 1;
      container.querySelector(".text-imagenes3").style.opacity = 1;
      container.querySelector(".button-imagenes3").style.opacity = 1;
    });

    container.addEventListener("mouseout", function () {
      container.querySelector("img").style.transform = "scale(1)";
      container.querySelector(".overlay-imagenes3").style.opacity = 0;
      container.querySelector(".text-imagenes3").style.opacity = 0;
      container.querySelector(".button-imagenes3").style.opacity = 0;
    });
  });

  $('.image-carousel').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 1000  // Configura el tiempo en milisegundos (en este caso, 1 segundos)
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const detalles = document.querySelectorAll('.faq-container details');

  detalles.forEach(function (detalle) {
    detalle.addEventListener('click', function () {
      // Cerrar todos los detalles excepto el actual
      detalles.forEach(function (otroDetalle) {
        if (otroDetalle !== detalle) {
          otroDetalle.removeAttribute('open');
        }
      });
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var botonCotizar = document.getElementById("enlaceCotizar");
  botonCotizar.addEventListener("click", function (event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    var formulario = document.getElementById("miFormulario");
    formulario.scrollIntoView({ behavior: "smooth" }); // Desplazamiento suave hacia el formulario
  });
});
$(document).ready(function () {
  $('#imageCarousel').slick({
    dots: true, // Muestra los puntos de navegación
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Cambia la imagen cada 3 segundos (ajusta según sea necesario)
  });
});
let myCurrentIndex = 0;

  function myShowSlide(index) {
    const myCarousel = document.getElementById('my-carousel');
    const mySlides = document.getElementsByClassName('my-slide');
    const myDots = document.getElementById('my-nav-dots').children;

    if (index >= mySlides.length) {
      myCurrentIndex = 0;
    } else if (index < 0) {
      myCurrentIndex = mySlides.length - 1;
    } else {
      myCurrentIndex = index;
    }

    const myTransformValue = -myCurrentIndex * 100 + '%';
    myCarousel.style.transform = 'translateX(' + myTransformValue + ')';

    // Actualizar los puntos
    for (let i = 0; i < myDots.length; i++) {
      myDots[i].classList.remove('active');
    }
    myDots[myCurrentIndex].classList.add('active');
  }

  function myCreateNavDots() {
    const myDotsContainer = document.getElementById('my-nav-dots');
    const mySlides = document.getElementsByClassName('my-slide');

    for (let i = 0; i < mySlides.length; i++) {
      const myDot = document.createElement('div');
      myDot.className = 'my-dot';
      myDot.classList.add(`my-image-${i + 1}`);
      myDot.addEventListener('click', function () {
        myShowSlide(i);
      });
      myDotsContainer.appendChild(myDot);
    }

    // Marcar el primer punto como activo
    myDotsContainer.children[0].classList.add('active');
  }

  function myPrevSlide() {
    myShowSlide(myCurrentIndex - 1);
  }

  function myNextSlide() {
    myShowSlide(myCurrentIndex + 1);
  }

  // Crear los puntos de navegación
  myCreateNavDots();

  // Mostrar la primera imagen
  myShowSlide(myCurrentIndex);

  // Cambiar de imagen cada 5 segundos (5000 milisegundos)
  setInterval(function () {
    myShowSlide(myCurrentIndex + 1);
  }, 5000);
