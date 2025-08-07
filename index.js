// 🌀 Swiper config
const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 800,
});

// 📞 Aplica máscara no telefone
Inputmask({ mask: "(99) 99999-9999" }).mask("#telefone");

// ✉️ Ao enviar o formulário, redireciona para ementa.html
document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();
  window.location.href = "ementa.html";
});

