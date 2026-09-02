document.addEventListener('DOMContentLoaded', () => {

  // --- Tilt de la foto (solo existe en index.html) ---
  const foto = document.querySelector('.imagenContacto');
  if (foto) {
    foto.addEventListener('mousemove', (e) => {
      const rect = foto.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const centerX = rect.width / 2;
      const rotate = ((x - centerX) / centerX) * 6;
      foto.style.transform = `rotate(${rotate}deg)`;
    });

    foto.addEventListener('mouseleave', () => {
      foto.style.transform = 'rotate(0deg)';
    });
  }

  // --- Banderas / confetti (solo existe en index.html) ---
  const flagMap = {
    containerS: '🇲🇽',
    containerE: '🇺🇸',
    containerF: '🇫🇷',
    containerI: '🇮🇹'
  };

  document.querySelectorAll('.containerLang').forEach(container => {
    container.addEventListener('click', () => {
      const claseIdioma = Object.keys(flagMap).find(clase => container.classList.contains(clase));
      const emoji = flagMap[claseIdioma];
      if (!emoji) return;
      lanzarConfetti(emoji);
    });
  });

  function lanzarConfetti(emoji) {
    const cantidad = 40;
    for (let i = 0; i < cantidad; i++) {
      const bandera = document.createElement('span');
      bandera.textContent = emoji;
      bandera.classList.add('confetti-bandera');
      bandera.style.left = Math.random() * 100 + 'vw';
      bandera.style.fontSize = (1.5 + Math.random() * 2) + 'rem';
      bandera.style.animationDuration = (2 + Math.random() * 2) + 's';
      bandera.style.animationDelay = (Math.random() * 0.5) + 's';
      document.body.appendChild(bandera);
      bandera.addEventListener('animationend', () => bandera.remove());
    }
  }

  // --- Botones de skills (solo existe en index.html) ---
  function agitarIconos(contenedorClase) {
    const contenedor = document.querySelector('.' + contenedorClase);
    if (!contenedor) return;
    const iconos = contenedor.querySelectorAll('img');
    iconos.forEach(icono => {
      icono.classList.remove('temblar');
      void icono.offsetWidth;
      icono.classList.add('temblar');
    });
  }

  const btnDesign = document.querySelector('.btnDesign');
  if (btnDesign) {
    btnDesign.addEventListener('click', () => agitarIconos('skillsContainer'));
  }

  const btnDev = document.querySelector('.btnDev');
  if (btnDev) {
    btnDev.addEventListener('click', () => agitarIconos('skillsDev'));
  }

  // --- Galería con miniaturas (solo existe en páginas de proyectos) ---
  const principal = document.getElementById('imagenPrincipal');
  if (principal) {
    document.querySelectorAll('.miniaturas img').forEach(mini => {
      mini.addEventListener('click', () => {
        principal.src = mini.src;
        document.querySelectorAll('.miniaturas img').forEach(m => m.classList.remove('activa'));
        mini.classList.add('activa');
      });
    });
  }

});

const papel = document.querySelector('.imgPortada');
if (papel) {
  papel.addEventListener('mousemove', (e) => {
    const rect = papel.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const centerX = rect.width / 2;

    const rotate = ((x - centerX) / centerX) * 6;

    papel.style.transform = `rotate(${rotate}deg)`;
  });

  papel.addEventListener('mouseleave', () => {
    papel.style.transform = 'rotate(0deg)';
  });
}

const badgePremios = document.getElementById('badgePremios');
const listaPremiosDesplegable = document.getElementById('listaPremiosDesplegable');

if (badgePremios && listaPremiosDesplegable) {
  badgePremios.addEventListener('click', () => {
    // agita el badge
    badgePremios.classList.remove('agitando');
    void badgePremios.offsetWidth;
    badgePremios.classList.add('agitando');

    // abre/cierra la lista
    listaPremiosDesplegable.classList.toggle('abierto');
  });
}